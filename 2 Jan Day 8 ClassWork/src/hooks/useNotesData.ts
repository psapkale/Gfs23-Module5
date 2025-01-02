import { useRecoilState } from "recoil";
import { INoteAtom, useAllNotes } from "../store/atoms/allNotesAtom";

export const useNotesData = () => {
   const [allNotes, setAllNotes] = useAllNotes(useRecoilState);
   const currNote = allNotes.find((x: INoteAtom) => x.isCurrentNote);

   const getUpdatedCurrentStateOfAllNotes = (
      note: INoteAtom,
      notes: INoteAtom[]
   ) => {
      return notes
         .filter((x: INoteAtom) => x.id !== note.id)
         .map((x: INoteAtom) => ({
            ...x,
            isCurrentNote: false,
         }));
   };

   return { allNotes, currNote, setAllNotes, getUpdatedCurrentStateOfAllNotes };
};
