/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/o395GAbQKsN
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'
import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Component() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>Enter your username and wallet address below to login to your account</CardDescription>
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
        <Button className="w-full">Login</Button>
      </CardContent>
    </Card>
  )
}
