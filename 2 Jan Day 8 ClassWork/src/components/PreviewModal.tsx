import Markdown from "react-markdown";
import remartGfm from "remark-gfm";
import { INoteAtom, useAllNotes } from "../store/atoms/allNotesAtom";
import { useRecoilValue } from "recoil";

const PreviewModal = () => {
   const allNotes = useAllNotes(useRecoilValue);
   const currNote = allNotes.find((x: INoteAtom) => x.isCurrentNote);

   return <Markdown remarkPlugins={[remartGfm]} children={currNote.content} />;
};

export default PreviewModal;
