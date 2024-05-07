'use client';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Cardf from "../components/Card";
export default function Casedetails() {
  const astyle ={
    textDecoration: 'none',
    color:'black',
    maxWidth : 'fit-content'
}
  return (
    <>
      <div className="root">
      <NavBar btnval="Log Out"/>

      <div className="grid md:grid-cols-3 items-start gap-4 w-full max-w-5xl mx-auto">
       <Cardf/>
       <Cardf/>
       <Cardf/>
       <a style={astyle} href="/upload" className="addfile">
        <button className="buttona" type="button">
  <span className="button__text">New File</span>
  <span className="button__icon"><svg className="svg" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg></span>
</button></a>
       </div>
       <Footer/>
      </div>
    </>
  );
}
