

const Shimmer = ({ count }) => {
  const shimmerElements = [];

  for (let i = 0; i < count; i++) {
    shimmerElements.push(
      <div className="shimmer-container" key={i}>
        <div className="shimmer w-60 h-72 flex flex-col gap-2 animate-pulse">
          <div id="sh-1" className="w-[100%] h-36 bg-[#8080805b] rounded-md"></div>
          <div id="sh-2" className="w-[80%] h-12 bg-[#8080805b] pl-2"></div>
          <div id="sh-3" className="w-[50%] h-12 bg-[#8080805b] pl-2"></div>
          <div id="sh-4" className="w-[100%] h-12 bg-[#8080805b] pl-2"></div>
        </div>
      </div>
    );
  }

  return <div id="shim-div" className="grid grid-cols-4 w-11/12 col-span-4 gap-y-20 my-4 ">{shimmerElements}</div>;
};

export default Shimmer;
