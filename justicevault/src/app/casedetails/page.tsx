'use client';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Cardf from "../components/Card";
export default function Casedetails() {
  return (
    <>
      <div className="root">
      <NavBar btnval="Log Out"/>

      <div className="grid md:grid-cols-3 items-start gap-4 w-full max-w-5xl mx-auto">
       <Cardf/>
       <Cardf/>
       <Cardf/>
       </div>
       <Footer/>
      </div>
    </>
  );
}
