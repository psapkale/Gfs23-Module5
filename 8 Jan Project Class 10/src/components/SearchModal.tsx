interface Props {
  query: string;
  setQuery: (query: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const SearchModal = ({ query, setQuery, handleSubmit }: Props) => {
  return (
    <div className="border w-[50vw] flex items-center justify-center gap-10 flex-col p-10 rounded-md shadow-xl ">
      <h1 className="text-4xl">Image Generation App</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter text..."
          className="w-[30vw] border border-slate-300 py-1 px-3 rounded-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchModal;
