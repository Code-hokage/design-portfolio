import SimpleImageSlider from "react-simple-image-slider";

const Showcase = ( images ) => {
  return (
    <>
      <div className="transition-all duration-500 origin-bottom animate__animated animate__fadeInUp">
        <SimpleImageSlider
          width={160}
          height={120}
          images={images.images}
          showBullets={false}
          showNavs={false}
          autoPlay={true}
          autoPlayDelay={2}
          navStyle={{color: '#fff',}}
        //   style={{margin: '0 auto', display: 'block', width: '100%'}}
        />
      </div>
    </>
  );
};

export default Showcase;
