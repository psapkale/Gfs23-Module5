import { Card } from "react-bootstrap";

const ImageCard = ({ image_details }: any) => {
   return (
      <Card className="bg-dark mb-4" style={{ cursor: "pointer" }}>
         <Card.Img
            src={image_details?.urls?.thumb}
            alt="Card image"
            className="w-full"
         />
         <Card.ImgOverlay>
            <Card.Title>{image_details?.user.name}</Card.Title>
            <Card.Text>{image_details?.description}</Card.Text>
         </Card.ImgOverlay>
      </Card>
   );
};

export default ImageCard;
