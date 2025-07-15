
import Main from "./main/page";
import About from "./components/about";
import Mission from "./components/mission";
import OurProject from "./components/project";
import ContactUs from "./components/contact";

export default function Home() {
  return (
    <div>
      
      <Main/>
      <About/>
      <Mission/>
      <OurProject/>
      <ContactUs/>

    </div>
  );
}
