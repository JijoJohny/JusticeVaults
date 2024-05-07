"use client"; 
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { redirect } from 'next/navigation'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios"; 

export default function Register() {
  const [username, setUsername] = useState('');
  const [walletAddress, setWallet] = useState('');
  const [email, setEmail] = useState('');
  const [positionInCourt, setPositionInCourt] = useState('');
  const [error, setError] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:3001/auth/register', {
        username,
        walletAddress,
        email,
        positionInCourt
      });
      setRegistered(true);
      // const token = response.data.token;
      // localStorage.setItem('token', token);
      // Redirect user to another page or do something else after successful registration
    }catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please try again later.');
    } 
    
    // catch (error) {
    //   console.error('Registration failed:', error);
    //   if (error.response && error.response.data && error.response.data.error) {
    //     setError(error.response.data.error);
    //   } else {
    //     setError('Registration failed. Please try again later.');
    //   }
    // }
  };

  if (registered) {
    redirect('/login')
  }

  return (
    <div className="loginpg">
      <div className="loginborder">
        <Card className="mx-auto max-w-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold black">Register</CardTitle>
            <CardDescription>Fill in your details to create a new account </CardDescription>
          </CardHeader>
          <form style={{height:"fit-content"}} onSubmit={handleSubmit}>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="username" style={{color:"black" }}>Username</Label>
                <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} style={{marginBottom:"20px" }} placeholder="john_doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="walletAddress" style={{color:"black" }}>Wallet</Label>
                <Input id="walletAddress" value={walletAddress} onChange={(e) => setWallet(e.target.value)} style={{marginBottom:"20px" }} placeholder="0x0000000000000000" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" style={{color:"black" }}>Email</Label>
                <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@example.com" style={{color:"black",marginBottom:"20px" }} required type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="positionInCourt" className="black">Position in Court</Label>
                <Input id="positionInCourt" value={positionInCourt} onChange={(e) => setPositionInCourt(e.target.value)}  style={{marginBottom:"20px",color:"black" }} placeholder="Judge" required />
              </div>
              <Button type="submit" className="w-full" style={{marginBottom:"20px",marginTop:"20px" ,color:"white",backgroundColor:"#651fff"}}>Register</Button>
              {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
              <CardDescription style={{textAlign:"center"}}>Already Have an account?<a href="/login">Login</a></CardDescription>
            </CardContent>
          </form>
        </Card>
      </div>
    </div>
  );
}
