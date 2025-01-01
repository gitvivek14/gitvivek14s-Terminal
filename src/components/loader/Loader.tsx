const Loader = () => {
    return (
      <div className=" w-full h-full fixed inset-0 bg-black flex items-center justify-center z-50">
<div className="hacker-loader">
  <div className="loader-text">
    <span data-text="Initializing..." className="text-glitch">Initializing...</span>
  </div>
  <div className="loader-bar">
    <div className="bar-fill"></div>
    <div className="bar-glitch"></div>
  </div>
  <div className="particles">
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
  </div>
</div>

      </div>
    );
  };
  
  export default Loader;