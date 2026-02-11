import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders hero headline", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const heading = screen.getByText(/Building high-impact products/i);
  expect(heading).toBeInTheDocument();
});
