// import React from 'react';

// const Home: React.FC = () => {
//   return (
//     <div className="relative flex flex-col items-center">
//       {/* Hero Section */}
//       <section className="w-1/2 min-h-screen py-20 flex flex-col items-center justify-center">
//         <div className="container mx-auto px-6 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">Hello, I'm Adzhan Farhan</h1>
//           <p className="text-lg md:text-xl mb-6 animate-fadeIn delay-1s">I am passionate about 3D, Development, and Networking.</p>
//           <p className="text-base md:text-lg animate-fadeIn delay-2s">I create impactful solutions through innovative design and technology.</p>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="w-1/2 min-h-screen py-20 flex flex-col items-center justify-center">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-3xl font-semibold mb-6 animate-fadeIn">About Me</h2>
//           <p className="text-base md:text-lg mb-6 animate-fadeIn delay-1s">
//             With a background in 3D Art, Development, and Networking, I specialize in creating cutting-edge solutions that leverage technology and creativity. My goal is to deliver exceptional results by combining technical expertise with
//             innovative design approaches.
//           </p>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="w-1/2 min-h-screen py-20 flex flex-col items-center justify-center">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-3xl font-semibold mb-6 animate-fadeIn">Get in Touch</h2>
//           <p className="text-base md:text-lg mb-6 animate-fadeIn delay-1s">Feel free to reach out to me via email or connect with me on social media.</p>
//           <a href="mailto:you@example.com" className="text-blue-400 hover:underline animate-fadeIn delay-2s">
//             you@example.com
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false, // Ubah sesuai kebutuhan
    cssEase: 'linear',
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Slider {...settings} className="w-1/2">
        {/* Hero Section */}
        <div className="">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Hello, I'm Adzhan Farhan</h1>
            <p className="text-lg mb-4">I am passionate about 3D, Development, and Networking.</p>
            <p className="text-base mb-4">I create impactful solutions through innovative design and technology.</p>
          </div>
        </div>

        {/* About Section */}
        <div className="">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-base">
              With a background in 3D Art, Development, and Networking, I specialize in creating cutting-edge solutions that leverage technology and creativity. My goal is to deliver exceptional results by combining technical expertise with
              innovative design approaches.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        {/* <div className="flex items-center justify-center w-full h-full">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-base mb-4">Feel free to reach out to me via email or connect with me on social media.</p>
            <a href="mailto:you@example.com" className="hover:underline">
              you@example.com
            </a>
          </div>
        </div> */}
      </Slider>
    </div>
  );
};

export default Home;
