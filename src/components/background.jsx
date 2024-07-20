import 'animate.css';

const Background = ( prop ) => {
  return (
    <>
      <div className={`${prop.bgStyle} relative bg-cover w-full h-3/5 transition-all origin-bottom duration-500 delay-200 animate__animated animate__fadeInDown`}>
        <div className="w-full h-[4.5rem] absolute top-0 bg-gradient-to-b from-darkBlue/100 to-darkBlue/100"></div>
        <div className="w-full h-full absolute bottom-0 bg-gradient-to-t from-darkBlue/100 to-grey/20"></div>
      </div>
    </>
  );
};

export default Background;
