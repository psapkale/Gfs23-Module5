import React from "react";
import { INoteAtom, useAllNotes } from "../store/atoms/allNotesAtom";
import { useRecoilState } from "recoil";

const WriteModal = () => {
   const [allNotes, setAllNotes] = useAllNotes(useRecoilState);
   const currNote = allNotes.find((x: INoteAtom) => x.isCurrentNote);

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
         value={currNote.content}
         onChange={handleChangeNote}
         cols={30}
         rows={10}
         className="border border-black w-[40%] h-[calc(100vh-50px)]"
      ></textarea>
   );
};

export default WriteModal;
