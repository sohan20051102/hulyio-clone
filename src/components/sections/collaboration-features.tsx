import Image from 'next/image';

const CollaborationFeatures = () => {
  return (
    <div className="relative mt-20 md:mt-16 sm:mt-8">
      <div className="container relative z-10 flex flex-col gap-y-12 px-6 md:gap-y-10 sm:gap-y-8">
        {/* "Tap here to continue..." element */}
        <div className="relative flex items-center gap-x-3.5 before:h-px before:flex-1 before:bg-white/10 after:h-px after:flex-1 after:bg-white/10 md:before:hidden md:after:hidden">
          <div className="mx-auto flex shrink-0 cursor-default items-center gap-x-2.5 rounded-[12px] border border-transparent bg-white/5 py-1.5 pl-2.5 pr-4 text-sm font-medium tracking-tight text-white transition-colors duration-200 hover:bg-white/10 md:bg-neutral-800 xs:w-full">
            <span className="flex h-8 w-8 items-center justify-center">
              <span className="relative h-[22px] w-[22px]">
                <span className="absolute left-1/2 top-[1px] h-[calc(100%-1px)] w-px -translate-x-1/2 bg-white/10"></span>
                <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/70"></span>
              </span>
            </span>
            Tap here to continue...
          </div>
        </div>

        {/* Feature cards */}
        <div className="relative flex items-start gap-x-24 md:gap-x-12 sm:flex-col sm:gap-y-6">
          {/* Collaborate Card */}
          <div className="flex flex-1 items-start gap-x-5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-white/10">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/svgs/11129cb398cec0781980fa6071f63c4c-22.svg?"
                alt="Collaborate icon"
                width={20}
                height={20}
              />
            </span>
            <div className="flex flex-col">
              <h3 className="text-base font-medium leading-none tracking-tight text-white">Collaborate</h3>
              <p className="mt-2 text-[15px] font-light leading-snug tracking-tight text-text-secondary">
                Enhance teamwork with powerful real-time collaboration features.
              </p>
            </div>
          </div>

          {/* Version History Card */}
          <div className="flex flex-1 items-start gap-x-5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-white/10">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/svgs/3025df96db45e17e4ce4a52f5eb60533-23.svg?"
                alt="Version history icon"
                width={18}
                height={18}
              />
            </span>
            <div className="flex flex-col">
              <h3 className="text-base font-medium leading-none tracking-tight text-white">Version History</h3>
              <p className="mt-2 text-[15px] font-light leading-snug tracking-tight text-text-secondary">
                Track every edit effortlessly, and never lose a single change.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/images/next-035624-lines-bg.dffccec4.png?"
        alt="Decorative lines background"
        width={1200}
        height={239}
        className="pointer-events-none absolute -bottom-5 left-1/2 z-0 -translate-x-1/2 lg:-bottom-2.5 md:-bottom-12 md:w-[130%] sm:-bottom-1"
        sizes="100vw"
      />
    </div>
  );
};

export default CollaborationFeatures;