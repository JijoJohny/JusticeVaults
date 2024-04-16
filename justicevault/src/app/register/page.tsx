
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fe9GVwjS4US
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function register() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold black">Register</CardTitle>
        <CardDescription>Fill in your details to create a new account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="john_doe" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="wallet">Wallet</Label>
          <Input id="wallet" placeholder="0x0000000000000000" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="emailid">Email</Label>
          <Input id="emailid" placeholder="example@example.com" required type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="position" className="black">Position in Court</Label>
          <Input id="position" style={{marginBottom:"20px" }} placeholder="Judge" required />
        </div>
        <Button className="w-full" style={{marginTop:"20px" ,color:"white",backgroundColor:"black"}}>Register</Button>
      </CardContent>
    </Card>
  )
}


