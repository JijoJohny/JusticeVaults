"use client"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { redirect } from 'next/navigation'
import { useState } from "react"
import axios from "axios"


export default function login() {
  const [username, setUsername] = useState('');
  const [walletAddress, setWallet] = useState('');
  const [error, setError] = useState('');
  const [login, setLogin] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:3001/auth/login', {
        username, walletAddress
      });
      // Assuming your backend returns a token upon successful login
      const token = response.data.token;
      console.log(token);
      localStorage.setItem('token', token);
      setLogin(true);
      // Retrieve the token from local storage
     // const storedToken = localStorage.getItem('token');
      // You can store the token in local storage or a cookie for future requests
    } catch (error) {
      console.error('Registration failed:', error);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('Registration failed. Please try again later.');
      }
    }
  };

  if(login){
    redirect("/success")
  }

  return (
    <div className="loginpg">
     <div className="loginborder">
    <Card className="mx-auto max-w-sm ">
      <CardHeader className="space-y-1 ">
        <CardTitle className="text-2xl font-bold black "style={{textAlign:"center"}}>LOGIN</CardTitle>
        <CardDescription>Enter your username and wallet address below to login to your account</CardDescription>
      </CardHeader>
      <form style={{height:"fit-content"}} onSubmit={handleSubmit}>
      <CardContent>
        <div className="space-y-2 ">
          <Label htmlFor="username" style={{color:"black" }}>Username</Label>
          <Input id="username" value={username}
        onChange={(e) => setUsername(e.target.value)} placeholder="john_doe" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="wallet" style={{color:"black" }}>Wallet</Label>
          <Input id="wallet" value={walletAddress}
        onChange={(e) => setWallet(e.target.value)} placeholder="0x0000000000000000" required />
        </div>
        <div className="space-y-2">
        <Button className="w-full " style={{marginTop:"10px" ,color:"white",backgroundColor:"#651fff"}}>Login</Button>

        <CardDescription style={{textAlign:"center"}}>Don't Have an account?<a href="/register">register</a></CardDescription>
        </div>
        {/* {error && <p>{error}</p>} */}
      </CardContent>
      </form>
    </Card>
    </div>
    </div>
  )
}

// export default function Login() {
//     return (
//       <>
//         <div>
          
//           <h2>Login</h2>
//           <input type="text" className="inner-shadow caseno" placeholder="User Name" />
//           <br />
//           <a href="/login">
//           <button>Signin</button>
//           </a>
//         </div>
//       </>
//     );
//   }