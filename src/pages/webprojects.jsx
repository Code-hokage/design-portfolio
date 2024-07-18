import Background from "../components/background";
import ImageSlider from "../components/imgSlider";
import Showcase from "../components/showcase";
import Textbox from "../components/textbox";

const Webprojects = () => {
  return (
    <>
      <div className="relative h-screen w-screen" role="main">
        <Background />
        <div className="*:z-50 px-16 -mt-16 flex justify-center items-start gap-20 pb-10">
          <Textbox />
          <Showcase />
        </div>
        <ImageSlider />
      </div>
    </>
  );
};

export default Webprojects;
