// @ts-nocheck
import { Container, Row, Col } from "react-bootstrap";
import Masonry from "react-masonry-css";
import ImageCard from "./ImageCard";

interface Props {
   images: any;
}

const breakpointColumnsObj = {
   default: 4,
   1100: 3,
   700: 2,
   500: 1,
};

const ImageList = ({ images }: Props) => {
   return (
      <>
         <Container fluid className="mt-4 mx-5">
            <Row>
               <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
               >
                  {images.map((single_image, idx) => {
                     return (
                        <Col key={idx}>
                           <ImageCard image_details={single_image} />
                        </Col>
                     );
                  })}
               </Masonry>
            </Row>
         </Container>
      </>
   );
};

export default ImageList;
