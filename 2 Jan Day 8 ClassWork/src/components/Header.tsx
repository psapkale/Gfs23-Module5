import { useState } from "react";
import {
   Heading,
   Bold,
   Italic,
   Strikethrough,
   Link,
   Quote,
   CodeXml,
   Image,
   List,
} from "lucide-react";
import { useMode } from "../store/atoms/modeAtom";
import { useRecoilState } from "recoil";

const Header = () => {
   const [mode, setMode] = useMode(useRecoilState);
   const isWriteMode = mode === "write";

   return (
      <div className="w-full py-2 px-10 flex items-center text-white bg-blue-500 justify-between">
         <h1 className="text-2xl font-bold">Note App</h1>
         <div className="flex items-center justify-between gap-2">
            <button
               onClick={() => setMode("write")}
               className={`border ${
                  isWriteMode ? "border-white" : "border-transparent"
               } py-1 px-2 rounded-sm`}
            >
               Write
            </button>
            <button
               onClick={() => setMode("preview")}
               className={`border ${
                  !isWriteMode ? "border-white" : "border-transparent"
               } py-1 px-2 rounded-sm`}
            >
               Preview
            </button>
            <Heading
               className={`w-8 ${
                  isWriteMode
                     ? "cursor-pointer hover:bg-blue-400"
                     : "cursor-not-allowed"
               } p-1 border border-transparent rounded-sm`}
            />
            <Bold
               className={`w-8 ${
                  isWriteMode
                     ? "cursor-pointer hover:bg-blue-400"
                     : "cursor-not-allowed"
               } p-1 border border-transparent rounded-sm`}
            />
            <Italic
               className={`w-8 ${
                  isWriteMode
                     ? "cursor-pointer hover:bg-blue-400"
                     : "cursor-not-allowed"
               } p-1 border border-transparent rounded-sm`}
            />
            <Strikethrough
               className={`w-8 ${
                  isWriteMode
                     ? "cursor-pointer hover:bg-blue-400"
                     : "cursor-not-allowed"
               } p-1 border border-transparent rounded-sm`}
            />
            <Link
               className={`w-8 ${
                  isWriteMode
                     ? "cursor-pointer hover:bg-blue-400"
                     : "cursor-not-allowed"
               } p-1 border border-transparent rounded-sm`}
            />
            <Quote
               className={`w-8 ${
                  isWriteMode
                     ? "cursor-pointer hover:bg-blue-400"
                     : "cursor-not-allowed"
               } p-1 border border-transparent rounded-sm`}
            />
            <CodeXml
               className={`w-8 ${
                  isWriteMode
                     ? "cursor-pointer hover:bg-blue-400"
                     : "cursor-not-allowed"
               } p-1 border border-transparent rounded-sm`}
            />
            <Image
               className={`w-8 ${
                  isWriteMode
                     ? "cursor-pointer hover:bg-blue-400"
                     : "cursor-not-allowed"
               } p-1 border border-transparent rounded-sm`}
            />
            <List
               className={`w-8 ${
                  isWriteMode
                     ? "cursor-pointer hover:bg-blue-400"
                     : "cursor-not-allowed"
               } p-1 border border-transparent rounded-sm`}
            />
         </div>
      </div>
   );
};

export default Header;
