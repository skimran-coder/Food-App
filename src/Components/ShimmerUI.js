

const Shimmer = ({ count }) => {
  const shimmerElements = [];

  for (let i = 0; i < count; i++) {
    shimmerElements.push(
      <div className="shimmer-container" key={i}>
        <div className="shimmer">
          <div id="sh-1"></div>
          <div id="sh-2"></div>
          <div id="sh-3"></div>
          <div id="sh-4"></div>
        </div>
      </div>
    );
  }

  return <div id="shim-div">{shimmerElements}</div>;
};

export default Shimmer;
