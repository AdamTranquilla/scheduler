export const getAppointmentsForDay = (state, day) => {
  let apptList = [];
  const apptsForDay = state.days.filter((daysObj) => daysObj.name === day);

  if (apptsForDay.length) {
    for (let appt of apptsForDay[0].appointments) {
      apptList.push(state.appointments[appt]);
    }
  }
  return apptList;
}

//interview
export const getInterview = (state, interview) => {
  if (!interview) {
    return null;
  }
  if (interview) {
    return (
      {
        "student": interview.student,
        "interviewer": {  
          "id": interview.interviewer,
          "name": state.interviewers[interview.interviewer].name,
          "avatar": state.interviewers[interview.interviewer].avatar
        }
      }
    )
  }
}