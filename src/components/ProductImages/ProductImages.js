import "./ProductImages.css";

export const ProductImages = ({ images }) => {
  return (
    <div className="slider">
      {images?.length > 1 ? (
        images.map((image, index) => {
          return (
            <div className="slide" key={index}>
              <img src={image} alt="Product" />
            </div>
          );
        })
      ) : (
        <div className="slide">
          <img src={images[0]} alt="Product" />
        </div>
      )}
    </div>
  );
};
