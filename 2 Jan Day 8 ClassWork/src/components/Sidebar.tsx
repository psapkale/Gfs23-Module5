import { INoteAtom, useAllNotes } from "../store/atoms/allNotesAtom";
import { useRecoilState } from "recoil";
import NoteTab from "./NoteTab";
import CreateNote from "./CreateNote";

const Sidebar = () => {
   const [allNotes, setAllNotes] = useAllNotes(useRecoilState);

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

   const handleSelectNote = (id: number) => {
      const note: INoteAtom = allNotes.find((x: INoteAtom) => x.id === id);

      if (note) {
         const newNote = { ...note, isCurrentNote: true };

         const updatedNotes = getUpdatedCurrentStateOfAllNotes(
            newNote,
            allNotes
         );

         setAllNotes(
            [newNote, ...updatedNotes].sort(
               (a: INoteAtom, b: INoteAtom) => a.createdAt - b.createdAt
            )
         );
      }
   };

   const handleDeleteNote = (e: React.MouseEvent, id: number) => {
      e.stopPropagation();
      const note = allNotes.find((x: INoteAtom) => x.id === id);

      if (note) {
         setAllNotes(allNotes.filter((x: INoteAtom) => x.id !== note.id));
      }
   };

   const handleCreateNote = () => {
      const newNote: INoteAtom = {
         id: Math.random(),
         title: `My Note (@${Math.ceil(Math.random() * 100)})`,
         content: "# With great ideas comes great notes💪",
         isCurrentNote: true,
         createdAt: Date.now(),
      };

      const updatedNotes = getUpdatedCurrentStateOfAllNotes(newNote, allNotes);

      setAllNotes(
         [newNote, ...updatedNotes].sort(
            (a: INoteAtom, b: INoteAtom) => a.createdAt - b.createdAt
         )
      );
   };

   return (
      <div className="border-r-2 border-slate-100 shadow-sm w-[20%] h-[calc(100vh-50px)]">
         <CreateNote handleCreateNote={handleCreateNote} />
         <div>
            {allNotes.map((note: INoteAtom) => (
               <NoteTab
                  key={note.id}
                  note={note}
                  handleDeleteNote={handleDeleteNote}
                  handleSelectNote={handleSelectNote}
               />
            ))}
         </div>
      </div>
   );
};

export default Sidebar;
