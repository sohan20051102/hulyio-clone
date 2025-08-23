import Image from 'next/image';

const SlackIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.875 11.25C4.875 10.2254 5.70038 9.375 6.75 9.375H9.375V6.75C9.375 5.72538 8.52463 4.875 7.5 4.875C6.47538 4.875 5.625 5.72538 5.625 6.75V11.25H4.875Z"
      fill="white"
    />
    <path
      d="M6.75 4.875C7.77462 4.875 8.625 5.72538 8.625 6.75V9.375H11.25C12.2746 9.375 13.125 8.52463 13.125 7.5C13.125 6.47538 12.2746 5.625 11.25 5.625H6.75Z"
      fill="white"
    />
    <path
      d="M13.125 6.75C13.125 7.77462 12.2746 8.625 11.25 8.625H8.625V11.25C8.625 12.2746 9.47538 13.125 10.5 13.125C11.5246 13.125 12.375 12.2746 12.375 11.25V6.75H13.125Z"
      fill="white"
    />
    <path
      d="M11.25 13.125C10.2254 13.125 9.375 12.2746 9.375 11.25V8.625H6.75C5.72538 8.625 4.875 9.47538 4.875 10.5C4.875 11.5246 5.72538 12.375 6.75 12.375H11.25Z"
      fill="white"
    />
  </svg>
);


export default function CtaSection() {
  return (
    <section className="relative bg-background py-[120px] overflow-hidden lg:py-[100px] md:pt-[337px] md:pb-28 sm:pt-[248px] sm:pb-20">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-auto w-[1920px] max-w-none -translate-x-1/2 -translate-y-1/2 mix-blend-lighten"
      >
        <source src="https://huly.io/videos/cta/clock.mp4?updated=20240531154316" type="video/mp4" />
        <source src="https://huly.io/videos/cta/clock.webm?updated=20240531154316" type="video/webm" />
      </video>

      <div className="container relative z-10 flex flex-col items-center">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/images/next-925863-cta-illustration.8178f665.jpg?"
          alt=""
          width={2000}
          height={923}
          className="absolute -bottom-[203px] z-0 h-auto w-[2000px] max-w-none mix-blend-lighten lg:-bottom-[180px] md:hidden"
        />
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/images/next-471612-cta-illustration-mobile.621dcd29.jpg?"
          alt=""
          width={960}
          height={492}
          className="absolute -top-3 z-0 hidden h-auto w-[960px] max-w-none mix-blend-lighten md:block sm:w-[732px]"
        />

        <h2 className="font-display text-[84px] font-semibold leading-none tracking-tight text-white lg:text-[68px] md:text-[54px] sm:text-[36px] text-center">
          Join the <br className="hidden md:block" />Movement
        </h2>

        <p className="mt-4 text-center text-[18px] leading-snug tracking-tight text-muted-foreground lg:text-base sm:mt-2.5 sm:max-w-[260px] sm:text-[15px]">
          Unlock the future of productivity with Huly.
          <br />
          Remember, this journey is just getting started.
        </p>

        <div className="mt-11 flex items-center gap-x-3.5 lg:mt-9 sm:mt-7">
          <div className="relative inline-flex items-center">
            <div className="border-button-light-blur absolute left-1/2 top-1/2 h-[calc(100%+9px)] w-[calc(100%+9px)] -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform">
              <div className="border-button-light relative h-full w-full rounded-full"></div>
            </div>
            <div className="border-button-light-blur absolute left-1/2 top-1/2 h-[calc(100%+9px)] w-[calc(100%+9px)] -translate-x-1/2 -translate-y-1/2 scale-x-[-1] transform rounded-full will-change-transform">
              <div className="border-button-light relative h-full w-full rounded-full"></div>
            </div>
            <a href="https://front.hc.engineering/workbench/platform" className="relative z-10 flex h-10 items-center justify-center space-x-1 overflow-hidden rounded-full border border-white/60 bg-[#d1d1d1] px-4 font-bold uppercase tracking-[-0.015em] text-[12px] transition-all duration-200">
              <div className="absolute -z-10 flex w-[204px] items-center justify-center">
                <div className="absolute top-1/2 h-[121px] w-[121px] -translate-y-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,#FFFFF5_3.5%,#FFAA81_26.5%,#FFDA9F_37.5%,rgba(255,170,129,0.50)_49%,rgba(210,106,58,0.00)_92.5%)]"></div>
                <div className="absolute top-1/2 h-[103px] w-[204px] -translate-y-1/2 bg-[radial-gradient(43.3%_44.23%_at_50%_49.51%,#FFFFF7_29%,#FFFACD_48.5%,#F4D2BF_60.71%,rgba(214,211,210,0.00)_100%)] blur-[5px]"></div>
              </div>
              <span className="text-[#5A250A]">See in Action</span>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/svgs/fde311dabe5488a415db9fcd19cf3001-24.svg?"
                alt="arrow icon"
                width={17}
                height={9}
                className="text-[#5A250A]"
              />
            </a>
          </div>

          <a href="https://huly.link/slack" className="flex h-10 items-center justify-center rounded-full bg-secondary px-4 text-xs font-bold uppercase tracking-snug text-white transition-all duration-200 hover:bg-muted sm:px-3.5">
            <SlackIcon className="mr-1.5" />
            Join our Slack
          </a>
        </div>
      </div>
    </section>
  );
}