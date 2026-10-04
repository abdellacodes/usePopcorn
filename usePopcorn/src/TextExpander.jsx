import { useState } from "react";
export default function TextExpander() {
  const [showMore, setShowMore] = useState(false);
  function textHUndeler() {
    setShowMore(() => !showMore);
    console.log(showMore);
  }

  

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <button  onClick={textHUndeler} >
          {showMore ? "ReadLess" : "SeeMore"}. 
        </button>
        {showMore ? (
          <span>
            Veniam minus deserunt expedita nemo, tenetur inventore quibusdam
            beatae, explicabo tempore error mollitia incidunt. Labore suscipit,
            incidunt tempore repellendus fuga ab alias. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Inventore nemo ipsam fugit hic
            repudiandae maiores! Eveniet facilis soluta quo nostrum facere
            quidem accusamus quae expedita commodi a suscipit, quis labore!
          </span>
        ) : (
          ""
        )}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
        obcaecati rerum corporis earum culpa voluptatem dolore corrupti hic,
        atque, minus nesciunt consectetur tempora! Maiores qui quaerat eius eum
        ea! Expedita.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum numquam
        dolores, recusandae atque sapiente quidem, aliquam, deleniti beatae iste
        sint possimus delectus commodi consequatur porro distinctio natus
        laudantium. Sit, a.
      </p>
    </div>
  );
}
