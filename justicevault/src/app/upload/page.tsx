'use client';
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Upload() {
  return (
    <>
      <div className="root">
      <NavBar btnval="Log Out"/>



    <Card className="w-full max-w-lg bg-white dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-xl dark:text-white">Upload your file</CardTitle>
        <CardDescription className="dark:text-gray-400">Any file up to 25MB</CardDescription>
      </CardHeader>
      <CardContent className="flex items-start gap-4 pt-4">
        <div className="grid gap-2.5 w-12 h-12 rounded-lg overflow-hidden">
          <img
            alt="Avatar"
            className="rounded w-full h-full object-cover"
            height={48}
            src="/placeholder.svg"
            style={{
              aspectRatio: "48/48",
              objectFit: "cover",
            }}
            width={48}
          />
        </div>
        <div className="grid gap-1.5">
          <div className="flex items-center gap-2">
            <UploadIcon className="w-6 h-6 text-[#651fff]" />
            <Button className="bg-[#651fff] text-white" size="sm">
              Upload new picture
            </Button>
            <Button className="bg-[#651fff] text-[#651fff]" size="sm" variant="outline">
              Remove
            </Button>
          </div>
          <div className="flex items-center gap-1.5 text-xs dark:text-gray-400">
            <CircleIcon className="w-4 h-4 flex-shrink-0" />
            <span>JPEG, PNG, GIF. Max file size 10MB.</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="bg-[#651fff] text-white">Save</Button>
      </CardFooter>
    </Card>
  





       
       <Footer/>
      </div>
    </>
  );
  function CircleIcon(props :any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
      </svg>
    )
  }
  
  
  function UploadIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" x2="12" y1="3" y2="15" />
      </svg>
    )
}
}