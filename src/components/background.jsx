const Background = () => {
  return (
    <>
      <div className="relative bg-rabahaCard bg-cover w-full h-3/5">
        <div className="w-full h-[4.5rem] absolute top-0 bg-gradient-to-b from-darkBlue/100 to-darkBlue/70"></div>
        <div className="w-full h-full absolute bottom-0 bg-gradient-to-t from-darkBlue/100 to-grey/20"></div>
      </div>
    </>
  );
};

export default Background;
