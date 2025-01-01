import { Plus } from "lucide-react";

interface Props {
   handleCreateNote: () => void;
}

const CreateNote = ({ handleCreateNote }: Props) => {
   return (
      <button
         onClick={handleCreateNote}
         className="w-[90%] flex items-center justify-between py-2 px-4 my-3 mx-auto rounded-full text-white bg-blue-500 shadow-slate-800 drop-shadow-md hover:drop-shadow-none cursor-pointer"
      >
         <span className="text-lg font-bold">Create</span>
         <Plus />
      </button>
   );
};

export default CreateNote;
