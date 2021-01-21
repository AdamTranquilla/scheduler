import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";

export default function InterviewerList(props) {
  const listInterviewers = props.interviewers.map((value) => {
    return (
      <InterviewerListItem
        key={value.id}
        name={value.name}
        avatar={value.avatar}
        selected={value.id === props.value} // why by id?
        onChange={(event) => props.onChange(value.id)}
      />
    );
  });
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{listInterviewers}</ul>
    </section>
  );
}

// changing interviewer -> value, and setInterviewer to onChange
// why not do this to DayList?