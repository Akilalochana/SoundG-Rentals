import { Button } from "@/components/ui/button";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

// const defaultCompanies = [
//   {
//     src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
//     alt: "Arc",
//   },
//   {
//     src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
//     alt: "Descript",
//   },
//   {
//     src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
//     alt: "Mercury",
//   },
//   {
//     src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
//     alt: "Ramp",
//   },
//   {
//     src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
//     alt: "Retool",
//   },
//   {
//     src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
//     alt: "Watershed",
//   },
// ];

const defaultAchievements = [
  { label: "Audio Equipment Rentals", value: "500+" },
  { label: "Events Supported", value: "1200+" },
  { label: "Happy Clients", value: "99%" },
  { label: "Years in Business", value: "15+" },
];

const Aboutus = ({
  title = "About SoundGear",
  description = "SoundGear is a premium audio equipment rental service dedicated to providing top-quality sound solutions for events, productions, and professional studios.",
  mainImage = {
    src: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg",
    alt: "Professional audio mixing console",
  },
  secondaryImage = {
    src: "https://images.pexels.com/photos/4792733/pexels-photo-4792733.jpeg",
    alt: "Professional microphone setup",
  },
  breakout = {
    src: "https://images.pexels.com/photos/3784566/pexels-photo-3784566.jpeg",
    alt: "Sound engineer working",
    title: "Premium Equipment Selection",
    description:
      "We offer the latest and most reliable audio equipment for rent, ensuring your event or production has crystal clear sound.",
    buttonText: "Browse Equipment",
    buttonUrl: "/plants", // This will need to be updated once we rename the route
  },
  companiesTitle = "Trusted by industry professionals",
  companies = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
      alt: "Client 1",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
      alt: "Client 2",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
      alt: "Client 3",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
      alt: "Client 4",
    },
  ],
  achievementsTitle = "Our Success in Numbers",
  achievementsDescription = "With years of experience in the audio equipment rental business, we've helped countless clients create unforgettable sound experiences.",
  achievements = defaultAchievements,
}: About3Props = {}) => {
  return (
    <section className="py-32 px-4 md:px-8 lg:px-16">
      <div className="container">
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-5xl font-semibold">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="grid gap-7 lg:grid-cols-3">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto">
              <img
                src={breakout.src}
                alt={breakout.alt}
                className="mr-auto h-12"
              />
              <div>
                <p className="mb-2 text-lg font-semibold">{breakout.title}</p>
                <p className="text-muted-foreground">{breakout.description}</p>
              </div>
              <Button variant="outline" className="mr-auto" asChild>
                <a href={breakout.buttonUrl} target="_blank">
                  {breakout.buttonText}
                </a>
              </Button>
            </div>
            <img
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
            />
          </div>
        </div>
        <div className="py-5">
          {/* <p className="text-center">{companiesTitle} </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {companies.map((company, idx) => (
              <div className="flex items-center gap-3" key={company.src + idx}>
                <img
                  src={company.src}
                  alt={company.alt}
                  className="h-6 w-auto md:h-8"
                />
              </div>
            ))}
          </div> */}
        </div>
        <div className="relative overflow-hidden rounded-xl bg-muted p-10 md:p-16">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-4xl font-semibold">{achievementsTitle}</h2>
            <p className="max-w-xl text-muted-foreground">
              {achievementsDescription}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
            {achievements.map((item, idx) => (
              <div className="flex flex-col gap-4" key={item.label + idx}>
                <p>{item.label}</p>
                <span className="text-4xl font-semibold md:text-5xl">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] bg-[size:80px_80px] opacity-15 md:block"></div>
        </div>
      </div>
    </section>
  );
};

export { Aboutus };
