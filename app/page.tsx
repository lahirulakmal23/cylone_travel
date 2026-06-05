import Navbar from "./componets/Navbar";
import Hero from "./section/Hero";
import  Destinations from "./section/destination";  
import GallerySection from "./section/gallery";
import About from "./pages/about-us/page";
import Footer from "./componets/Footer";


export default function Home() {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <Destinations/>
        <GallerySection/>
        <About/>
        <Footer/>

    </main>
  );
}


    
 
