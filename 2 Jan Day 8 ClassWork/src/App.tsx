import { RecoilRoot } from "recoil";
import "./App.css";
import Header from "./components/Header";
import Toolset from "./components/Toolset";

function App() {
   return (
      <div className="font-mono">
         <RecoilRoot>
            <Header />
            <Toolset />
         </RecoilRoot>
      </div>
   );
}

export default App;
