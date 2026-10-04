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
          `http://www.omdbapi.com/?i=tt3896198&apikey=${apikey}s={harry}`,
        );
        const data = await res.json();
        if (!data.ok) {
          throw new Error("there is error in fetching data");
        }
        if (data.Response == "False")
          throw new Error("there is error in fetching data");

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
      {!isloading && !error && <p>the movies </p>}
      {error && <p>{error}</p>}
    </div>
  );
}
