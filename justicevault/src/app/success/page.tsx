'use client';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Features from "../components/Features";
export default function Success() {
  return (
    <>
      <div className="root">
        <Header  btnval="Log Out" dival ="Get Case Details"/>

        <Features/>
       
       <Footer/>
      </div>
    </>
  );
}
