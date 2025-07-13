import { Aboutus } from "@/components/Aboutus";
import { BlogPost } from "@/components/BlogPost";
import { ContactUs } from "@/components/ContactUs";
import { Hero } from "@/components/Hero";


export default function Home() {
  return (
    <>
    <Hero/>
    <Aboutus/>
    <BlogPost />
    <ContactUs/>
    </>
    
  );
}
