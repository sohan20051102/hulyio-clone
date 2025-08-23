import Image from "next/image";
import { Link2, Bold, Italic, Underline, Strikethrough, AtSign, Highlighter, ChevronDown } from 'lucide-react';

const KnowledgeSection = () => {
  return (
    <section className="relative bg-[#F9F9FB] pt-[143px] text-[#111318] lg:pt-32 md:pt-28 sm:pt-24 xs:bg-white">
      <div className="container relative z-10 flex flex-col items-center">
        <h2 className="relative text-center font-semibold text-[56px] leading-tight tracking-[-1.12px] text-[#111318] lg:text-[48px] md:text-[36px] sm:text-[32px]">
          Knowledge at <br /> Your Fingertips
          <div className="pointer-events-none absolute -right-[158px] -top-[10px] aspect-square w-[159px] lg:-right-[147px] lg:top-[-7px] lg:w-[133px] md:-right-[80px] md:top-[-10px] md:w-[94px] sm:-right-[46px] sm:-top-[26px] sm:w-[64px]">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/images/next-334092-blue-pin-image.bb230dcd.jpg?" 
              alt="Blue pin decoration" 
              width={159} 
              height={159} 
              className="absolute left-0 top-0 w-full" 
            />
          </div>
        </h2>
        <p className="mt-5 max-w-[582px] text-center text-lg font-light leading-snug tracking-tight text-[#111318]/60 lg:mt-4 lg:text-base md:mt-3.5 md:max-w-md sm:mt-3 sm:text-[15px] sm:leading-snug">
          Huly offers a wide range of features to create and manage your project documentation. Huly's suite of collaborative editing tools boosts team efficiency.
        </p>

        <div className="relative z-10 mt-14 max-w-[493px] lg:mt-12 md:mt-11 sm:mt-9">
          <div className="rounded-t-[14px] bg-[#1d1d22] p-2.5 pb-2 md:rounded-t-lg sm:p-2 sm:rounded-t-[10px]">
            <div className="relative flex h-[34px] items-center text-[#FFFFFF80] rounded-lg bg-[#1A1B23] px-2 sm:h-[30px] sm:rounded-md">
              <button className="flex items-center gap-x-1 rounded px-2 py-1 text-xs text-white hover:bg-white/10">
                <Link2 className="h-4 w-4" /> Link
              </button>
              <div className="mx-2 h-4/5 w-px bg-[#FFFFFF1A]"></div>
              <div className="flex items-center gap-x-2">
                <button className="p-1 text-white hover:bg-white/10 rounded"><Bold className="h-4 w-4" /></button>
                <button className="p-1 hover:bg-white/10 rounded"><Italic className="h-4 w-4" /></button>
                <button className="p-1 hover:bg-white/10 rounded"><Underline className="h-4 w-4" /></button>
                <button className="p-1 hover:bg-white/10 rounded"><Strikethrough className="h-4 w-4" /></button>
              </div>
              <div className="mx-2 h-4/5 w-px bg-[#FFFFFF1A]"></div>
              <button className="p-1 hover:bg-white/10 rounded"><AtSign className="h-4 w-4" /></button>
              <div className="mx-2 h-4/5 w-px bg-[#FFFFFF1A]"></div>
              <button className="p-1 hover:bg-white/10 rounded"><Highlighter className="h-4 w-4" /></button>
            </div>
          </div>
          <div className="relative w-full rounded-b-[14px] bg-[#1d1d22] px-9 pb-8 pt-7 md:rounded-b-lg md:px-7 md:pb-7 md:pt-6 sm:rounded-b-[10px] sm:px-4 sm:pb-6 sm:pt-4">
            <p className="max-w-[393px] text-sm leading-normal tracking-wide text-white sm:max-w-none sm:text-[13px] sm:leading-normal">
              Documents in <span className="rounded-sm bg-white/10 p-0.5 font-medium">Huly</span> can be used for sharing reference materials among team members, collaborating on plans and roadmaps, storing meeting notes and assigning action items.
            </p>
            <p className="mt-4 max-w-[393px] text-sm leading-normal tracking-wide text-white/50 opacity-90 sm:max-w-none sm:text-[13px] sm:leading-normal">
              Documents in Huly can be used for sharing reference materials among team members, collaborating on plans and roadmaps, storing meeting notes and assigning action items.
            </p>
            <p className="mt-4 max-w-[393px] text-sm leading-normal tracking-wide text-white/30 opacity-80 sm:max-w-none sm:text-[13px] sm:leading-normal">
              Documents in Huly can be used for sharing reference materials among team members, collaborating on plans and roadmaps, storing meeting notes and assigning action items.
            </p>
          </div>
        </div>
        
        <div className="relative mt-[-108px] aspect-[1.78018] w-[1196px] md:mt-[-82px] md:w-[90%] sm:mt-[-52px] sm:min-w-full">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/images/next-387936-billboard.a71a6e72.jpg?" 
            alt="Workspace billboard" 
            width={1196} 
            height={672} 
            className="absolute inset-0 z-10 h-full w-full object-contain"
          />
        </div>

        <div className="relative mt-[85px] grid grid-cols-[1fr_478px] gap-x-32 lg:mt-14 lg:grid-cols-[1fr_394px] lg:gap-x-20 md:mt-12 md:max-w-md md:grid-cols-1 md:gap-y-8 sm:mt-9">
          <div className="max-w-[478px] text-base font-light leading-snug -tracking-tighter text-[#111318]/60 lg:text-[15px] md:text-sm">
            With <span className="font-medium text-[#111318]">live</span> real-time collaboration, remote teams are able to work together to bring a unified vision to life on the page. Tagging users, linking to issues, and assigning action items are just a few of the <span className="font-medium text-[#111318]">advanced solutions</span>
            <span className="relative inline-block leading-[0]">
              {" "}available within the Huly document editor.
              <span className="pointer-events-none absolute -bottom-[74px] -right-[50px] aspect-square w-[110px] md:-bottom-[54px] md:-right-[26px] md:w-[72px] sm:-bottom-8 sm:-right-[45px] sm:w-[84px]">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/images/next-058382-orange-pin-image.5c9a9e65.jpg?" 
                  alt="Orange pin decoration" 
                  width={110} 
                  height={110} 
                  className="absolute w-full"
                />
              </span>
            </span>
          </div>
          <div className="relative border-l-2 border-black/10 pl-8 text-base font-light leading-snug -tracking-tighter text-[#111318]/60 lg:text-[15px] md:border-l-0 md:pl-0 md:text-sm before:absolute before:-left-[calc(1rem+1px)] before:top-2.5 before:hidden before:h-5 before:w-px before:bg-black/10 md:before:block">
            <span className="relative z-10">Documents can be enhanced with rich text formatting, images, attachments and code blocks. Use documents to organize team plans, create technical documentation and support your team's progress towards shared goals.</span>
            <div className="relative -mt-2 -ml-8 flex items-end md:ml-0">
              <div className="absolute bottom-full left-[2rem] w-px bg-black/10 h-[calc(100%+14px)] md:left-0 before:absolute before:left-[-6px] before:top-full before:h-px before:w-[8px] before:bg-black/10 after:absolute after:bottom-0 after:left-[-3px] after:h-[6px] after:w-[6px] after:rotate-45 after:border-b-2 after:border-r-2 after:border-black/50"></div>
              <span className="pl-[45px] pt-4 text-sm text-[#111318]/30 md:pl-3">Tap here to continue...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;