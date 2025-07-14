import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="grid items-center gap-8 bg-muted-2 lg:grid-cols-2">
          <div className="flex flex-col items-center p-16 text-center lg:items-start lg:text-left">
            <p>Premium Audio Equipment</p>
            <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl">
              SoundGear Rentals
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              Professional audio equipment rentals for events, studios, and performances.
              From state-of-the-art speakers to professional microphones and DJ equipment,
              we've got your sound needs covered.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button>
                Browse Equipment
                <ArrowRight className="size-4" />
              </Button>
              <Button variant="outline">Request Quote</Button>
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/6325959/pexels-photo-6325959.jpeg"
            className="h-full w-full object-cover"
            alt="Professional audio equipment setup"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero };
