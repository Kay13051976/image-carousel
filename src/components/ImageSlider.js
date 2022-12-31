import ImageData from "./ImageData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = ImageData.length;

  console.log(length);

  const prevSlide = () => {
    if (current === 0) {
      setCurrent(length - 1);
    } else {
      setCurrent(current - 1);
    }
    //current === 0 ? setCurrent(length-1) : setCurrent(current-1) //Ternary
  };
  const nextSlide = () => {
    if (current === length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
    //current === length-1 ? setCurrent(0) : setCurrent(current+1) //Ternary
  };

  return (
    <section className="slider">
      <FaArrowLeft className="leftArrow" onClick={prevSlide} />
      <FaArrowRight className="rightArrow" onClick={nextSlide} />
      {ImageData.map((data, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div>
                <img src={data.image} alt={data.title} className="image" />
                <p>{data.title}</p>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
