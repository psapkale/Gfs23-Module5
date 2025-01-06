import Loader from "./Loader";

interface Props {
  images: string[];
  isLoading: boolean;
}

const Images = ({ images, isLoading }: Props) => {
  return (
    <div
      className={`w-[90vw] py-10 border shadow-lg my-10 flex items-center ${
        isLoading ? "justify-center" : "justify-between"
      } gap-2 flex-wrap px-10`}
    >
      {isLoading ? (
        <Loader />
      ) : (
        images.map((img, i) => <img src={img} key={i} className="w-[380px]" />)
      )}
    </div>
  );
};

export default Images;
