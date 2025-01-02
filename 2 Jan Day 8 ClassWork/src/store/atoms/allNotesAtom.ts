import { RecoilState, atom } from "recoil";

export interface INoteAtom {
   id: number;
   title: string;
   content: string;
   readonly createdAt: number;
   isCurrentNote: boolean;
}

export type IAllNotesAtom = INoteAtom[];

const allNotesAtom = atom<IAllNotesAtom>({
   key: "allNotesAtom",
   default: [
      {
         id: Math.random(),
         title: "My Editor 1",
         content: "# With great ideas comes great notes💪",
         isCurrentNote: true,
         createdAt: Date.now(),
      },
   ],
});

export const useAllNotes = (
   fn: (allNotesAtom: RecoilState<IAllNotesAtom>) => any
) => fn(allNotesAtom);
