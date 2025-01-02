import { useRecoilState } from "recoil";
import { useMode } from "../store/atoms/modeAtom";

export const useModeData = () => {
   const [mode, setMode] = useMode(useRecoilState);
   const isWriteMode = mode === "write";

   return { mode, isWriteMode, setMode };
};
