import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const DetailPage = () => {
  const { id } = useParams();
  console.log("id", id);

  async function fetchMovieDetail(id) {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=4c00ba85&i=${id}`
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  }
  const {
    data: movie,
    // isFetching,
    // isInitialLoading,
  } = useQuery({
    queryKey: ["movieDetail", id],
    queryFn: () => fetchMovieDetail(id),
    enabled: !!id,
  });
console.log('movie', movie)
  return <div>DetailPage</div>;
};

export default DetailPage;
