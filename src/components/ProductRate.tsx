import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

interface IProps {
  averageRating: number;
}

const ProductRate = ({ averageRating }: IProps) => {
  const fullStars = Math.floor(averageRating);
  const hasHalfStar = Math.round((averageRating % 1) * 2) / 2;
  return (
    <>
      {Array.from({ length: 5 }, (_, i) =>
        i < fullStars || (i === fullStars && hasHalfStar === 1) ? (
          <IoIosStar key={i} style={{ color: "#90cdf4" }} />
        ) : i === fullStars && hasHalfStar === 0.5 ? (
          <IoIosStarHalf
            key={i}
            style={{ transform: "scaleX(-1)", color: "#90cdf4" }}
          />
        ) : (
          <IoIosStarOutline key={i} style={{ color: "#b5b5b5" }} />
        )
      )}
    </>
  );
};

export default ProductRate;
