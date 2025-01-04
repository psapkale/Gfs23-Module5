const Header = () => {
   return (
      <div className="bg-blue-500 py-4 px-32 text-white flex items-center justify-between">
         <h1 className="text-xl font-bold">Health at Fingertips</h1>
         <a
            href="http://github.com/psapkale/Gfs23-Module5"
            className="border border-slate-200 shadow-sm rounded-md py-1 px-8"
         >
            <img src="/github.svg" alt="github" />
         </a>
      </div>
   );
};

export default Header;
