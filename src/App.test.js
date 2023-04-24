import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

describe("App", () => {
  test("renders App", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const linkElement = screen.getByText(/Romantic comedy/i);
    expect(linkElement).toBeInTheDocument();
  });
});
