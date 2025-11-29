import { ThemeProvider } from '../../contexts/ThemeContext';
import { useTheme } from '../../contexts/ThemeContext';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { useEffect } from 'react';

function FoundersNoteContent() {
    const { theme } = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={` ${theme.text} min-h-screen font-sans transition-colors duration-500`}>
            <Header />
            
            <main className="container mx-auto px-6 pt-32 pb-16">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-12 text-center">
                        <h1 className={`text-5xl md:text-6xl font-bold text-white mb-4`}>
                            Founder's Note
                        </h1>
                        <div className={`w-32 h-1 ${theme.accentBg} mx-auto`}></div>
                    </div>

                    {/* Content */}
                    <article className={`${theme.bgCard} rounded-2xl shadow-xl p-8 md:p-12 space-y-6`}>
                        <p className={`${theme.text} text-lg leading-relaxed`}>
                            The original vision Ebuka and I had as founders {new Date()?.getFullYear() - 2021} years ago, was - Ennovatingx will be a
                            'Super Research Institute,' primarily dedicated to exploring the science of magnetic
                            levitation.
                        </p>

                        <p className={`${theme.text} text-lg leading-relaxed`}>
                            We would come to find out about MAGLEV and Superconductors {new Date()?.getFullYear() - 2016} years ago, after trying to
                            build a toy car that we thought could be powered by magnets.
                        </p>

                        <p className={`${theme.text} text-lg`}>
                            Ennovatingx is not a conventional company, nor do we intend to become one. From the very
                            start, our singular mission has been clear: to discover room-temperature
                            superconductivity.
                        </p>

                        <p className={`${theme.text} text-lg leading-relaxed`}>
                            For five years, I have waited to take this bold step—sharing the vision that Ebuka and I
                            have nurtured, albeit anonymously, with a select few who we believe can help bring it to
                            life by providing the necessary resources to advance this initiative. Those who not only
                            support the progress of science and technology but also believe in Africa's potential to
                            independently drive groundbreaking research, contribute to global economic growth, and
                            secure its place in history as a leader in scientific innovation.
                        </p>

                        <p className={`${theme.text} text-lg leading-relaxed`}>
                            Now, I have in my mind with no doubt and with the rise of AI, my confidence has only
                            grown. This is indeed a bold leap. I, Ndubuisi JNR, believe that the collective effort
                            of humanity creates a dynamic shift in existence. Simply put, when we unite, we make
                            things happen.
                        </p>

                        <p className={`${theme.text} text-lg leading-relaxed`}>
                            Ebuka and I are seriously in the business of starting new things. Ennovatingx will also
                            include our X lab, which incubates new efforts. Little been said, Ebuka and I are
                            visionaries from Africa and we need you to believe in us. Press{' '}
                            <a 
                                href="mailto:contact@ennovatingx.com"
                                className={`${theme.accentBg} px-3 py-1 rounded-full text-white hover:opacity-90 transition-opacity duration-300 inline-block cursor-pointer font-medium`}
                            >
                                Y
                            </a>{' '}
                            to contact us.
                        </p>

                        {/* Signature */}
                        <div className={`border-t ${theme.border} pt-8 mt-8`}>
                            <img 
                                alt="Signature"
                                src="data:image/png;base64,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"
                                className={`w-40 ${theme.text}`}
                            />
                            <p className={`${theme.textMuted} mt-4 text-sm`}>
                                Ndubuisi JNR & Ebuka<br />
                                Co-Founders, EnnovatingX
                            </p>
                        </div>

                        {/* CTA */}
                        {/* <div className={`${theme.bgAlt} rounded-xl p-6 text-center mt-8`}>
                            <p className={`${theme.text} mb-4`}>
                                Want to be part of this journey?
                            </p>
                            <a 
                                href="mailto:contact@ennovatingx.com"
                                className={`inline-block ${theme.accentBg} text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300`}
                            >
                                Get in Touch
                            </a>
                        </div> */}
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default function FounderNote() {
    return (
        <ThemeProvider>
            <FoundersNoteContent />
        </ThemeProvider>
    );
}
