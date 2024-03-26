"use client"
import DigitalLibrary from "./components/DigitalLibrary";
import Footer from "./components/Footer";
import Mainblog from "./components/Mainblog";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-white text-black h-screen w-full">
      <Navbar />
      <Mainblog/>
      <DigitalLibrary/>
      <Footer/>
    </main>
  );
}
