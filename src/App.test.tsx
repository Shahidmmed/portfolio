import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store";

jest.mock("TagCloud", () => jest.fn());

test("renders the portfolio home page", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByRole("heading", { name: /abdul shahid/i })).toBeInTheDocument();
});
