import Sidebar from "./Sidebar";
import WriteModal from "./WriteModal";
import PreviewModal from "./PreviewModal";
import { INoteAtom, useAllNotes } from "../store/atoms/allNotesAtom";
import { useRecoilValue } from "recoil";

const Toolset = () => {
  const allNotes = useAllNotes(useRecoilValue);
  const currNote = allNotes.find((x: INoteAtom) => x.isCurrentNote);

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
