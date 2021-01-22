import React from "react";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Form from "./Form";
import "./styles.scss";
import useVisualMode from "hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  //  const SAVING = "SAVING";
  //  const DELETING = "DELETING";
  //  const CONFIRM = "CONFIRM";
  //  const EDIT = "EDIT";
  //  const ERROR_SAVE = "ERROR_SAVE";
  //  const ERROR_DELETE = "ERROR_DELETE";
  
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
    );

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={[]/* props.interviewers */}
          onCancel={back}
        />
      )}
    </article>
  );
}
