import { Aboutus } from "@/components/Aboutus";
import { BlogPost } from "@/components/BlogPost";
import { ContactUs } from "@/components/ContactUs";
import { Hero } from "@/components/Hero";


export default function Home() {
  return (
    <>
    <Hero />
    <Aboutus 
      title="About SoundGear"
      description="SoundGear is a premium audio equipment rental service dedicated to providing top-quality sound solutions for events, productions, and professional studios."
      mainImage={{
        src: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg",
        alt: "Professional audio mixing console",
      }}
      secondaryImage={{
        src: "https://images.pexels.com/photos/4792733/pexels-photo-4792733.jpeg",
        alt: "Professional microphone setup",
      }}
      breakout={{
        src: "https://images.pexels.com/photos/3784566/pexels-photo-3784566.jpeg",
        alt: "Sound engineer working",
        title: "Premium Equipment Selection",
        description: "We offer the latest and most reliable audio equipment for rent, ensuring your event or production has crystal clear sound.",
        buttonText: "Browse Equipment",
        buttonUrl: "/plants",
      }}
      achievements={[
        { label: "Audio Equipment Rentals", value: "500+" },
        { label: "Events Supported", value: "1200+" },
        { label: "Happy Clients", value: "99%" },
        { label: "Years in Business", value: "15+" },
      ]}
      achievementsTitle="Our Success in Numbers"
      achievementsDescription="With years of experience in the audio equipment rental business, we've helped countless clients create unforgettable sound experiences."
    />
    <BlogPost 
      tagline="Audio Insights"
      heading="Sound Knowledge"
      description="Explore our collection of expert articles on audio equipment, sound engineering, and event production."
      buttonText="View all articles"
      buttonUrl="#"
      posts={[
        {
          id: "post-1",
          title: "Choosing the Right Microphones for Your Event",
          summary: "Learn how to select the perfect microphones for different types of events.",
          label: "Equipment Guide",
          author: "James Wilson",
          published: "15 May 2024",
          url: "#",
          image: "https://images.pexels.com/photos/2105038/pexels-photo-2105038.jpeg",
        },
        {
          id: "post-2",
          title: "Live Sound Mixing: Tips from the Professionals",
          summary: "Discover essential techniques used by professional sound engineers.",
          label: "Professional Tips",
          author: "Alicia Rodriguez",
          published: "3 May 2024",
          url: "#",
          image: "https://images.pexels.com/photos/3784566/pexels-photo-3784566.jpeg",
        },
        {
          id: "post-3",
          title: "Setting Up a DJ Booth: Equipment Essentials",
          summary: "Everything you need to know about renting and setting up professional DJ equipment.",
          label: "Setup Guide",
          author: "David Thompson",
          published: "28 Apr 2024",
          url: "#",
          image: "https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg",
        }
      ]}
    />
    <ContactUs
      title="Get in Touch"
      description="Contact our team for audio equipment rentals, technical support, or booking information."
      email="rentals@soundgear.com"
      phone="+1 (555) 123-4567"
    />
    </>
    
  );
}
