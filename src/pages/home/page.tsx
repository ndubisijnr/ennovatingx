import { useState, useEffect } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, ShoppingCart, Menu, MapPin, Mail, Phone, Moon, Sun } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const [isDark, setIsDark] = useState(true);

    const words = ["Building.", "Innovating.", "Discovering."];

    // Theme colors
    const themes = {
        dark: {
            bg: 'bg-gray-900',
            bgAlt: 'bg-gray-800',
            bgCard: 'bg-gray-900',
            text: 'text-white',
            textMuted: 'text-gray-400',
            accent: 'text-[#9DA7D0]',
            accentBg: 'bg-[#9DA7D0]',
            border: 'border-gray-800',
            header: 'bg-black/30',
            footer: 'bg-black'
        },
        light: {
            bg: 'bg-gray-50',
            bgAlt: 'bg-white',
            bgCard: 'bg-white',
            text: 'text-gray-900',
            textMuted: 'text-gray-600',
            accent: 'text-[#6B7AA1]',
            accentBg: 'bg-[#6B7AA1]',
            border: 'border-gray-200',
            header: 'bg-white/80',
            footer: 'bg-gray-100'
        }
    };

    const NavSection = ({ title, items }) => (
        <div className="space-y-2">
            <h3 className={`text-xs font-semibold uppercase tracking-wider ${theme.secondary} mb-3`}>
                {title}
            </h3>
            <div className="space-y-1">
                {items.map((item, index) => (
                    <button
                        key={index}
                        className={`block w-full text-left py-2 text-sm ${theme.primary} hover:${theme.bgAlt} rounded-md transition-colors duration-200 cursor-pointer`}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );


    const theme = isDark ? themes.dark : themes.light;

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

    const carouselItems = [
        {
            image: "../../../../public/IMG_2770.JPG",
            title: "Exploring Lenz Law",
            type: "image",
            description: "Bridging the gap between retro charm and modern power.",
            alt: "A desk with vintage technology like a Commodore computer and a Game Boy, bathed in vibrant pink and blue neon lights, retro-futuristic style."
        },
        {
            image: "../../../../public/VID-20220628-WA0032.mp4",
            title: "Exploring Magnetic Fields",
            type: "video",
            description: "Exploring the future of human-computer interfaces.",
            alt: "A glowing, holographic brain interface with neural pathways firing, dark background, cyberpunk aesthetic."
        },
        {
            image: "../../../../public/Inst_0001.jpeg",
            title: "Building Cutting Edge Software As A Serivce (SAAS) Products",
            type: "image",
            description: "Exploring the future of human-computer interfaces.",
            alt: "A glowing, holographic brain interface with neural pathways firing, dark background, cyberpunk aesthetic."
        },
        {
            image: "../../../../public/IMG_2752.JPG",
            title: "The Messiner Effect",
            type: "image",
            description: "Dive in with us, as we talk about the messiner effect",
            alt: "A glowing, holographic brain interface with neural pathways firing, dark background, cyberpunk aesthetic."
        },
        {
            image: "../../../../public/IMG_2752.JPG",
            title: "Electro Magnectic Suspention",
            type: "image",
            description: "Dive in with us, as we talk about the Electro Magnectic Suspention(EMS) Principles",
            alt: "A glowing, holographic brain interface with neural pathways firing, dark background, cyberpunk aesthetic."
        },
        {
            image: "../../../../public/IMG_2752.JPG",
            title: "Electro Dynamic Suspention",
            type: "image",
            description: "Dive in with us, as we talk about the Electro Dynamic  Suspention(EDS) Principles",
            alt: "A glowing, holographic brain interface with neural pathways firing, dark background, cyberpunk aesthetic."
        },


        // {
        //     image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/a635ee898b-2fe4a7872a91d1694713.png",
        //     title: "Quantum Leap",
        //     description: "Unlocking the next generation of computational power.",
        //     alt: "An abstract visualization of quantum computing qubits as glowing, interconnected spheres of light."
        // }
    ];


    const getVisibleSlides = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 1024) return 3;
            if (window.innerWidth >= 768) return 2;
        }
        return 1;
    };

    const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());

    useEffect(() => {
        const handleResize = () => setVisibleSlides(getVisibleSlides());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
    };

    const getCarouselTransform = () => {
        const slideWidth = 100 / visibleSlides;
        return `translateX(-${currentSlide * slideWidth}%)`;
    };

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <div className={`${theme.bg} ${theme.text} min-h-screen font-sans transition-colors duration-500`}>
            {/* Header */}
            <header className={`fixed top-0 left-0 w-full ${theme.header} backdrop-blur-md z-50 transition-colors duration-500`}>
                <nav className="container mx-auto  px-6 py-4 flex gap-5 justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10">
                            <img
                                className="w-full h-full object-contain"
                                src="/public/logo.svg"
                                alt="futuristic circular tech logo, ENX initials, glowing blue and purple neon lines on a dark background"
                            />
                        </div>
                        <span className="text-xl font-bold tracking-wider">ENNOVATINGX</span>
                    </div>


                    <div className="hidden md:flex items-center space-x-8  w-full ">
                        <div className={`hover:${theme.accent} w-1 border border-black dark:border-white h-6 bg-black dark:bg-white transition-colors duration-300 cursor-pointer font-extrabold`}></div>
                        <div className="group">
                            <button className={`hover:${theme.accent} transition-colors duration-300 flex items-center`}>
                                More <ChevronDown className="ml-2 w-3 h-3" />
                            </button>
                            <div className={`absolute top-full w-full left-0 ${theme.bgCard} rounded-lg shadow-xl w-48 p-2 opacity-0 invisible group-hover:opacity-80 group-hover:visible transition-all duration-300`}>
                                <div className="w-full mx-auto p-6">
                                    {/* Grid Layout */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        {/* Animation Section */}
                                        <div className="flex items-start justify-center md:col-span-1">
                                            <div className="w-48 h-48">
                                                <DotLottieReact
                                                    src="https://lottie.host/159397d6-164c-4a40-b321-20082ac9efc1/Xsnn0gyoVb.lottie"
                                                    loop
                                                    autoplay
                                                />
                                            </div>
                                        </div>

                                        {/* Navigation Sections */}
                                        <div className="md:col-span-2">
                                            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
                                                {/* Research Section */}
                                                <NavSection
                                                    title="MAGLEV Research"
                                                    items={['Super Conductors', 'Electro Magnetic Suspension', 'Electro Magnetic Suspension']}
                                                />

                                                <NavSection
                                                    title="Products"
                                                    items={['Atxlab', 'Atxhub', 'Atxcloud']}
                                                />

                                                <NavSection
                                                    title="Services"
                                                    items={['Software', 'Cloud', 'Reasearch And Development(R&D)']}
                                                />

                                                {/* Company Section */}
                                                <NavSection
                                                    title="Company"
                                                    items={["Founder's Letter"]}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                
                    

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className={`${theme.textMuted} hover:${theme.text} transition-colors duration-300 cursor-pointer p-2 rounded-full hover:bg-gray-700/20`}
                        >
                            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                        <span className={`${theme.textMuted} hover:${theme.text} transition-colors duration-300 cursor-pointer`}>
                            <ShoppingCart className="w-6 h-6" />
                        </span>
                        <button className="md:hidden text-xl" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </nav>
                 {showMobileMenu && ( <div className="items-center space-x-8  w-full ">
                          <div className="w-full p-6">
                                    {/* Grid Layout */}
                                    <div className=" gap-8">
                                        {/* Animation Section */}
                                        <div className="flex items-start justify-center md:col-span-1">
                                            <div className="w-48 h-48">
                                                <DotLottieReact
                                                    src="https://lottie.host/159397d6-164c-4a40-b321-20082ac9efc1/Xsnn0gyoVb.lottie"
                                                    loop
                                                    autoplay
                                                />
                                            </div>
                                        </div>

                                        {/* Navigation Sections */}
                                        <div className="md:col-span-2">
                                            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
                                                {/* Research Section */}
                                                <NavSection
                                                    title="MAGLEV Research"
                                                    items={['Super Conductors', 'Electro Magnetic Suspension', 'Electro Magnetic Suspension']}
                                                />

                                                <NavSection
                                                    title="Products"
                                                    items={['Atxlab', 'Atxhub', 'Atxcloud']}
                                                />

                                                <NavSection
                                                    title="Services"
                                                    items={['Software', 'Cloud', 'Reasearch And Development(R&D)']}
                                                />

                                                {/* Company Section */}
                                                <NavSection
                                                    title="Company"
                                                    items={["Founder's Letter"]}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        
                    </div>)}   
            </header>

            {/* Hero Section */}
            <section className="h-screen min-h-[600px] relative flex items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        className={`w-full h-full object-cover ${isDark ? 'opacity-30' : 'opacity-20'} transition-opacity duration-500`}
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ddbbf6f955-dcb14a45af5d67a76116.png"
                        alt="minimalist futuristic robot with a glowing purple head on a dark grey background, subtle digital noise, cinematic lighting"
                    />
                </div>
                <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-gray-900 via-transparent to-transparent' : 'bg-gradient-to-t from-gray-50 via-transparent to-transparent'} z-10 transition-colors duration-500`}></div>
                <div className="relative z-20 px-4">
                    <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold ${isDark ? 'text-white/5' : 'text-gray-900/5'} tracking-widest pointer-events-none transition-colors duration-500`}>ENX</span>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                        We Are <span className={isDark ? 'text-[#9DA7D0]' : 'text-[#6B7AA1]'}>{displayText}</span>
                        <span className={`${isDark ? 'bg-[#9DA7D0]' : 'bg-[#6B7AA1]'} ml-1 animate-pulse w-1 h-8 md:h-12 inline-block mx-2 transition-colors duration-500`}></span>
                    </h1>
                    <p className={`text-6xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text ${isDark ? 'bg-gradient-to-r from-gray-200 to-gray-500' : 'bg-gradient-to-r from-gray-700 to-gray-400'} mt-2 transition-all duration-500`}>
                        21st Century Technology
                    </p>
                </div>
            </section>

            {/* Carousel Section */}
            <section className={`py-24 ${theme.bg} transition-colors duration-500`}>
                <div className="container mx-auto px-6">
                    <div className={`w-32 h-1 bg-gradient-to-r ${isDark ? 'from-[#9DA7D0] to-[#9DA7D0]' : 'from-[#6B7AA1] to-[#6B7AA1]'} mb-8 transition-colors duration-500`}></div>
                    <h2 className="text-4xl font-bold mb-2">What We're Up To</h2>
                    <p className={`${theme.textMuted} mb-12 max-w-2xl transition-colors duration-500`}>Immerse yourself in the cutting edge of technology and innovation. Here's a glimpse into our latest projects.</p>

                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: getCarouselTransform() }}
                            >
                                {carouselItems.map((item, index) => (
                                    <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-4">
                                        <div className="relative rounded-2xl overflow-hidden group">
                                            <div className="h-[450px]">
                                                {item.type === 'image' && (<img
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    src={item.image}
                                                    alt={item.alt}
                                                />)}

                                                {item.type === 'video' && (
                                                    <video
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                        src='./public/VID-20220628-WA0034.mp4'
                                                        controls
                                                        muted
                                                        autoPlay
                                                        loop
                                                        playsInline
                                                    />
                                                )}

                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                            <div className="absolute bottom-0 left-0 p-6">
                                                <h3 className="text-2xl font-bold mb-1 text-white">{item.title}</h3>
                                                <p className="text-sm text-gray-300">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={prevSlide}
                            className={`absolute top-1/2 left-0 -translate-y-1/2 ${isDark ? 'bg-white/10' : 'bg-black/10'} backdrop-blur-sm p-3 rounded-full ${isDark ? 'text-white hover:bg-white/20' : 'text-gray-900 hover:bg-black/20'} transition-all duration-300 z-10 mx-2`}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className={`absolute top-1/2 right-0 -translate-y-1/2 ${isDark ? 'bg-white/10' : 'bg-black/10'} backdrop-blur-sm p-3 rounded-full ${isDark ? 'text-white hover:bg-white/20' : 'text-gray-900 hover:bg-black/20'} transition-all duration-300 z-10 mx-2`}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className={`py-24  transition-colors duration-500 relative overflow-hidden`}>

                {/* BACKGROUND VIDEO */}
                <video
                    src='/public/20220701_095229.mp4'
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover  opacity-60"
                />


                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
                    <div>
                        <span className={`${isDark ? 'text-[#9DA7D0]' : 'text-[#353536]'} font-semibold tracking-widest transition-colors duration-500`}>ATXLAB</span>
                        <h2 className="text-4xl font-bold mt-2 mb-6">We Can Make It Float Too.</h2>
                        <p className={`${theme.text} mb-8 transition-colors duration-500 max-w-sm min-w-sm`}>
                            We Research, Design, Build, Test, And Prototype Levitating Technology.  Just Think About What You Would Like To Levitate.
                        </p>


                        {/* 
                        <button className={`${isDark ? 'bg-[#9DA7D0] hover:bg-[#8B93BC]' : 'bg-[#6B7AA1] hover:bg-[#5A6890]'} text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300`}>
                            Founder's Letter
                        </button> */}
                    </div>

                    <div className="relative h-[500px]">

                    </div>
                </div>

            </section>


            <section className={`py-24  transition-colors duration-500 relative overflow-hidden`}>




                <div className="container mx-auto px-6  gap-16 items-center relative z-10">
                    <div className='text-center'>
                        <span className={`${isDark ? 'text-[#9DA7D0]' : 'text-[#353536]'} font-semibold tracking-widest transition-colors duration-500`}>ATXLAB</span>
                        <h2 className="text-4xl font-bold mt-2 mb-6">We Are All About MAGLEv</h2>
                        <p className={`${theme.text} mb-8 transition-colors duration-500`}>
                            And We Sabi Make Am Float Ontop.
                        </p>

                    </div>

                    <div className="relative">
            

                        <main className="py-16">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold">We are ENX(ATXLAB)</h2>
                                    <p className="text-subtle-light dark:text-subtle-dark leading-relaxed">
                                        We are not something you come across every day. We exist to make heads turn. At the end of the day; this is what people will be talking about.
                                    </p>
                                    <p className="text-subtle-light dark:text-subtle-dark leading-relaxed">
                                        We are ENX(ATXLAB) and we provide magnetic levitation technology to businesses, agencies, designers and tinkers.
                                    </p>
                                    <p className="text-subtle-light dark:text-subtle-dark leading-relaxed">
                                        ENX(ATXLAB) is a tech lab focused on engineering revolutionary solutions across MAGLEV, AI, robotics, advanced systems, human-machine interfaces, and future-driven research.
                                        We combine imagination, computation, and raw innovation to shape what comes after what’s possible.                                    </p>
                                </div>
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold">MAGLEV For Agencies</h2>
                                    <p className="text-subtle-light dark:text-subtle-dark leading-relaxed">
                                        The same applies to magnetic levitation as a marketing tool because you can create a situation where people see something that shouldn't be possible, therefore triggering interest on the spot. You can imagine what the sight of a floating object does in combination with social media.
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold">MAGLEV For  Business</h2>
                                    <p className="text-subtle-light dark:text-subtle-dark leading-relaxed">
                                        Next to that, levitation technology can power your business in a unique way. By floating your product in mid-air it will be isolated from the world around it and therefore it will attract maximum attention.
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold">MAGLEV For Designers</h2>
                                    <p className="text-subtle-light dark:text-subtle-dark leading-relaxed">
                                        Furthermore, the concept of Maglev technology can hold a significant value for designers. On the one hand it can focus the attention to your design as a means of presentation. On the other hand, floating technology can become an integrated part of your design as a feature.
                                    </p>
                                </div>
                                <div className="space-y-6 md:col-start-2">
                                    <h2 className="text-3xl font-bold">MAGLEV For Tinkers</h2>
                                    <p className="text-subtle-light dark:text-subtle-dark leading-relaxed">
                                        In the end, levitation technology is just a lot of fun and anybody with a love for technology can tinker with our products.
                                    </p>
                                </div>
                            </div>
                            <div className="text-center mt-24">
                                <p className="text-lg text-subtle-light dark:text-subtle-dark">Curious what we have to offer?</p>
                            </div>
                        </main>

                        <div className="container mx-auto px-6 flex justify-center gap-16 items-center">
                            <div className=' max-w-lg min-w-lg'>
                                <h2 className="text-4xl font-bold mb-4 text-center">Let's Build the Future Together</h2>
                                <p className={`${theme.textMuted} mb-8 transition-colors duration-500 text-center`}>Have a groundbreaking idea or a complex problem? We're here to listen and collaborate. Reach out to us and let's start the conversation.</p>
                                <div className="space-y-6 flex flex-col items-center justify-center w-full">
                                    <div className="flex items-start space-x-4 w-full">
                                        <div className={`${theme.bgCard} p-3 rounded-full mt-1 transition-colors duration-500`}>
                                            <MapPin className={`${isDark ? 'text-[#9DA7D0]' : 'text-[#6B7AA1]'} w-5 h-5 transition-colors duration-500`} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Our Headquarters</h3>
                                            <p className={`${theme.textMuted} transition-colors duration-500`}>Eskişehir, Turkey</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4 w-full">
                                        <div className={`${theme.bgCard} p-3 rounded-full mt-1 transition-colors duration-500`}>
                                            <Mail className={`${isDark ? 'text-[#9DA7D0]' : 'text-[#6B7AA1]'} w-5 h-5 transition-colors duration-500`} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Email Us</h3>
                                            <a href='mailto:contact@ennovatingx.com' className={`${theme.textMuted} transition-colors duration-500`}>contact@ennovatingx.com</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4 w-full">
                                        <div className={`${theme.bgCard} p-3 rounded-full mt-1 transition-colors duration-500`}>
                                            <Phone className={`${isDark ? 'text-[#9DA7D0]' : 'text-[#6B7AA1]'} w-5 h-5 transition-colors duration-500`} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Call Us</h3>
                                            <p className={`${theme.textMuted} transition-colors duration-500`}>ENGR EBUKA ON (+90) 553 793 51 64</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                        </div>
                    </div>
                </div>


            </section>




            {/* Footer */}
            <footer className={`${theme.footer} ${theme.textMuted} transition-colors duration-500`}>
                <div className="container mx-auto px-6 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="col-span-2 md:col-span-1">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-8">
                                    <img
                                        className="w-full h-full object-contain"
                                        src="/public/logo.svg"
                                        alt="futuristic circular tech logo, ENX initials, glowing blue and purple neon lines on a dark background"
                                    />
                                </div>
                                <span className={`text-lg font-bold ${theme.text} transition-colors duration-500`}>ENNOVATINGX</span>
                            </div>
                            <p className="text-sm">Pioneering the future through innovation and technology.</p>
                        </div>
                        <div>
                            <h4 className={`font-semibold ${theme.text} mb-4 transition-colors duration-500`}>Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li className={`hover:${theme.text} cursor-pointer transition-colors duration-300`}>About Us</li>
                                <li className={`hover:${theme.text} cursor-pointer transition-colors duration-300`}>Careers</li>
                                <li className={`hover:${theme.text} cursor-pointer transition-colors duration-300`}>Press</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className={`font-semibold ${theme.text} mb-4 transition-colors duration-500`}>Resources</h4>
                            <ul className="space-y-2 text-sm">
                                <li className={`hover:${theme.text} cursor-pointer transition-colors duration-300`}>Blog</li>
                                <li className={`hover:${theme.text} cursor-pointer transition-colors duration-300`}>Documentation</li>
                                <li className={`hover:${theme.text} cursor-pointer transition-colors duration-300`}>Support</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className={`font-semibold ${theme.text} mb-4 transition-colors duration-500`}>Legal</h4>
                            <ul className="space-y-2 text-sm">
                                <li className={`hover:${theme.text} cursor-pointer transition-colors duration-300`}>Privacy</li>
                                <li className={`hover:${theme.text} cursor-pointer transition-colors duration-300`}>Terms</li>
                                <li className={`hover:${theme.text} cursor-pointer transition-colors duration-300`}>Cookie Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`border-t ${theme.border} mt-8 pt-8 text-center text-sm transition-colors duration-500`}>
                        <p>&copy; 2025 Ennovatingx. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
