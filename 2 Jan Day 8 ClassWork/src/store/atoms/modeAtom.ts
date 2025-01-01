import { RecoilState, atom } from "recoil";

export type IModeAtom = "write" | "preview";

const modeAtom = atom<IModeAtom>({
   key: "modeAtom",
   default: "write",
});

export const useMode = (fn: (modeAtom: RecoilState<IModeAtom>) => any) =>
   fn(modeAtom);
