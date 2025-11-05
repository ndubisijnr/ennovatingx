// //
// // import Header from '../../components/feature/Header';
// // import Footer from '../../components/feature/Footer';
// // import HeroSection from './components/HeroSection';
// // import ServicesSection from './components/ServicesSection';
// // // import SolutionsSection from './components/SolutionsSection';
// // // import ProjectsSection from './components/ProjectsSection';
// // // import AboutSection from './components/AboutSection';
// // // import ContactSection from './components/ContactSection';
// // // import {FounderNote} from "../foundersNote/page.tsx";
// // import Carousel3D from "../../components/Carousel.tsx";
// //
// // export default function Home() {
// //   return (
// //     <div className="min-h-screen">
// //       <Header />
// //       <main>
// //         <HeroSection />
// //           {/*<FounderNote />*/}
// //           <Carousel3D />
// //         <ServicesSection />
// //         {/*<SolutionsSection />*/}
// //         {/*<ProjectsSection />*/}
// //         {/*<AboutSection />*/}
// //         {/*<ContactSection />*/}
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // }
//
// import  { useState, useEffect } from 'react';
// import { ChevronDown, ChevronLeft, ChevronRight, ShoppingCart, Menu, MapPin, Mail, Phone } from 'lucide-react';
//
// export default function Home() {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [showMobileMenu, setShowMobileMenu] = useState(false);
//     const [displayText, setDisplayText] = useState('');
//     const [isDeleting, setIsDeleting] = useState(false);
//     const [loopNum, setLoopNum] = useState(0);
//     const [typingSpeed, setTypingSpeed] = useState(150);
//
//     const words = ["Building.", "Innovating.", "Discovering."];
//
//     useEffect(() => {
//         const handleTyping = () => {
//             const i = loopNum % words.length;
//             const fullText = words[i];
//
//             setDisplayText(
//                 isDeleting
//                     ? fullText.substring(0, displayText.length - 1)
//                     : fullText.substring(0, displayText.length + 1)
//             );
//
//             setTypingSpeed(isDeleting ? 75 : 150);
//
//             if (!isDeleting && displayText === fullText) {
//                 setTimeout(() => setIsDeleting(true), 2000);
//             } else if (isDeleting && displayText === '') {
//                 setIsDeleting(false);
//                 setLoopNum(loopNum + 1);
//             }
//         };
//
//         const timer = setTimeout(handleTyping, typingSpeed);
//         return () => clearTimeout(timer);
//     }, [displayText, isDeleting, loopNum, typingSpeed]);
//
//
//     const carouselItems = [
//         {
//             image: "../../../../public/IMG_2770.JPG",
//             title: "Tech Haven",
//             description: "Bridging the gap between retro charm and modern power.",
//             alt: "A desk with vintage technology like a Commodore computer and a Game Boy, bathed in vibrant pink and blue neon lights, retro-futuristic style."
//         },
//         {
//             image: "../../../../public/IMG_2752.JPG",
//             title: "Neural Sync",
//             description: "Exploring the future of human-computer interfaces.",
//             alt: "A glowing, holographic brain interface with neural pathways firing, dark background, cyberpunk aesthetic."
//         },
//         {
//             image: "../../../../public/Inst_0001.jpeg",
//             title: "Project Gaia",
//             description: "AI-driven solutions for a sustainable planet.",
//             alt: "A close-up of a sophisticated robotic hand delicately holding a glowing plant sprout, symbolizing AI and nature."
//         },
//         {
//             image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/a635ee898b-2fe4a7872a91d1694713.png",
//             title: "Quantum Leap",
//             description: "Unlocking the next generation of computational power.",
//             alt: "An abstract visualization of quantum computing qubits as glowing, interconnected spheres of light."
//         }
//     ];
//
//     const galleryImages = [
//         [
//             { src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/23fac462ca-986067bd373aa45789ca.png", alt: "close up of a complex circuit board with glowing traces of light, macro photography" },
//             { src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/3ea12dd6df-b7238beb113d243b206f.png", alt: "A sleek autonomous drone hovering in a futuristic city, motion blur" }
//         ],
//         [
//             { src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/bdc2f222fe-84dc66c172c078400295.png", alt: "Scientist in a lab coat observing glowing liquid in a beaker, cinematic lighting" },
//             { src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/3ff59b9c2c-e0e00e6a25d71796f945.png", alt: "3D printer creating a complex geometric object with laser beams, dark environment" }
//         ],
//         [
//             { src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/d28b849a9f-cdb087ef1dfa6e782cf2.png", alt: "A server room with rows of racks, blue and purple LED lights creating a data-driven atmosphere" },
//             { src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/b186d831cf-2a90406e14f0fe435d0d.png", alt: "A virtual reality headset user interacting with a floating data visualization" }
//         ],
//         [
//             { src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/17a68bd53c-2aba73829858fb6f1f94.png", alt: "A robotic arm assembling a microchip with precision, close-up shot" },
//             { src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/60ea65612a-02ffbb1a635bdf920509.png", alt: "Abstract network of glowing nodes and connections representing artificial intelligence" }
//         ]
//     ];
//
//     const getVisibleSlides = () => {
//         if (typeof window !== 'undefined') {
//             if (window.innerWidth >= 1024) return 3;
//             if (window.innerWidth >= 768) return 2;
//         }
//         return 1;
//     };
//
//     const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());
//
//     useEffect(() => {
//         const handleResize = () => setVisibleSlides(getVisibleSlides());
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);
//
//     const nextSlide = () => {
//         setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
//     };
//
//     const prevSlide = () => {
//         setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
//     };
//
//     const getCarouselTransform = () => {
//         const slideWidth = 100 / visibleSlides;
//         return `translateX(-${currentSlide * slideWidth}%)`;
//     };
//
//     return (
//         <div className="bg-gray-900 text-white min-h-screen font-sans">
//             {/* Header */}
//             <header className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md z-50">
//                 <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
//                     <div className="flex items-center space-x-2">
//                         <div className="w-10 h-10">
//                             <img
//                                 className="w-full h-full object-cover rounded-full"
//                                 src="https://storage.googleapis.com/uxpilot-auth.appspot.com/927f7a78ca-5a04a5d079f5ae335f6a.png"
//                                 alt="futuristic circular tech logo, ENX initials, glowing blue and purple neon lines on a dark background"
//                             />
//                         </div>
//                         <span className="text-xl font-bold tracking-wider">ENNOVATINGX</span>
//                     </div>
//
//                     <div className="hidden md:flex items-center space-x-8">
//                         <span className="hover:text-[#9DA7D0] transition-colors duration-300 cursor-pointer">Home</span>
//                         <div className="relative group">
//                             <button className="hover:text-[#9DA7D0] transition-colors duration-300 flex items-center">
//                                 Projects <ChevronDown className="ml-2 w-3 h-3" />
//                             </button>
//                             <div className="absolute top-full left-0 mt-2 bg-gray-800 rounded-lg shadow-xl w-48 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//                                 <span className="block px-4 py-2 text-sm hover:bg-gray-900 rounded-md transition-colors duration-200 cursor-pointer">AI Research</span>
//                                 <span className="block px-4 py-2 text-sm hover:bg-gray-900 rounded-md transition-colors duration-200 cursor-pointer">Robotics</span>
//                                 <span className="block px-4 py-2 text-sm hover:bg-gray-900 rounded-md transition-colors duration-200 cursor-pointer">Quantum Computing</span>
//                             </div>
//                         </div>
//                         <div className="relative group">
//                             <button className="hover:text-[#9DA7D0] transition-colors duration-300 flex items-center">
//                                 About <ChevronDown className="ml-2 w-3 h-3" />
//                             </button>
//                             <div className="absolute top-full left-0 mt-2 bg-gray-800 rounded-lg shadow-xl w-48 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//                                 <span className="block px-4 py-2 text-sm hover:bg-gray-900 rounded-md transition-colors duration-200 cursor-pointer">Our Mission</span>
//                                 <span className="block px-4 py-2 text-sm hover:bg-gray-900 rounded-md transition-colors duration-200 cursor-pointer">The Team</span>
//                                 <span className="block px-4 py-2 text-sm hover:bg-gray-900 rounded-md transition-colors duration-200 cursor-pointer">Careers</span>
//                             </div>
//                         </div>
//                         <span className="hover:text-[#9DA7D0] transition-colors duration-300 cursor-pointer">Contact</span>
//                     </div>
//
//                     <div className="flex items-center space-x-4">
//                         <button id="theme-toggle"
//                                 className="text-brand-light-gray hover:text-white transition-colors duration-300 cursor-pointer">
//                             <i id="theme-icon" className="fa-solid fa-moon fa-lg"></i>
//                         </button>
//                         <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
//               <ShoppingCart className="w-6 h-6"/>
//             </span>
//                         <button className="md:hidden text-xl" onClick={() => setShowMobileMenu(!showMobileMenu)}>
//                             <Menu className="w-6 h-6"/>
//                         </button>
//                     </div>
//                 </nav>
//             </header>
//
//             {/* Hero Section */}
//             <section
//                 className="h-screen min-h-[600px] relative flex items-center justify-center text-center overflow-hidden">
//             <div className="absolute inset-0 z-0">
//                     <img
//                         className="w-full h-full object-cover opacity-30"
//                         src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ddbbf6f955-dcb14a45af5d67a76116.png"
//                         alt="minimalist futuristic robot with a glowing purple head on a dark grey background, subtle digital noise, cinematic lighting"
//                     />
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
//                 <div className="relative z-20 px-4">
//                     <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold text-white/5 tracking-widest pointer-events-none">ENX</span>
//                     <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
//                         We Are <span className='text-[#9DA7D0]'>{displayText}</span>
//                         <span className="bg-[#9DA7D0] ml-1 animate-pulse  w-1 h-8 md:h-12 inline-block mx-2"></span>
//
//                         {/*<span className="inline-block w-1 h-8 md:h-12 bg-[#9DA7D0] ml-1 animate-pulse">||</span>*/}
//
//                     </h1>
//                     {/*<span className="bg-[#9DA7D0] ml-1 animate-pulse inline-block mx-2">||</span>*/}
//
//                     <p className="text-6xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 mt-2">
//                         21st Century Technology
//                     </p>
//                 </div>
//             </section>
//
//             {/* Carousel Section */}
//             <section className="py-24 bg-gray-900">
//                 <div className="container mx-auto px-6">
//                     <div className="w-32 h-1 bg-gradient-to-r from-[#9DA7D0] to-[#9DA7D0] mb-8"></div>
//                     <h2 className="text-4xl font-bold mb-2">What We're Up To</h2>
//                     <p className="text-gray-400 mb-12 max-w-2xl">Immerse yourself in the cutting edge of technology and innovation. Here's a glimpse into our latest projects.</p>
//
//                     <div className="relative">
//                         <div className="overflow-hidden">
//                             <div
//                                 className="flex transition-transform duration-500 ease-in-out"
//                                 style={{ transform: getCarouselTransform() }}
//                             >
//                                 {carouselItems.map((item, index) => (
//                                     <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-4">
//                                         <div className="relative rounded-2xl overflow-hidden group">
//                                             <div className="h-[450px]">
//                                                 <img
//                                                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                                                     src={item.image}
//                                                     alt={item.alt}
//                                                 />
//                                             </div>
//                                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
//                                             <div className="absolute bottom-0 left-0 p-6">
//                                                 <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
//                                                 <p className="text-sm text-gray-300">{item.description}</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         <button
//                             onClick={prevSlide}
//                             className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 z-10 mx-2"
//                         >
//                             <ChevronLeft className="w-6 h-6" />
//                         </button>
//                         <button
//                             onClick={nextSlide}
//                             className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 z-10 mx-2"
//                         >
//                             <ChevronRight className="w-6 h-6" />
//                         </button>
//                     </div>
//                 </div>
//             </section>
//
//             {/* About Section */}
//             <section className="py-24 bg-gray-800">
//                 <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
//                     <div>
//                         <span className="text-[#9DA7D0] font-semibold tracking-widest">ABOUT US</span>
//                         <h2 className="text-4xl font-bold mt-2 mb-6">Pioneering the Future, Today.</h2>
//                         <p className="text-gray-400 mb-4">Ennovatingx is not just a company; it's a collective of dreamers, builders, and innovators dedicated to solving the world's most complex challenges through technology. We believe in the power of code, silicon, and human ingenuity to create a better, more connected future.</p>
//                         <p className="text-gray-400 mb-8">From artificial intelligence that learns and adapts, to robotic systems that extend human capability, our work is at the forefront of the technological revolution. We are relentless in our pursuit of knowledge and excellence.</p>
//                         <button className="bg-[#9DA7D0] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#9DA7D0] transition-colors duration-300">
//                             Meet The Team
//                         </button>
//                     </div>
//                     <div className="relative h-[500px]">
//                         <img
//                             className="w-full h-full object-cover rounded-2xl"
//                             src="https://storage.googleapis.com/uxpilot-auth.appspot.com/0a88a4f911-799b1f0296e790bb7e90.png"
//                             alt="A diverse team of engineers and scientists collaborating around a futuristic holographic interface in a modern, dimly lit lab, style of a high-tech movie scene."
//                         />
//                     </div>
//                 </div>
//             </section>
//
//             {/* Gallery Section */}
//             <section className="py-24 bg-gray-900">
//                 <div className="container mx-auto px-6 text-center">
//                     <h2 className="text-4xl font-bold mb-4">Our Gallery of Innovation</h2>
//                     <p className="text-gray-400 mb-12 max-w-2xl mx-auto">A visual journey through our labs, prototypes, and breakthrough moments.</p>
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                         {galleryImages.map((column, colIndex) => (
//                             <div key={colIndex} className="grid gap-4">
//                                 {column.map((image, imgIndex) => (
//                                     <div key={imgIndex} className="rounded-xl overflow-hidden">
//                                         <img
//                                             className="h-auto max-w-full hover:scale-105 transition-transform duration-300"
//                                             src={image.src}
//                                             alt={image.alt}
//                                         />
//                                     </div>
//                                 ))}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//
//             {/* Contact Section */}
//             <section className="py-24 bg-gray-800">
//                 <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
//                     <div>
//                         <h2 className="text-4xl font-bold mb-4">Let's Build the Future Together</h2>
//                         <p className="text-gray-400 mb-8">Have a groundbreaking idea or a complex problem? We're here to listen and collaborate. Reach out to us and let's start the conversation.</p>
//                         <div className="space-y-6">
//                             <div className="flex items-start space-x-4">
//                                 <div className="bg-gray-900 p-3 rounded-full mt-1">
//                                     <MapPin className="text-[#9DA7D0] w-5 h-5" />
//                                 </div>
//                                 <div>
//                                     <h3 className="font-semibold">Our Headquarters</h3>
//                                     <p className="text-gray-400">123 Innovation Drive, Tech City, 90210</p>
//                                 </div>
//                             </div>
//                             <div className="flex items-start space-x-4">
//                                 <div className="bg-gray-900 p-3 rounded-full mt-1">
//                                     <Mail className="text-[#9DA7D0] w-5 h-5" />
//                                 </div>
//                                 <div>
//                                     <h3 className="font-semibold">Email Us</h3>
//                                     <p className="text-gray-400">contact@ennovatingx.com</p>
//                                 </div>
//                             </div>
//                             <div className="flex items-start space-x-4">
//                                 <div className="bg-gray-900 p-3 rounded-full mt-1">
//                                     <Phone className="text-[#9DA7D0] w-5 h-5" />
//                                 </div>
//                                 <div>
//                                     <h3 className="font-semibold">Call Us</h3>
//                                     <p className="text-gray-400">(555) 123-4567</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="bg-gray-900 p-8 rounded-2xl">
//                         <form className="space-y-6">
//                             <div>
//                                 <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     className="mt-1 block w-full bg-gray-800 border-transparent rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-[#9DA7D0] focus:border-[#9DA7D0] transition"
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     className="mt-1 block w-full bg-gray-800 border-transparent rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-[#9DA7D0] focus:border-[#9DA7D0] transition"
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
//                                 <textarea
//                                     id="message"
//                                     rows="4"
//                                     className="mt-1 block w-full bg-gray-800 border-transparent rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-[#9DA7D0] focus:border-[#9DA7D0] transition"
//                                 ></textarea>
//                             </div>
//                             <button
//                                 type="submit"
//                                 className="w-full bg-[#9DA7D0] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#9DA7D0] transition-colors duration-300"
//                             >
//                                 Send Message
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </section>
//
//             {/* Footer */}
//             <footer className="bg-black text-gray-400">
//                 <div className="container mx-auto px-6 py-12">
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//                         <div className="col-span-2 md:col-span-1">
//                             <div className="flex items-center space-x-2 mb-4">
//                                 <div className="w-8 h-8">
//                                     <img
//                                         className="w-full h-full object-cover rounded-full"
//                                         src="https://storage.googleapis.com/uxpilot-auth.appspot.com/927f7a78ca-f9cc40d661ef90fcf732.png"
//                                         alt="futuristic circular tech logo, ENX initials, glowing blue lines on dark"
//                                     />
//                                 </div>
//                                 <span className="text-lg font-bold text-white">ENNOVATINGX</span>
//                             </div>
//                             <p className="text-sm">Pioneering the future through innovation and technology.</p>
//                         </div>
//                         <div>
//                             <h4 className="font-semibold text-white mb-4">Company</h4>
//                             <ul className="space-y-2 text-sm">
//                                 <li className="hover:text-white cursor-pointer transition">About Us</li>
//                                 <li className="hover:text-white cursor-pointer transition">Careers</li>
//                                 <li className="hover:text-white cursor-pointer transition">Press</li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h4 className="font-semibold text-white mb-4">Resources</h4>
//                             <ul className="space-y-2 text-sm">
//                                 <li className="hover:text-white cursor-pointer transition">Blog</li>
//                                 <li className="hover:text-white cursor-pointer transition">Documentation</li>
//                                 <li className="hover:text-white cursor-pointer transition">Support</li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h4 className="font-semibold text-white mb-4">Legal</h4>
//                             <ul className="space-y-2 text-sm">
//                                 <li className="hover:text-white cursor-pointer transition">Privacy</li>
//                                 <li className="hover:text-white cursor-pointer transition">Terms</li>
//                                 <li className="hover:text-white cursor-pointer transition">Cookie Policy</li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
//                         <p>&copy; 2025 Ennovatingx. All rights reserved.</p>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// }

import { useState, useEffect } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, ShoppingCart, Menu, MapPin, Mail, Phone, Moon, Sun } from 'lucide-react';

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
            title: "Tech Haven",
            description: "Bridging the gap between retro charm and modern power.",
            alt: "A desk with vintage technology like a Commodore computer and a Game Boy, bathed in vibrant pink and blue neon lights, retro-futuristic style."
        },
        {
            image: "../../../../public/IMG_2752.JPG",
            title: "Neural Sync",
            description: "Exploring the future of human-computer interfaces.",
            alt: "A glowing, holographic brain interface with neural pathways firing, dark background, cyberpunk aesthetic."
        },
        {
            image: "../../../../public/Inst_0001.jpeg",
            title: "Project Gaia",
            description: "AI-driven solutions for a sustainable planet.",
            alt: "A close-up of a sophisticated robotic hand delicately holding a glowing plant sprout, symbolizing AI and nature."
        },
        {
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/a635ee898b-2fe4a7872a91d1694713.png",
            title: "Quantum Leap",
            description: "Unlocking the next generation of computational power.",
            alt: "An abstract visualization of quantum computing qubits as glowing, interconnected spheres of light."
        }
    ];

    const galleryImages = [
        [
            { src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/23fac462ca-986067bd373aa45789ca.png", alt: "close up of a complex circuit board with glowing traces of light, macro photography" },
            { src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/3ea12dd6df-b7238beb113d243b206f.png", alt: "A sleek autonomous drone hovering in a futuristic city, motion blur" }
        ],
        [
            { src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/bdc2f222fe-84dc66c172c078400295.png", alt: "Scientist in a lab coat observing glowing liquid in a beaker, cinematic lighting" },
            { src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/3ff59b9c2c-e0e00e6a25d71796f945.png", alt: "3D printer creating a complex geometric object with laser beams, dark environment" }
        ],
        [
            { src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/d28b849a9f-cdb087ef1dfa6e782cf2.png", alt: "A server room with rows of racks, blue and purple LED lights creating a data-driven atmosphere" },
            { src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/b186d831cf-2a90406e14f0fe435d0d.png", alt: "A virtual reality headset user interacting with a floating data visualization" }
        ],
        [
            { src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/17a68bd53c-2aba73829858fb6f1f94.png", alt: "A robotic arm assembling a microchip with precision, close-up shot" },
            { src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/60ea65612a-02ffbb1a635bdf920509.png", alt: "Abstract network of glowing nodes and connections representing artificial intelligence" }
        ]
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
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
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

                    <div className="hidden md:flex items-center space-x-8">
                        <span className={`hover:${theme.accent} transition-colors duration-300 cursor-pointer`}>Home</span>
                        <div className="relative group">
                            <button className={`hover:${theme.accent} transition-colors duration-300 flex items-center`}>
                                Projects <ChevronDown className="ml-2 w-3 h-3" />
                            </button>
                            <div className={`absolute top-full left-0 mt-2 ${theme.bgCard} rounded-lg shadow-xl w-48 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}>
                                <span className={`block px-4 py-2 text-sm hover:${theme.bgAlt} rounded-md transition-colors duration-200 cursor-pointer`}>AI Research</span>
                                <span className={`block px-4 py-2 text-sm hover:${theme.bgAlt} rounded-md transition-colors duration-200 cursor-pointer`}>Robotics</span>
                                <span className={`block px-4 py-2 text-sm hover:${theme.bgAlt} rounded-md transition-colors duration-200 cursor-pointer`}>Quantum Computing</span>
                            </div>
                        </div>
                        <div className="relative group">
                            <button className={`hover:${theme.accent} transition-colors duration-300 flex items-center`}>
                                About <ChevronDown className="ml-2 w-3 h-3" />
                            </button>
                            <div className={`absolute top-full left-0 mt-2 ${theme.bgCard} rounded-lg shadow-xl w-48 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}>
                                <span className={`block px-4 py-2 text-sm hover:${theme.bgAlt} rounded-md transition-colors duration-200 cursor-pointer`}>Our Mission</span>
                                <span className={`block px-4 py-2 text-sm hover:${theme.bgAlt} rounded-md transition-colors duration-200 cursor-pointer`}>The Team</span>
                                <span className={`block px-4 py-2 text-sm hover:${theme.bgAlt} rounded-md transition-colors duration-200 cursor-pointer`}>Careers</span>
                            </div>
                        </div>
                        <span className={`hover:${theme.accent} transition-colors duration-300 cursor-pointer`}>Contact</span>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className={`${theme.textMuted} hover:${theme.text} transition-colors duration-300 cursor-pointer p-2 rounded-full hover:bg-gray-700/20`}
                        >
                            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                        <span className={`${theme.textMuted} hover:${theme.text} transition-colors duration-300 cursor-pointer`}>
                            <ShoppingCart className="w-6 h-6"/>
                        </span>
                        <button className="md:hidden text-xl" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <Menu className="w-6 h-6"/>
                        </button>
                    </div>
                </nav>
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
                                                <img
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    src={item.image}
                                                    alt={item.alt}
                                                />
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
            <section className={`py-24 ${theme.bgAlt} transition-colors duration-500`}>
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className={`${isDark ? 'text-[#9DA7D0]' : 'text-[#6B7AA1]'} font-semibold tracking-widest transition-colors duration-500`}>ABOUT US</span>
                        <h2 className="text-4xl font-bold mt-2 mb-6">Pioneering the Future, Today.</h2>
                        <p className={`${theme.textMuted} mb-4 transition-colors duration-500`}>Ennovatingx is not just a company; it's a collective of dreamers, builders, and innovators dedicated to solving the world's most complex challenges through technology. We believe in the power of code, silicon, and human ingenuity to create a better, more connected future.</p>
                        <p className={`${theme.textMuted} mb-8 transition-colors duration-500`}>From artificial intelligence that learns and adapts, to robotic systems that extend human capability, our work is at the forefront of the technological revolution. We are relentless in our pursuit of knowledge and excellence.</p>
                        <button className={`${isDark ? 'bg-[#9DA7D0] hover:bg-[#8B93BC]' : 'bg-[#6B7AA1] hover:bg-[#5A6890]'} text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300`}>
                            Meet The Team
                        </button>
                    </div>
                    <div className="relative h-[500px]">
                        <img
                            className="w-full h-full object-cover rounded-2xl"
                            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/0a88a4f911-799b1f0296e790bb7e90.png"
                            alt="A diverse team of engineers and scientists collaborating around a futuristic holographic interface in a modern, dimly lit lab, style of a high-tech movie scene."
                        />
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className={`py-24 ${theme.bg} transition-colors duration-500`}>
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-4">Our Gallery of Innovation</h2>
                    <p className={`${theme.textMuted} mb-12 max-w-2xl mx-auto transition-colors duration-500`}>A visual journey through our labs, prototypes, and breakthrough moments.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {galleryImages.map((column, colIndex) => (
                            <div key={colIndex} className="grid gap-4">
                                {column.map((image, imgIndex) => (
                                    <div key={imgIndex} className="rounded-xl overflow-hidden">
                                        <img
                                            className="h-auto max-w-full hover:scale-105 transition-transform duration-300"
                                            src={image.src}
                                            alt={image.alt}
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className={`py-24 ${theme.bgAlt} transition-colors duration-500`}>
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Let's Build the Future Together</h2>
                        <p className={`${theme.textMuted} mb-8 transition-colors duration-500`}>Have a groundbreaking idea or a complex problem? We're here to listen and collaborate. Reach out to us and let's start the conversation.</p>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className={`${theme.bgCard} p-3 rounded-full mt-1 transition-colors duration-500`}>
                                    <MapPin className={`${isDark ? 'text-[#9DA7D0]' : 'text-[#6B7AA1]'} w-5 h-5 transition-colors duration-500`} />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Our Headquarters</h3>
                                    <p className={`${theme.textMuted} transition-colors duration-500`}>123 Innovation Drive, Tech City, 90210</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className={`${theme.bgCard} p-3 rounded-full mt-1 transition-colors duration-500`}>
                                    <Mail className={`${isDark ? 'text-[#9DA7D0]' : 'text-[#6B7AA1]'} w-5 h-5 transition-colors duration-500`} />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Email Us</h3>
                                    <p className={`${theme.textMuted} transition-colors duration-500`}>contact@ennovatingx.com</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className={`${theme.bgCard} p-3 rounded-full mt-1 transition-colors duration-500`}>
                                    <Phone className={`${isDark ? 'text-[#9DA7D0]' : 'text-[#6B7AA1]'} w-5 h-5 transition-colors duration-500`} />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Call Us</h3>
                                    <p className={`${theme.textMuted} transition-colors duration-500`}>(555) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${theme.bgCard} p-8 rounded-2xl transition-colors duration-500 shadow-lg`}>
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className={`block text-sm font-medium ${theme.textMuted} transition-colors duration-500`}>Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className={`mt-1 block w-full ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'} border-transparent rounded-md py-2 px-3 focus:ring-2 ${isDark ? 'focus:ring-[#9DA7D0]' : 'focus:ring-[#6B7AA1]'} transition-all duration-300`}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className={`block text-sm font-medium ${theme.textMuted} transition-colors duration-500`}>Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className={`mt-1 block w-full ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'} border-transparent rounded-md py-2 px-3 focus:ring-2 ${isDark ? 'focus:ring-[#9DA7D0]' : 'focus:ring-[#6B7AA1]'} transition-all duration-300`}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className={`block text-sm font-medium ${theme.textMuted} transition-colors duration-500`}>Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className={`mt-1 block w-full ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'} border-transparent rounded-md py-2 px-3 focus:ring-2 ${isDark ? 'focus:ring-[#9DA7D0]' : 'focus:ring-[#6B7AA1]'} transition-all duration-300`}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className={`w-full ${isDark ? 'bg-[#9DA7D0] hover:bg-[#8B93BC]' : 'bg-[#6B7AA1] hover:bg-[#5A6890]'} text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300`}
                            >
                                Send Message
                            </button>
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
                                        className="w-full h-full object-cover rounded-full"
                                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/927f7a78ca-f9cc40d661ef90fcf732.png"
                                        alt="futuristic circular tech logo, ENX initials, glowing blue lines on dark"
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
