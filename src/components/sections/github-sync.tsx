import Image from 'next/image';

const features = [
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/svgs/2a9e454742efc41c8de5d3889bf55d34.svg?",
    title: "Two-way synchronization",
    description: "Integrate your task tracker with GitHub to sync changes instantly."
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/svgs/4d5dd04473e9f2ebc5c49291c1f73681-14.svg?",
    title: "Private tasks",
    description: "Integration and management of multiple data repositories effectively."
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/svgs/7338cddab3021d50f73a3d36c88df490-15.svg?",
    title: "Multiple repositories",
    description: "Organize multiple projects for more effective planning and collaboration."
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/svgs/c1edb00984cbfb46dd8eda516738f4f0-16.svg?",
    title: "Milestone migration",
    description: "Seamless migration of key project milestones between repositories."
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/svgs/352118264d839bffe60735ff4aeed26f-17.svg?",
    title: "Track progress",
    description: "Keep track of GitHub contributions and changes within your workspace."
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/svgs/12b7898bd7ddbbbbcacf68c0f47c7c51-18.svg?",
    title: "Advanced filtering",
    description: "Precise project data search with advanced filtering capabilities."
  }
];

const GithubSync = () => {
  return (
    <section className="bg-background-primary py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-white mb-6">
            Sync with GitHub. Both ways.
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-light leading-snug tracking-tight text-text-secondary max-w-2xl mx-auto">
            Manage your tasks efficiently with Huly's bidirectional GitHub synchronization. Use Huly as an advanced front-end for GitHub Issues and GitHub Projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4 lg:mb-6">
                <Image
                  src={feature.iconSrc}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-medium leading-tight tracking-tight text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg font-light leading-snug text-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GithubSync;