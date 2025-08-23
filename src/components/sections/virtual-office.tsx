"use client";

import Image from "next/image";
import { ScreenShare, MicOff, User } from "lucide-react";

const FeatureCard = ({
  iconUrl,
  title,
  description,
}: {
  iconUrl: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative mb-5 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E2E7FF] to-[#C4D0FF]">
      <Image src={iconUrl} alt={title} width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
    </div>
    <h3 className="text-lg sm:text-xl font-semibold text-[#080808] mb-2">{title}</h3>
    <p className="text-sm sm:text-base leading-snug text-[#4e4e52]">{description}</p>
  </div>
);

const VirtualOffice = () => {
  const features = [
    {
      iconUrl: "https://huly.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcustomize.03200dd0.png&w=96&q=100",
      title: "Customize workspace",
      description: "Create your own offices and meeting rooms to suit your team's needs.",
    },
    {
      iconUrl: "https://huly.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvideo.e4ea1f4b.png&w=96&q=100",
      title: "Audio and video calls",
      description: "Collaborate efficiently and seamlessly with high quality virtual conferencing.",
    },
    {
      iconUrl: "https://huly.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finvite.043fb941.png&w=96&q=100",
      title: "Invite guests",
      description: "Meet with guests without ever needing to leave your workspace.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F5F5F7] py-16 sm:py-20 md:py-24 lg:py-32 text-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 top-0 h-full w-full object-cover opacity-40 mix-blend-multiply"
        style={{ zIndex: 0 }}
      >
        <source
          src="https://huly.io/videos/pages/home/work-together/waves.webm?updated=20240524151254"
          type="video/webm"
        />
        <source
          src="https://huly.io/videos/pages/home/work-together/waves.mp4?updated=20240524151254"
          type="video/mp4"
        />
      </video>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-[#080808] mb-6">
            Work together. Like in the office.
          </h2>
          <p className="text-base sm:text-lg lg:text-xl leading-snug text-[#4e4e52] max-w-2xl mx-auto">
            Create customized virtual office spaces for any department or event with high quality
            audio and video conferencing.
          </p>
        </div>

        {/* Virtual Meeting Interface */}
        <div className="relative max-w-4xl mx-auto mb-16 lg:mb-24">
          <div className="relative bg-[#242529] rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
              <div className="flex items-center gap-3">
                <h3 className="text-base sm:text-lg font-semibold text-white">Onboarding Meeting</h3>
                <div className="flex items-center gap-1.5 rounded-full bg-[#393A3F] px-2.5 py-1">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/svgs/6cad5c6f35277cc12565a6826b9940bf-9.svg?"
                    alt="Participants icon"
                    width={12}
                    height={12}
                    className="opacity-60"
                  />
                  <span className="text-xs font-medium text-white/60">4 participants</span>
                </div>
              </div>
            </div>

            {/* Participants Grid */}
            <div className="relative h-48 sm:h-56 lg:h-64 mb-6 rounded-xl overflow-hidden bg-[#1A1B1F]">
              {/* Participant Avatars */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-8 lg:left-12 animate-wiggle">
                <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#96A0FF] shadow-lg shadow-blue-500/20">
                  <User className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <p className="mt-2 text-center text-xs sm:text-sm font-medium text-white/80 max-w-16 truncate">Craig Press</p>
              </div>
              
              <div className="absolute top-4 sm:top-6 right-4 sm:right-8 lg:right-12 animate-wiggle" style={{ animationDelay: "0.5s" }}>
                <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#FFAE66] shadow-lg shadow-orange-500/20">
                  <User className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <p className="mt-2 text-center text-xs sm:text-sm font-medium text-white/80 max-w-16 truncate">Makenna</p>
              </div>
              
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 animate-wiggle" style={{ animationDelay: "1s" }}>
                <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#96A0FF] shadow-lg shadow-blue-500/20">
                  <User className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <p className="mt-2 text-center text-xs sm:text-sm font-medium text-white/80 max-w-16 truncate">Allison</p>
              </div>
            </div>

            {/* Control Bar */}
            <div className="flex justify-center">
              <div className="flex items-center gap-2 rounded-full border border-white/5 bg-[#2f3136] p-2 shadow-xl">
                <button className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#4a4c52] transition-colors hover:bg-white/20">
                  <ScreenShare className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </button>
                <button className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#4a4c52] transition-colors hover:bg-white/20">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/svgs/93e08622f4a0bbef839d81e681f8bba7-10.svg?"
                    alt="Mic icon"
                    width={20}
                    height={20}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </button>
                <button className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#FF4559] transition-transform hover:scale-110">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/svgs/0e5b98ef7d38250f3aee6888407436e3-11.svg?"
                    alt="End call icon"
                    width={16}
                    height={16}
                    className="w-3 h-3 sm:w-4 sm:h-4"
                  />
                </button>
                <button className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#4a4c52] transition-colors hover:bg-white/20">
                  <MicOff className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </button>
                <button className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#4a4c52] transition-colors hover:bg-white/20">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/svgs/3ec2b3159fe89423fa1464d20ffea3b0-12.svg?"
                    alt="Expand icon"
                    width={20}
                    height={20}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl text-center mb-16">
          <p className="text-base sm:text-lg lg:text-xl leading-snug text-[#4e4e52] max-w-2xl mx-auto">
            Collaborating with remote teams is easy in your virtual office environment. Enjoy
            real-time communication within your workspace without additional software hassle.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              iconUrl={feature.iconUrl}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VirtualOffice;