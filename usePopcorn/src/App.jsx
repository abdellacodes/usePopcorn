// import { useState } from "react"
// import StarRating from "./StarRating"

import TextExpander from "./TextExpander";

export default function App() {
  //  const [movieRating,setMovieRating] = useState(0)
   
    // console.log(movieRating)
  return (
    <div>
      <p>This is the test for expanding and minimizing the text test component</p>
      
       <TextExpander/>

      {/* <p>this is the test for rating components</p>
      <StarRating
        maxRating={10}
        color={"#242928"}
        size={48}
        className={""}
        messages={[]}
        defaultRating={5}
        onSetRating={setMovieRating}
      /> */}
    </div>
  );
}

