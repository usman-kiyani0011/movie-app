import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { useDispatch } from "react-redux";
import { APIKey } from "../../common/apis/MovieApiKey";
import { addMovies } from "../../store/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const movieText = "Harry";
    const fetchMovie = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Error", err);
        });
      dispatch(addMovies(response.data));
      console.log("Response from API ", response);
    };
    fetchMovie();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
