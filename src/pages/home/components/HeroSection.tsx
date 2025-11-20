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
        <section className="relative  text-white overflow-hidden ">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-start">
              <div className="w-full  mb-12 md:mb-0 flex flex-col justify-center items-start">

                <h1 className="text-gradient bg-gradient-to-r font-extrabold from-[#FFF] to-[#999999] bg-clip-text text-transparent text-4xl md:text-5xl lg:text-[70px] max-w-[1000px]  lg:leading-[90px]">
                  We Are <span className='text-[#9DA7D0]'>{displayText}</span>
                  <span className="inline-block w-1 h-8 md:h-12 bg-[#9DA7D0] ml-1 animate-pulse"></span>
                  <span className="block my-2">21st Century Technology</span>

                </h1>

              </div>
            </div>
          </div>

        </section>


      </>
  );
}
