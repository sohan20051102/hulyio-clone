import React from 'react';

const features = [
  "Team Planner",
  "Project Management",
  "Virtual Office",
  "Chat",
  "Documents",
  "Inbox"
];

export default function FeaturesList() {
    return (
        <div className="absolute bottom-[88px] z-30 overflow-hidden text-sm lg:bottom-14 md:bottom-12 sm:bottom-9 sm:left-5 sm:right-0 xs:left-0
            xs:before:absolute xs:before:bottom-0 xs:before:left-0 xs:before:z-10 xs:before:h-5 xs:before:w-[90px] xs:before:bg-gradient-to-r xs:before:from-background xs:before:to-transparent
            xs:after:absolute xs:after:bottom-0 xs:after:right-0 xs:after:z-10 xs:after:h-5 xs:after:w-[90px] xs:after:bg-gradient-to-l xs:after:from-background xs:after:to-transparent
        ">
            <p className="mb-3.5 font-light leading-none text-white/60 md:mb-3 md:text-[13px] sm:text-xs xs:pl-5">
                Everything you need for productive team work:
            </p>
            <div className="w-full xs:flex xs:overflow-hidden">
                <ul className="flex flex-shrink-0 font-semibold leading-tight text-white will-change-transform xs:animate-infinityScroll">
                    {features.map((feature, index) => (
                        <li 
                            key={`${feature}-${index}-1`}
                            className={`relative sm:shrink-0 md:text-[13px] sm:text-xs ${
                                index === 0 
                                ? 'xs:before:relative xs:before:mx-2 xs:before:inline-block xs:before:aspect-square xs:before:w-[3px] xs:before:rounded-full xs:before:bg-white/30 xs:before:align-middle' 
                                : 'before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle sm:before:mx-2'
                            }`}
                        >
                            {feature}
                        </li>
                    ))}
                </ul>
                <ul className="hidden flex-shrink-0 font-semibold leading-tight text-white will-change-transform xs:flex xs:animate-infinityScroll">
                     {features.map((feature, index) => (
                        <li 
                            key={`${feature}-${index}-2`}
                            className="relative sm:shrink-0 md:text-[13px] sm:text-xs before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle sm:before:mx-2"
                        >
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};