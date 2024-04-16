
import { useState } from "react";
import NavBar from "./NavBar"


export default function Header(props: { btnval: any,dival: any }) {

    let buttonValue = props.btnval;
    let divValue = props.dival;
  
    const astyle ={
        textDecoration: 'none',
        color:'black'
    }
    return(
        <>
    <NavBar btnval={buttonValue}/>
    <div className="header">
        <h2>File storage and sharing for remote <br /> clients on <span className="web3">Web3</span></h2>
        <p>JusticeVault is a online digital vault on decentralized cloud IPFS that allows you storage, share,<br/> collect files privately .</p>
        <a style={astyle}  href={divValue == 'Get Started' ?"/":"/search"}><div>{divValue}</div></a>
    </div>
    </>
    );
}