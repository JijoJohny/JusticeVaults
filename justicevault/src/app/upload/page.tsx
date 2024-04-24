
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function Upload() {
  return (
    <>
    <NavBar btnval='Log Out'/>
    <div className="mx-auto my-10 max-w-md space-y-6 px-4 py-12 border rounded-lg shadow-lg">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Upload a File</h1>
        <p className="text-gray-500 dark:text-gray-400">Add a new file to your account.</p>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="file-name">File Name</Label>
          <Input id="file-name" placeholder="Enter a file name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="file-description">File Description</Label>
          <Textarea className="min-h-[100px]" id="file-description" placeholder="Describe your file" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="file">File</Label>
          <Input id="file" required type="file" />
        </div>
        <Button className="w-full " style={{backgroundColor: "#651fff",color:"white"}} type="submit">
          Upload
        </Button>
      </form>
    </div>
    <Footer/>
    </>
  )
}

