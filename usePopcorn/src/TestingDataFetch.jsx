import { useEffect, useState } from "react";
const apikey = "a1acd6fb";

export default function TestingDataFetch() {
  const [movieData, setMovieData] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(function () {
    async function dataFetechr() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?t=harry&apikey=a1acd6fb`,
        );
        const data = await res.json();
        if (!res.ok) {
          throw new Error("there is error in fetching data");
        }
        if (data.Response == "False")
          throw new Error("data not found in the api");

        setMovieData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    dataFetechr();
  }, []);

  return (
    <div>
      {isloading && <p>Loading</p>}
      {!isloading && !error && (
        <p>
          {movieData.Title}
          {movieData.Actors}
        </p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}
