import Image from 'next/image';

interface Feature {
  icon: string;
  alt: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/images/next-066038-customize.03200dd0.png?',
    alt: 'Customize workspace',
    title: 'Customize workspace',
    description: "Create your own offices and meeting rooms to suit your team's needs.",
  },
  {
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/images/next-241642-video.e4ea1f4b.png?',
    alt: 'Audio and video calls',
    title: 'Audio and video calls',
    description: 'Collaborate efficiently and seamlessly with high quality virtual conferencing.',
  },
  {
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/images/next-356341-invite.043fb941.png?',
    alt: 'Invite guests',
    title: 'Invite guests',
    description: 'Meet with guests without ever needing to leave your workspace.',
  },
];

const OfficeFeatures = () => {
  return (
    <ul className="relative z-20 mx-auto mt-20 grid max-w-[993px] grid-cols-3 gap-x-8 text-white lg:mt-16 lg:max-w-[800px] md:mt-12 md:gap-x-6 sm:mt-10 sm:max-w-none sm:grid-cols-1 sm:gap-x-0 sm:gap-y-10">
      {features.map((feature, index) => (
        <li key={index} className="group/feature flex flex-col items-center text-center">
          <Image
            src={feature.icon}
            alt={feature.alt}
            width={48}
            height={48}
            className="transition-transform duration-300 will-change-transform group-hover/feature:scale-110"
          />
          <h3 className="mt-4 text-base font-semibold leading-tight tracking-[-0.01em] lg:text-[15px]">
            {feature.title}
          </h3>
          <p className="mt-1 max-w-[270px] text-[15px] font-light leading-snug text-text-secondary lg:text-sm">
            {feature.description}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default OfficeFeatures;