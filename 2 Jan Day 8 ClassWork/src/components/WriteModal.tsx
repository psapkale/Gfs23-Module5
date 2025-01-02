import React from "react";
import { INoteAtom } from "../store/atoms/allNotesAtom";
import { useNotesData } from "../hooks/useNotesData";
import { useModeData } from "../hooks/useModeData";

const WriteModal = () => {
   const { isWriteMode } = useModeData();
   const { allNotes, currNote, setAllNotes } = useNotesData();

   const handleChangeNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newNote = { ...currNote, content: e.target.value };

      setAllNotes(
         [
            newNote,
            ...allNotes.filter((x: INoteAtom) => x.id !== currNote.id),
         ].sort((a: INoteAtom, b: INoteAtom) => a.createdAt - b.createdAt)
      );
   };

   return (
      <textarea
         id="contentTextarea"
         value={currNote.content}
         onChange={handleChangeNote}
         cols={30}
         rows={10}
         className={`border-r-2 border-slate-100 ${
            isWriteMode ? "w-[40%] h-[calc(100vh-50px)] p-5" : "w-0 h-0"
         }`}
      ></textarea>
   );
};

export default WriteModal;
