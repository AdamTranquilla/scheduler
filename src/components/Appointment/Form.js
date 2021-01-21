import React, { useState } from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";
import "components/Appointment/styles.scss";

export default function Form(props) {
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  // Resets Form
  const reset = () => {
    setName("");
    setInterviewer(null);
  };
  // calls reset on cancel
  const cancel = () => {
    reset();
    props.onCancel();
  };

  const save = () => {
    props.onSave(name, interviewer); // review how this works
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={(event) => event.preventDefault()} autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </form>
        <InterviewerList value={interviewer} interviewers={props.interviewers} onChange={setInterviewer} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}> Cancel </Button>
          <Button confirm onClick={save}> Save </Button>
        </section>
      </section>
    </main>
  );
}
