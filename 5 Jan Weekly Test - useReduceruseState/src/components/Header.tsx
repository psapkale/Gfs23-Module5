const Header = ({
   query,
   setQuery,
}: {
   query: string;
   setQuery: (query: string) => void;
}) => {
   return (
      <div className="bg-slate-100 py-2 px-10 w-full flex items-center justify-between">
         <h1 className="text-2xl">GeekGallery</h1>
         <input
            className="border border-black rounded-md p-1"
            placeholder="Search images"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
         />
      </div>
   );
};

export default Header;
