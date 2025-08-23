import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const features = [
    'Team Planner',
    'Project Management',
    'Virtual Office',
    'Chat',
    'Documents',
    'Inbox',
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1A1B23] pt-20 lg:pt-24">
      <div className="container relative z-30 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[0.9] tracking-tight bg-gradient-to-br from-white from-30% via-[#d5d8f6] via-80% to-[#fdf7fe] bg-clip-text text-transparent mb-6">
            Everything App for your teams
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-[#A0A0A0] max-w-2xl mx-auto lg:mx-0 mb-8 lg:mb-12">
            Huly, an open-source platform, serves as an all-in-one replacement of Linear, Jira, Slack, and Notion.
          </p>
          
          <div className="mb-16 lg:mb-20">
            <Link
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-12 lg:px-16 py-3 lg:py-4 text-xs sm:text-sm font-bold uppercase tracking-tight bg-gradient-to-r from-[#FF6B35] to-[#FF8F65] text-white rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
              href="https://front.hc.engineering/workbench/platform"
            >
              <span>See in Action</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Features List */}
          <div className="mb-8">
            <p className="text-sm lg:text-base text-white/60 mb-4">
              Everything you need for productive team work:
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 lg:gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center text-sm lg:text-base font-semibold text-white"
                >
                  {index > 0 && (
                    <div className="w-1 h-1 bg-white/30 rounded-full mr-2 lg:mr-4" />
                  )}
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full max-w-6xl mx-auto mt-8 lg:mt-12">
          <div className="relative aspect-[16/9] lg:aspect-[1.78] w-full">
            <Image
              alt="Huly application interface showing tracker and inbox"
              width={1200}
              height={675}
              src="https://huly.io/_next/static/media/hero-illustration.7100a376.jpg"
              className="w-full h-full object-cover rounded-lg lg:rounded-xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-lighten"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://huly.io/videos/pages/home/hero/hero.mp4?updated=20240607144404" type="video/mp4" />
          <source src="https://huly.io/videos/pages/home/hero/hero.webm?updated=20240607144404" type="video/webm" />
        </video>
      </div>

      {/* Background Gradients */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl" />
      </div>
    </section>
  );
};

export default Hero;