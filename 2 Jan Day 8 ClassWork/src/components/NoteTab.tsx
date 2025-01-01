import React from "react";
import { Trash2 } from "lucide-react";
import { INoteAtom } from "../store/atoms/allNotesAtom";

interface Props {
   note: INoteAtom;
   handleDeleteNote: (e: React.MouseEvent, id: number) => void;
   handleSelectNote: (id: number) => void;
}

const NoteTab = ({ note, handleDeleteNote, handleSelectNote }: Props) => {
   return (
      <div
         onClick={() => handleSelectNote(note.id)}
         className={`flex items-center justify-between py-1 px-2 ${
            note.isCurrentNote ? "bg-slate-200" : "bg-transparent"
         } cursor-pointer`}
      >
         <h1 className="text-lg">{note.title}</h1>
         <Trash2
            onClick={(e) => handleDeleteNote(e, note.id)}
            className="w-5 text-red-700 hover:text-red-500 cursor-pointer"
         />
      </div>
   );
};

export default NoteTab;
