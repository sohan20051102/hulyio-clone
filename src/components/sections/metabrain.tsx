import Image from "next/image";

const metaFeatures = [
  {
    id: 1,
    titleComponent: (
      <>
        <strong>Create tasks.</strong> Schedule your personal events and todos.
      </>
    ),
    gridClasses: "lg:col-span-2 lg:row-span-2",
    images: (
      <div className="relative w-full h-full">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/images/next-293964-tasks-notes.69743ddd.png?"
          alt="Screenshot of creating tasks and notes in Huly"
          width={508}
          height={260}
          className="absolute bottom-0 right-0 w-full max-w-[70%] h-auto transition-transform duration-500 group-hover:scale-105"
        />
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/images/next-911832-tasks-mobile.abb306cb.jpg?"
          alt="Screenshot of creating tasks on mobile"
          width={257}
          height={228}
          className="absolute bottom-0 right-0 sm:-right-8 lg:-right-16 w-full max-w-[40%] sm:max-w-[50%] h-auto z-10 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    ),
  },
  {
    id: 2,
    titleComponent: (
      <>
        <strong>Plan your work.</strong> Visualize your workday in your planner.
      </>
    ),
    gridClasses: "",
    images: (
      <div className="relative w-full h-full">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/images/next-884653-plan-work.26bcf442.jpg?"
          alt="Screenshot of planning work"
          width={234}
          height={280}
          className="absolute bottom-0 right-4 w-full max-w-[60%] h-auto transition-transform duration-500 group-hover:scale-105"
        />
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/images/next-172912-plan-work-mobile.d9e8f583.jpg?"
          alt="Screenshot of planning work on mobile"
          width={130}
          height={228}
          className="absolute -bottom-6 right-0 w-full max-w-[30%] h-auto z-10 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    ),
  },
  {
    id: 3,
    titleComponent: (
      <div className="flex items-start gap-x-2">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/svgs/9d5c77b6877e0fb053b9e6a6c6e031fe-19.svg?"
          alt="Take notes icon"
          width={14}
          height={14}
          className="mt-1 flex-shrink-0"
        />
        <span>
          <strong>Take notes.</strong>
          <br />
          Create documents to keep track of team resources
        </span>
      </div>
    ),
    gridClasses: "",
    images: (
      <div className="relative w-full h-full">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/images/next-031164-notes-mobile.2bf5fcba.jpg?"
          alt="Screenshot of taking notes on mobile"
          width={149}
          height={240}
          className="absolute bottom-0 right-4 w-full max-w-[50%] h-auto transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    ),
  },
  {
    id: 4,
    titleComponent: (
      <>
        <strong>Sync in real time.</strong> Connect with your team instantly to
        monitor progress and track updates.
      </>
    ),
    gridClasses: "",
    images: (
      <div className="relative w-full h-full">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/images/next-540604-teammates.c5a8e1bf.jpg?"
          alt="Screenshot of syncing with teammates"
          width={236}
          height={280}
          className="absolute bottom-0 right-4 w-full max-w-[60%] h-auto transition-transform duration-500 group-hover:scale-105"
        />
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/images/next-640880-teammates-mobile.8dc948be.jpg?"
          alt="Screenshot of syncing with teammates on mobile"
          width={130}
          height={228}
          className="absolute -bottom-6 right-0 w-full max-w-[30%] h-auto z-10 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    ),
  },
  {
    id: 5,
    titleComponent: (
      <div className="flex items-start gap-x-2">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/svgs/4471f334ae899aaa11c9921e0d3e65bc-20.svg?"
          alt="Chat with team icon"
          width={14}
          height={14}
          className="mt-1 flex-shrink-0"
        />
        <span>
          <strong>Chat with team.</strong> Send DM and create group chats.
        </span>
      </div>
    ),
    gridClasses: "",
    images: (
      <div className="relative w-full h-full">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/images/next-485127-collab-mobile.a7137137.jpg?"
          alt="Screenshot of chatting with team on mobile"
          width={257}
          height={228}
          className="absolute bottom-0 right-0 w-full max-w-[60%] h-auto transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    ),
  },
  {
    id: 6,
    titleComponent: (
      <div className="flex items-start gap-x-2">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/svgs/97e21ae98ab58474a251361eee0aa8c0-21.svg?"
          alt="Manage projects icon"
          width={14}
          height={14}
          className="mt-1 flex-shrink-0"
        />
        <span>
          <strong>Manage projects.</strong> Customize your workspace to fit the needs
          of your teams.
        </span>
      </div>
    ),
    gridClasses: "lg:col-span-2 lg:row-span-2",
    images: (
      <div className="relative w-full h-full">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/images/next-329285-pm.57044e5b.jpg?"
          alt="Screenshot of managing projects"
          width={508}
          height={260}
          className="absolute bottom-0 right-0 w-full max-w-[70%] h-auto transition-transform duration-500 group-hover:scale-105"
        />
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/images/next-195480-pm-mobile.39d0b377.jpg?"
          alt="Screenshot of managing projects on mobile"
          width={257}
          height={228}
          className="absolute bottom-0 right-0 sm:-right-8 lg:-right-16 w-full max-w-[40%] sm:max-w-[50%] h-auto z-10 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    ),
  },
];

const MetaBrainSection = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-[#0E0F12] py-16 sm:py-20 md:py-24 lg:py-32">
      <div
        className="pointer-events-none absolute -top-40 sm:-top-80 left-0 right-0 z-0 h-[800px] sm:h-[1400px] lg:h-[1783px] w-full mix-blend-lighten opacity-20 sm:opacity-30"
        style={{
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgb(18, 19, 48) 0%, rgba(18, 19, 48, 0) 100%)",
          maskImage: "radial-gradient(ellipse 40% 50% at 50% 0%, black, transparent 75%)",
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 lg:mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-white mb-6">
            Huly MetaBrain
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg lg:text-xl text-text-secondary/90">
            Connect every element of your workflow to build a dynamic knowledge
            base. Soon, Huly AI will turn it into a powerful asset — a second
            brain for your team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {metaFeatures.map((feature) => (
            <div
              key={feature.id}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl lg:rounded-3xl bg-background-primary p-4 sm:p-6 lg:p-8 text-white shadow-lg min-h-[280px] sm:min-h-[320px] lg:min-h-[400px] ${feature.gridClasses}`}
            >
              <h3 className="relative z-20 text-sm sm:text-base lg:text-lg font-light leading-snug text-white mb-4">
                {feature.titleComponent}
              </h3>
              <div className="relative flex-1 min-h-[160px] sm:min-h-[200px] lg:min-h-[280px]">
                {feature.images}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetaBrainSection;