import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {

  test("renders ImageGrid with search bar", () => {
    render(
        <SearchBar/>
     );
     const searchBar = screen.getAllByTestId("search-bar")
     expect(searchBar).toBeDefined();
   });

   test("renders ImageGrid with search icon", () => {
    render(
        <SearchBar/>
     );
     const searchIcon = screen.getAllByTestId("search-icon")
     expect(searchIcon).toBeDefined();
   });
});
