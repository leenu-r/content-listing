import { render, screen } from "@testing-library/react";
import ImageGrid from "./ImageGrid";
import { Provider } from "react-redux";
import store from "../../store";

global.IntersectionObserver = class IntersectionObserver {
  constructor(callback, options) {}
  observe() {}
  unobserver() {}
  disconnect() {}
};

describe("ImageGrid", () => {
   
  test("renders ImageGrid with Heading Romantic comedy", () => {
    render(
      <Provider store={store}>
        <ImageGrid />
      </Provider>
    );
    const linkElement = screen.getByText(/Romantic comedy/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders ImageGrid with back button", () => {
   render(
      <Provider store={store}>
        <ImageGrid />
      </Provider>
    );
    const backButton = screen.getAllByTestId("back-button")
    expect(backButton).toBeDefined();
  });
  test("renders ImageGrid with search bar", () => {
    render(
       <Provider store={store}>
         <ImageGrid />
       </Provider>
     );
     const searchBar = screen.getAllByTestId("search-bar")
     expect(searchBar).toBeDefined();
   });

   test("renders ImageGrid with search icon", () => {
    render(
       <Provider store={store}>
         <ImageGrid />
       </Provider>
     );
     const searchIcon = screen.getAllByTestId("search-icon")
     expect(searchIcon).toBeDefined();
   });
});
