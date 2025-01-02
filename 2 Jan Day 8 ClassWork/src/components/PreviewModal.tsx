import MDEditor from "@uiw/react-md-editor";
import { useNotesData } from "../hooks/useNotesData";
import { useModeData } from "../hooks/useModeData";

const PreviewModal = () => {
   const { isWriteMode } = useModeData();
   const { currNote } = useNotesData();

   return (
      <div
         className={`${
            isWriteMode ? "w-[40%]" : "w-[80%]"
         } h-[calc(100vh-50px)]`}
      >
         <MDEditor.Markdown
            source={currNote.content}
            className="w-full h-full p-5"
         />
      </div>
   );
};

export default PreviewModal;
