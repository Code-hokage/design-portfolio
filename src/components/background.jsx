
const Background = (prop) => {
  return (
    <>
      <div
        className={`${prop.bgStyle} relative bg-cover w-full h-3/5 transition-all duration-700 animate__animated animate__fadeInDown animate__fast`}
      >
        <div className="w-full h-[4.5rem] absolute top-0 bg-gradient-to-b from-darkBlue to-darkBlue/70 backdrop-blur-md"></div>
        <div className="w-full h-4/5 absolute bottom-0 bg-gradient-to-t from-darkBlue/100 to-grey/0"></div>
      </div>
    </>
  );
};

export default Background;
