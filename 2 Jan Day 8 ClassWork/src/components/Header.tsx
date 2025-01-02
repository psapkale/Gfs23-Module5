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
   Terminal,
} from "lucide-react";
import { useModeData } from "../hooks/useModeData";
import { useNotesData } from "../hooks/useNotesData";

enum InputTags {
   HEADING = "\n # ",
   BOLD = "\n **  **",
   ITALIC = "\n *  *",
   STRIKE = "\n ~~  ~~",
   LINK = "\n [](premsapkale.vercel.app)",
   QUOTE = "\n > ",
   TERMINAL = "\n ``` bash\n  \n```",
   CODE = "\n ``` js\n  \n```",
   IMAGE = "\n ![](https://i.pinimg.com/736x/b5/24/ba/b524bab828a078bf3cb0ceeb6b2f5c45.jpg)",
   BULLET = "\n - ",
}

const Header = () => {
   const { isWriteMode, setMode } = useModeData();
   const { currNote } = useNotesData();

   // selecting by document function to avoid prop drilling (can be done using useRef)
   const textArea = document.getElementById(
      "contentTextarea"
   ) as HTMLTextAreaElement;

   const getCursorIndent = (tag: InputTags) => {
      switch (tag) {
         case InputTags.HEADING:
            return 4;

         case InputTags.BOLD:
            return 5;

         case InputTags.ITALIC:
            return 4;

         case InputTags.STRIKE:
            return 5;

         case InputTags.LINK:
            return 3;

         case InputTags.QUOTE:
            return 4;

         case InputTags.TERMINAL:
            return 12;

         case InputTags.CODE:
            return 10;

         case InputTags.IMAGE:
            return 4;

         case InputTags.BULLET:
            return 4;

         default:
            return 5;
      }
   };

   const handleAddingTag = (tag: InputTags) => {
      if (currNote) {
         // Get cursor position
         const cursorPosition = textArea.selectionStart;

         const cursorIndent = getCursorIndent(tag);

         // Get current value of textarea
         const textBefore = textArea.value.substring(0, cursorPosition);
         const textAfter = textArea.value.substring(cursorPosition);

         // Insert '#' at the cursor position
         textArea.value = textBefore + tag + textAfter;

         // Set the new cursor position after the inserted '#'
         textArea.selectionStart = textArea.selectionEnd =
            cursorPosition + cursorIndent;

         // Focus back on the textarea
         textArea.focus();

         // ? textarea already have onChange event handler so no need to update note
      }
   };

   return (
      <div className="w-full py-2 px-10 flex items-center text-white bg-blue-500 justify-between">
         <h1 className="text-2xl font-bold">Markdown Editor App</h1>
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
               onClick={() => handleAddingTag(InputTags.HEADING)}
               className={`w-8 ${
                  isWriteMode
                     ? "cursor-pointer hover:bg-blue-400"
                     : "cursor-not-allowed"
               } p-1 border border-transparent rounded-sm`}
            />
            <Bold
               onClick={() => handleAddingTag(InputTags.BOLD)}
               className={`w-8 ${
                  isWriteMode
                     ? "cursor-pointer hover:bg-blue-400"
                     : "cursor-not-allowed"
               } p-1 border border-transparent rounded-sm`}
            />
            <Italic
               onClick={() => handleAddingTag(InputTags.ITALIC)}
               className={`w-8 ${
                  isWriteMode
                     ? "cursor-pointer hover:bg-blue-400"
                     : "cursor-not-allowed"
               } p-1 border border-transparent rounded-sm`}
            />
            <Strikethrough
               onClick={() => handleAddingTag(InputTags.STRIKE)}
               className={`w-8 ${
                  isWriteMode
                     ? "cursor-pointer hover:bg-blue-400"
                     : "cursor-not-allowed"
               } p-1 border border-transparent rounded-sm`}
            />
            <Link
               onClick={() => handleAddingTag(InputTags.LINK)}
               className={`w-8 ${
                  isWriteMode
                     ? "cursor-pointer hover:bg-blue-400"
                     : "cursor-not-allowed"
               } p-1 border border-transparent rounded-sm`}
            />
            <Quote
               onClick={() => handleAddingTag(InputTags.QUOTE)}
               className={`w-8 ${
                  isWriteMode
                     ? "cursor-pointer hover:bg-blue-400"
                     : "cursor-not-allowed"
               } p-1 border border-transparent rounded-sm`}
            />
            <Terminal
               onClick={() => handleAddingTag(InputTags.TERMINAL)}
               className={`w-8 ${
                  isWriteMode
                     ? "cursor-pointer hover:bg-blue-400"
                     : "cursor-not-allowed"
               } p-1 border border-transparent rounded-sm`}
            />
            <CodeXml
               onClick={() => handleAddingTag(InputTags.CODE)}
               className={`w-8 ${
                  isWriteMode
                     ? "cursor-pointer hover:bg-blue-400"
                     : "cursor-not-allowed"
               } p-1 border border-transparent rounded-sm`}
            />
            <Image
               onClick={() => handleAddingTag(InputTags.IMAGE)}
               className={`w-8 ${
                  isWriteMode
                     ? "cursor-pointer hover:bg-blue-400"
                     : "cursor-not-allowed"
               } p-1 border border-transparent rounded-sm`}
            />
            <List
               onClick={() => handleAddingTag(InputTags.BULLET)}
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
