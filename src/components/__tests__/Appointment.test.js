// We need React.createElement to render `<Application />`
import React from "react";

// Render function allows us to render Components
import { render } from "@testing-library/react";

// We import the component that we are testing
import Appointment from "components/Application";
import Form from "components/Appointment/Form";

describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });
});
