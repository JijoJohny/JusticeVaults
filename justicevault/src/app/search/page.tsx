import { Button } from "@/components/ui/button";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
export default function Search() {
  const astyle ={
    textDecoration: 'none',
    color:'black',
    maxWidth : 'fit-content'
}
    return (
      <>
        <div className="root">
        <NavBar btnval='Log Out'/>
        <form>
        <div className="search">
         
            <input type="text" className="inner-shadow caseno" placeholder="Enter Case no" />
             <input type="date" className="date" placeholder="Enter Year"/>
      </div> 
      <div className="subbox">     
      
       <a style={astyle} href="/casedetails" className="submit"><div>Submit</div></a> 
       
       
       </div >
       
        
       <a style={astyle} href="/caseform" className="addfile"><Button/>
        <button className="buttona" type="button">
  <span className="button__text">Case File</span>
  <span className="button__icon"><svg className="svg" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg></span>
</button></a>
       </form>
       <Footer/>
      </div>
      </>
    );
  }