import React from 'react';

const cardData = [
  {
    title: "Keyboard shortcuts.",
    description: "Work efficiently with instant access to common actions.",
  },
  {
    title: "Team Planner.",
    description: "Keep track of the bigger picture by viewing all individual tasks in one centralized team calendar.",
  },
  {
    title: "Time-blocking.",
    description: "Transform daily tasks into structured time blocks for focused productivity.",
  },
  {
    title: "Notifications.",
    description: "Keep up to date with any changes by receiving instant notifications.",
  },
];

const Productivity = () => {
  return (
    <section className="relative bg-[#F1F3F5] py-16 sm:py-20 md:py-24 lg:py-32 text-black overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <video
          className="absolute h-full w-full object-cover opacity-60"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://huly.io/videos/pages/home/stay-productive/waves.webm?updated=20240527164544" type="video/webm" />
          <source src="https://huly.io/videos/pages/home/stay-productive/waves.mp4?updated=20240527164544" type="video/mp4" />
        </video>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[0.9] tracking-tight text-black mb-6">
            Unmatched productivity
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#62646A]/90 max-w-2xl">
            Huly is a process, project, time, and knowledge management platform that provides amazing collaboration opportunities for developers and product teams alike.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {cardData.map(({ title, description }) => (
            <div
              key={title}
              className="relative flex flex-col justify-end min-h-[280px] sm:min-h-[320px] lg:min-h-[400px] overflow-hidden rounded-2xl lg:rounded-3xl bg-background-primary p-6 lg:p-8 shadow-lg"
            >
              {/* 
                NOTE: The background images for the cards were not provided in the assets.
                As per guidelines, a placeholder is used. The dark card background serves 
                as a clean placeholder, reflecting the dark UI theme of the original images.
              */}
              <div className="absolute inset-0 bg-gradient-to-t from-background-primary/95 via-background-primary/60 to-background-primary/30" />
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight text-white mb-3">
                  {title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg font-light leading-relaxed text-white/80 max-w-sm">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Productivity;