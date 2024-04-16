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
       <div className="addbox">
        <a style={astyle} href="/upload" className="addfile"><img src="../../../public/assets/plus.png" alt="" width={50} height={50}/>Add New Case File     </a> 
       </div>
       </form>
       <Footer/>
      </div>
      </>
    );
  }