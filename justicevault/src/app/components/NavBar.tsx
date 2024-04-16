import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal,  } from 'react';
import Button from 'react-bootstrap/Button';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar(props: { btnval: any; }) {
  const astyle ={
    textDecoration: 'none',
    color:'black'

}
  const buttonValue = props.btnval;
  return (
    <nav>
            <div>
            <h2 className='logo'>JusticeVault</h2>
            <a style={astyle} href="/"><p>Home</p></a>
            <a style={astyle} href="/"><p>Features</p></a>
           </div>
            <div>
            <a style={astyle} href="/"><p>App</p></a>
            <a style={astyle} href="/">  <p>English</p></a>
                {/* <button>Sign In</button> */}
                <a href={buttonValue == 'Log Out' ?"/":"/success"}>
                <Button variant='outline-dark' >{buttonValue}</Button></a>
                {/* <Button variant='outline-dark'>Sign In</Button> */}
            </div>
        </nav>
    
  )
}
