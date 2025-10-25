const LoadingScreen = ({ state }) => {
  return (
    <div
      className={`h-screen w-screen absolute top-0 z-20 backdrop-blur-md flex flex-col gap-3 justify-center items-center ${
        state ? "block" : "hidden"
      }`}
    >
      <div className="loading loading-dots loading-xl"></div>
      <h2 className="text-xl font-bold">Loading</h2>
    </div>
  );
};

export default LoadingScreen;
