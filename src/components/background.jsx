
const Background = (prop) => {
  return (
    <>
      <div
        className={`${prop.bgStyle} relative bg-cover w-full h-3/5 transition-all duration-700`}
      >
        <div className="w-full h-4/5 absolute bottom-0 bg-gradient-to-t from-darkBlue/100 to-grey/0"></div>
      </div>
    </>
  );
};

export default Background;
