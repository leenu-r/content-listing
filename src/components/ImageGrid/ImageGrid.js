import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ImageGrid.css";
import Image from "../Image/Image";
import Header from "../Header/Header";
import {
  IntersectionObserverParams,
  InfiniteScrollParams,
} from "../../constants";
import { addMovieJsonObject } from "../../searchSlice";

function ImageGrid() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // add loading state
  const pageNumber = useRef(1);
  const loaderRef = useRef(null);
  const totalImages = useRef([]);
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const dispatch = useDispatch();
  // const movieReduxStoreData = useSelector((state) => state.search.movieJsonData);

  useEffect(() => {
    const options = {
      root: IntersectionObserverParams.ROOT,
      rootMargin: IntersectionObserverParams.ROOT_MARGIN,
      threshold: IntersectionObserverParams.THRESHOLD,
    };
    /* When the component mounts for the initial time, we have to create a new 
    IntersectionObserver object and it will observe the div(loaderRef).
    Whwn it intersects loaderRef, it will call the callback handleObserver */
    const observer = new IntersectionObserver(handleObserver, options);
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    /* When the component unmounted from the DOM , we have to call unobserve method of the IntersectionObserver  */
    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);

  /* The function: loadImages , will load the images from an api call as the user scrolld down the webpage.
  The items per load should be atleast 20, for the application to work fine in all devices.
  The refernce variable totalImages stores all variables. It is then spliced down, to show the images
  rendered on the screen. The JSON data is also stored to redux store,, so that we can later consume,
  teh data from the store without calling the api.*/
  function loadImages() {
    if (
      pageNumber.current < InfiniteScrollParams.TOTAL_PAGES + 1 &&
      totalImages.current.length < InfiniteScrollParams.ITEMS_PER_LOAD
    ) {
      fetch(`API/CONTENTLISTINGPAGE-PAGE${pageNumber.current}.json`)
        .then((response) => response.json())
        .then((jsonData) => {
          dispatch(addMovieJsonObject(jsonData)); // storing the json data to redux store
          totalImages.current = [
            ...totalImages.current,
            ...jsonData.page["content-items"].content,
          ];
          pageNumber.current = pageNumber.current + 1;
          if (
            totalImages.current.length > InfiniteScrollParams.ITEMS_PER_LOAD
          ) {
            const imagesToBeRendered = totalImages.current.splice(
              0,
              InfiniteScrollParams.ITEMS_PER_LOAD
            );
            setImages((prevImages) => [...prevImages, ...imagesToBeRendered]);
          } else {
            loadImages();
          }
        })
        .catch((error) => {
          console.error("Error in api call:" + error);
        })
        .finally(() => setIsLoading(false)); // set isLoading to false after images finish loading
    } else {
      const imagesToBeRendered = totalImages.current.splice(
        0,
        InfiniteScrollParams.ITEMS_PER_LOAD
      );
      setImages((prevImages) => [...prevImages, ...imagesToBeRendered]);
    }
  }

  /* This function : handleObserver will call the function: loadImages() if the loaderRef is intersecting  */
  function handleObserver(entries) {
    if (entries[0].isIntersecting) {
      loadImages();
    }
  }
  return (
    <>
      <Header category={"Romantic Comedy"}></Header>
      <div className="ImageGrid">
        {!isLoading &&
          images
            .filter((image) =>
              image.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((image, index) => (
              <div key={index} className="ImageWrapper">
                <Image
                  index={index}
                  imageFileName={image["poster-image"]}
                  imageAlt={image.name}
                  imageName={image.name}
                />
              </div>
            ))}
      </div>
      {/* loaderRef is the <div> for the IntersectionObserver to function. */}
      <div className="loaderRef" ref={loaderRef}>
        {pageNumber.current > InfiniteScrollParams.TOTAL_PAGES &&
        totalImages.current.length === 0 ? (
          <span>End of Results</span>
        ) : (
          <div class="loader"></div>
        )}
      </div>
    </>
  );
}
export default ImageGrid;
