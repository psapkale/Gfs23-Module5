import Sidebar from "./Sidebar";
import WriteModal from "./WriteModal";
import PreviewModal from "./PreviewModal";
import { useNotesData } from "../hooks/useNotesData";

const Toolset = () => {
   const { currNote } = useNotesData();

   return (
      <div className="flex">
         <Sidebar />
         {currNote ? (
            <>
               <WriteModal />
               <PreviewModal />
            </>
         ) : (
            <div className="w-[80%] flex items-center justify-center">
               No editor selected
            </div>
         )}
      </div>
   );
};

export default Toolset;
