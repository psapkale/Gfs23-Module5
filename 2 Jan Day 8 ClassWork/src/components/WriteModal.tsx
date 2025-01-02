import React from "react";
import { INoteAtom, useAllNotes } from "../store/atoms/allNotesAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { useMode } from "../store/atoms/modeAtom";

const WriteModal = () => {
  const mode = useMode(useRecoilValue);
  const isWriteMode = mode === "write";
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
