import { render, screen } from "@testing-library/react";
import Header from "./Header";
import SearchBar from "./SearchBar/SearchBar";
import { Provider } from "react-redux";
import store from "../../store";

describe("SearchBar", () => {
  test("renders Header with correct title", () => {
    render(
      <Provider store={store}>
        <Header category={"Romantic"} />
      </Provider>
    );
    const title = screen.getByText(/Romantic/i);
    expect(title).toBeInTheDocument();
  });
  test("renders Header with back button", () => {
    render(
      <Provider store={store}>
        <Header category={"Romantic"} />
      </Provider>
    );
    const backButton = screen.getAllByTestId("back-button");
    expect(backButton).toBeDefined();
  });
  test("renders Header with search icon", () => {
    render(<SearchBar />);
    const searchIcon = screen.getAllByTestId("search-icon");
    expect(searchIcon).toBeDefined();
  });
});
