

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/o395GAbQKsN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function login() {
  return (
    <div className="loginpg">
     <div className="loginborder"> 
    <Card className="mx-auto max-w-sm ">
      <CardHeader className="space-y-1 ">
        <CardTitle className="text-2xl font-bold black "style={{textAlign:"center"}}>LOGIN</CardTitle>
        <CardDescription>Enter your username and wallet address below to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 ">
          <Label htmlFor="username" style={{color:"black" }}>Username</Label>
          <Input id="username" placeholder="john_doe" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="wallet" style={{color:"black" }}>Wallet</Label>
          <Input id="wallet" placeholder="0x0000000000000000" required />
        </div>
        <div className="space-y-2">
        <Button className="w-full " style={{marginTop:"10px" ,color:"white",backgroundColor:"black"}}>Login</Button>
        </div>
      </CardContent>
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