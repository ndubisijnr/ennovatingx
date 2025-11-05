import {useState, useEffect} from "react";


export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Building.", "Innovating.", "Discovering."];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setDisplayText(
          isDeleting
              ? fullText.substring(0, displayText.length - 1)
              : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);


  return (
      <>
        {/*  style={{*/}
        {/*  backgroundImage: `url("../../../../public/R4X Bot@1-1800x1038.jpg")`,*/}
        {/*  backgroundSize: 'cover',*/}
        {/*  backgroundPosition: 'center center',*/}
        {/*  backgroundRepeat: 'no-repeat'*/}
        {/*}}*/}

        {/*<section*/}
        {/*    id="home"*/}
        {/*    className="min-h-screen flex items-center justify-center relative overflow-hidden"*/}
        {/*    // backgroundImage: `url('https://readdy.ai/api/search-image?query=Futuristic%20laboratory%20with%20superconductivity%20experiments%2C%20magnetic%20levitation%20devices%2C%20holographic%20displays%2C%20blue%20and%20green%20lighting%2C%20high-tech%20research%20facility%20with%20electromagnetic%20fields%2C%20clean%20minimalist%20design%2C%20advanced%20technology%20atmosphere%2C%20professional%20scientific%20environment&width=1920&height=1080&seq=hero&orientation=landscape')`,*/}


        {/*>*/}
        {/*  /!* Overlay *!/*/}
        {/*  /!*<div className="absolute inset-0 bg-black/50"></div>*!/*/}
        {/*  <video src='../../../../public/r-4-x-bot (2).mp4' className='fixed -z-10 h-full' autoPlay={true}  loop={true} />*/}

        {/*  <div className=" lg:px-8 relative z-10">*/}
        {/*    <div className="w-full flex items-center justify-center min-h-screen py-20">*/}
        {/*      <div className="text-center max-w-4xl">*/}
        {/*        <h1 className="text-gradient bg-gradient-to-r font-extrabold from-[#000] to-[#999999] bg-clip-text text-transparent text-4xl md:text-5xl lg:text-[70px] max-w-[1000px]  lg:leading-[90px]">*/}
        {/*          We Are <span className='text-[#9DA7D0]'>{displayText}</span>*/}
        {/*          <span className="inline-block w-1 h-8 md:h-12 bg-[#9DA7D0] ml-1 animate-pulse"></span>*/}

        {/*          <span className="block mt-2">21st Century Technology</span>*/}
        {/*        </h1>*/}
        {/*        /!*<h3 data-v-9a57f742=""*!/*/}
        {/*        /!*    className="font-semibold text-gradient bg-gradient-to-r to-[#999999] from-[#FFFFFF] bg-clip-text text-transparent text-4xl md:text-5xl lg:text-[70px] max-w-[1000px] lg:leading-[110px]">*!/*/}
        {/*        /!*  We Are <span data-v-9a57f742="" className="text-[#9DA7D0]">Building</span> <br*!/*/}
        {/*        /!*    data-v-9a57f742=""/><span data-v-9a57f742=""> 21st Century Tech For Africa</span>.</h3>*!/*/}
        {/*        /!*<p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">*!/*/}
        {/*        /!*  Leading the future with magnetic levitation technology, superconducting systems,*!/*/}
        {/*        /!*  and breakthrough electromagnetic innovations*!/*/}
        {/*        /!*</p>*!/*/}
        {/*        /!*<div className="flex flex-col sm:flex-row gap-4 justify-center">*!/*/}
        {/*        /!*  <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap cursor-pointer">*!/*/}
        {/*        /!*    Explore Superconductivity*!/*/}
        {/*        /!*  </button>*!/*/}
        {/*        /!*  <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 whitespace-nowrap cursor-pointer">*!/*/}
        {/*        /!*    View Projects*!/*/}
        {/*        /!*  </button>*!/*/}
        {/*        /!*</div>*!/*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}


        {/*  /!* Scroll Indicator *!/*/}
        {/*  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">*/}
        {/*    <div className="w-6 h-6 flex items-center justify-center text-white">*/}
        {/*      <i className="ri-arrow-down-line text-2xl"></i>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}

        <section className="relative  text-white overflow-hidden ">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <video src='../../../../public/r-4-x-bot (2).mp4' className='absolute -z-10 h-full w-full inset-0 object-cover bg-cover bg-center' autoPlay={true}  loop={true} />*
          {/*<div className="absolute inset-0 bg-cover bg-center"*/}
          {/*     style={{backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"}}></div>*/}

          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-start">
              <div className="w-full  mb-12 md:mb-0 flex flex-col justify-center items-start">
                {/*<h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">*/}
                {/*  Innovate.<br/>Transform.<br/>Succeed.*/}
                {/*</h1>*/}
                {/*<p className="text-xl mb-8 text-gray-300">Empowering businesses with cutting-edge solutions for a*/}
                {/*  digital future.</p>*/}
                <h1 className="text-gradient bg-gradient-to-r font-extrabold from-[#FFF] to-[#999999] bg-clip-text text-transparent text-4xl md:text-5xl lg:text-[70px] max-w-[1000px]  lg:leading-[90px]">
                  We Are <span className='text-[#9DA7D0]'>{displayText}</span>
                  <span className="inline-block w-1 h-8 md:h-12 bg-[#9DA7D0] ml-1 animate-pulse"></span>
                  <span className="block my-2">21st Century Technology</span>

                </h1>


                {/*<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">*/}
                {/*  <a href="#"*/}
                {/*     className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition duration-300 text-center">Get*/}
                {/*    Started</a>*/}
                {/*  <a href="#"*/}
                {/*     className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition duration-300 text-center">Learn*/}
                {/*    More</a>*/}
                {/*</div>*/}
              </div>

              {/*<div className="w-full md:w-1/2 md:pl-12">*/}
              {/*  <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">*/}
              {/*    <h2 className="text-2xl font-semibold mb-6">Why MyCompany?</h2>*/}
              {/*    <ul className="space-y-4">*/}
              {/*      <li className="flex items-center">*/}
              {/*        <svg className="w-6 h-6 mr-3 text-yellow-400" fill="none" stroke="currentColor"*/}
              {/*             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
              {/*          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
              {/*                d="M13 10V3L4 14h7v7l9-11h-7z"></path>*/}
              {/*        </svg>*/}
              {/*        <span>Lightning-fast Performance</span>*/}
              {/*      </li>*/}
              {/*      <li className="flex items-center">*/}
              {/*        <svg className="w-6 h-6 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"*/}
              {/*             xmlns="http://www.w3.org/2000/svg">*/}
              {/*          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
              {/*                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>*/}
              {/*        </svg>*/}
              {/*        <span>Bank-grade Security</span>*/}
              {/*      </li>*/}
              {/*      <li className="flex items-center">*/}
              {/*        <svg className="w-6 h-6 mr-3 text-purple-400" fill="none" stroke="currentColor"*/}
              {/*             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
              {/*          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
              {/*                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>*/}
              {/*        </svg>*/}
              {/*        <span>AI-powered Insights</span>*/}
              {/*      </li>*/}
              {/*    </ul>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>

          {/*<div className="absolute bottom-0 left-0 right-0">*/}
          {/*  <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
          {/*    <path*/}
          {/*        d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"*/}
          {/*        fill="white"/>*/}
          {/*  </svg>*/}
          {/*</div>*/}
        </section>


      </>
  );
}
