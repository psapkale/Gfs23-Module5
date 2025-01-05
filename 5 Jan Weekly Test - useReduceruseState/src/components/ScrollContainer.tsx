import axios from "axios";
import { useEffect, useState } from "react";
import ImageList from "./ImageList";

const ScrollContainer = ({ query }: { query: string }) => {
   const [imgList, setImgList] = useState<any>([]);
   const [page, setPage] = useState(0);

   const loadFn = async () => {
      await axios
         .get(
            `https://api.unsplash.com/search/photos?page=${page}&query=${query}&per_page=20&client_id=${
               import.meta.env.VITE_UNSPLASH_API_KEY
            }`
         )
         .then((res) => setImgList([...imgList, ...res.data]));
   };

   useEffect(() => {
      loadFn();
   }, [page, query]);

   useEffect(() => {
      const handleAppendImages = () => {
         if (
            window.scrollY + window.innerHeight + 100 >=
            document.body.offsetHeight
         ) {
            setPage(page + 1);
         }
      };

      window.addEventListener("scroll", handleAppendImages);

      return () => window.removeEventListener("scroll", handleAppendImages);
   }, []);

   return (
      <div>
         {!imgList.length ? (
            <div>loading...</div>
         ) : (
            <ImageList images={imgList} />
         )}
      </div>
   );
};

export default ScrollContainer;
