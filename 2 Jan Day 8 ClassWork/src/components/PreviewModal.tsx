import { INoteAtom, useAllNotes } from "../store/atoms/allNotesAtom";
import { useRecoilValue } from "recoil";
import MDEditor from "@uiw/react-md-editor";
import { useMode } from "../store/atoms/modeAtom";

const PreviewModal = () => {
  const mode = useMode(useRecoilValue);
  const isWriteMode = mode === "write";
  const allNotes = useAllNotes(useRecoilValue);
  const currNote = allNotes.find((x: INoteAtom) => x.isCurrentNote);

  return (
    <div
      className={`${isWriteMode ? "w-[40%]" : "w-[80%]"} h-[calc(100vh-50px)]`}
    >
      <MDEditor.Markdown
        source={currNote.content}
        className="w-full h-full p-5"
      />
    </div>
  );
};

export default PreviewModal;
