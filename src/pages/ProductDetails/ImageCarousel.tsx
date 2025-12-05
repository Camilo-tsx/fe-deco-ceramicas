import { imgUrl } from "../../components/catalog/Products/ImgUrl";
import "./ImageCarousel.css";
import { useRef } from "react";

export const ImageSlider = () => {
  // cuando se suban imagenes a la nube se implementara que las imagenes se llamen por producto
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  const scrollToImage = (index: number) => {
    const imageElement = imageRefs.current[index];
    if (imageElement) {
      const carouselContainer = imageElement.closest(".carousel-container");
      if (carouselContainer) {
        carouselContainer.scrollTo({
          top: imageElement.offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="carousel-wrapper">
      <div className="thumbnail-container">
        {imgUrl.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Miniatura ${index + 1}`}
            className="thumbnail-image"
            onClick={() => scrollToImage(index)}
          />
        ))}
      </div>
      <div className="carousel-container">
        {imgUrl.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Imagen ${index + 1}`}
            className="carousel-image"
            ref={el => (imageRefs.current[index] = el)}
          />
        ))}
      </div>
    </div>
  );
};
