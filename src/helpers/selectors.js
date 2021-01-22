export const getAppointmentsForDay = (state, day) => {
  const daysAppts = [];

  state.days.forEach((daysData) => {
    if (daysData.name === day) {
      daysData.appointments.forEach((apptId) => {
        daysAppts.push(state.appointments[apptId]);
      });
    }
  });
  return daysAppts.length ? daysAppts : [];
};

export const getInterviewersForDay = (state, day) => {
  const daysInterviewers = [];

  state.days.forEach((daysData) => {
    if (daysData.name === day) {
      daysData.interviewers.forEach((interviewerId) => {
        daysInterviewers.push(state.interviewers[interviewerId]);
      });
    }
  });
  return daysInterviewers.length ? daysInterviewers : [];
};

export const getInterview = (state, interview) => {
  if (!interview) {
    return null;
  } else {
    return {
      student: interview.student,
      interviewer: {
        id: interview.interviewer,
        name: state.interviewers[interview.interviewer].name,
        avatar: state.interviewers[interview.interviewer].avatar,
      },
    };
  }
};
