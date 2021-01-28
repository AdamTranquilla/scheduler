import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData(initial) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  function spotsRemaining(day, appointments) {
    let spotsForThisDay = day.appointments;
    let openSpots = 0;
    for (const spot of spotsForThisDay) {
      if (appointments[spot].interview === null) {
        openSpots++;
      }
    }
    return openSpots;
  }

  function displaySpots(days, appointments) {
    const spots = days.map((day) => ({
      ...day,
      spots: spotsRemaining(day, appointments),
    }));
    return spots;
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const days = displaySpots(state.days, appointments);

    return axios
      .put(`/api/appointments/${id}`, appointment)
      .then(setState({ ...state, days, appointments }));
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const days = displaySpots(state.days, appointments);

    return axios
      .delete(`/api/appointments/${id}`)
      .then(setState({ ...state, days, appointments }));
  }

  return { state, setDay, bookInterview, cancelInterview };
}
