import { useState } from "react";
import "./App.css";
import Images from "./components/Images";
import SearchModal from "./components/SearchModal";
import axios from "axios";

function App() {
  const [images, setImages] = useState<string[]>([
    "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=M3w0MzQyMjR8MHwxfHNlYXJjaHwxfHx0cmVlfGVufDB8fHx8MTczNjEzODYxOXww&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixid=M3w0MzQyMjR8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8fHwxNzM2MTM4NTU2fDA&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1624880357913-a8539238245b?ixid=M3w0MzQyMjR8MHwxfHNlYXJjaHwxfHxmb290YmFsbHxlbnwwfHx8fDE3MzYxNTc2NjR8MA&ixlib=rb-4.0.3",
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  console.log(images);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await axios
      .get(
        `https://api.unsplash.com/search/photos?client_id=${
          import.meta.env.VITE_UNSPLASH_APIKEY
        }&page=1&query=${query}`
      )
      .then((res) => {
        setImages([...images, res.data.results[0].urls.raw]);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="w-full h-screen flex items-center justify-start mt-10 flex-col">
      <SearchModal
        handleSubmit={handleSubmit}
        query={query}
        setQuery={setQuery}
      />
      <Images images={images} isLoading={isLoading} />
    </div>
  );
}

export default App;
