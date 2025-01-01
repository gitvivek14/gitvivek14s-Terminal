const Loader = () => {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="mb-4">
            <div className="h-16 w-16 border-4 border-t-blue-500 border-r-green-500 border-b-yellow-500 border-l-red-500 rounded-full animate-spin mx-auto"></div>
          </div>
          <p className="text-green-500 font-mono text-lg animate-pulse">Loading System...</p>
          <div className="mt-4">
            <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
              <div className="w-full h-full bg-green-500 animate-[loading_2s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Loader;