import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
}

interface Blog7Props {
  tagline: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  posts: Post[];
}

const BlogPost = ({
  tagline = "Audio Insights",
  heading = "Sound Knowledge",
  description = "Explore our collection of expert articles on audio equipment, sound engineering, and event production. Stay updated with the latest trends and technologies in professional audio.",
  buttonText = "View all articles",
  buttonUrl = "#",
  posts = [
    {
      id: "post-1",
      title: "Choosing the Right Microphones for Your Event",
      summary:
        "Learn how to select the perfect microphones for different types of events. We cover wireless systems, lavalier mics, dynamic vs. condenser options, and placement techniques for optimal sound quality.",
      label: "Equipment Guide",
      author: "James Wilson",
      published: "15 May 2024",
      url: "#",
      image: "https://media.istockphoto.com/id/1125877063/photo/mixed-race-woman-singing-and-playing-guitar.jpg?s=612x612&w=0&k=20&c=23unW_Ugni5lUvAY2nccGkxtWQ5FtkiWgRyyN6wZMFs=",
    },
    {
      id: "post-2",
      title: "Live Sound Mixing: Tips from the Professionals",
      summary:
        "Discover essential techniques used by professional sound engineers to achieve crystal-clear audio at live events. From EQ settings to feedback prevention and room acoustics considerations.",
      label: "Professional Tips",
      author: "Alicia Rodriguez",
      published: "3 May 2024",
      url: "#",
      image: "https://images.pexels.com/photos/3784566/pexels-photo-3784566.jpeg",
    },
    {
      id: "post-3",
      title: "Setting Up a DJ Booth: Equipment Essentials",
      summary:
        "Everything you need to know about renting and setting up professional DJ equipment for your event. From turntables and controllers to speakers and lighting systems for creating the perfect atmosphere.",
      label: "Setup Guide",
      author: "David Thompson",
      published: "28 Apr 2024",
      url: "#",
      image: "https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg",
    },
  ],
}: Blog7Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6">
            {tagline}
          </Badge>
          <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>
          <Button variant="link" className="w-full sm:w-auto" asChild>
            <a href={buttonUrl} target="_blank">
              {buttonText}
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="grid grid-rows-[auto_auto_1fr_auto] pt-0"
            >
              <div className="aspect-16/9 w-full">
                <a
                  href={post.url}
                  target="_blank"
                  className="transition-opacity duration-200 fade-in hover:opacity-70"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center"
                  />
                </a>
              </div>
              <CardHeader>
                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                  <a href={post.url} target="_blank">
                    {post.title}
                  </a>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.summary}</p>
              </CardContent>
              <CardFooter>
                <a
                  href={post.url}
                  target="_blank"
                  className="flex items-center text-foreground hover:underline"
                >
                  Read more
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { BlogPost};
