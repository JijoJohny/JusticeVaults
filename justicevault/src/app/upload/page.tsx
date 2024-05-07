"use client";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { useState } from "react"
import axios from "axios"

export default function Upload() {
  
  const [filename, setFilename] = useState('');
  const [fileDescription, setFileDescription] = useState('');
  const [file, setFile] = useState(undefined); // Change initial state to undefined
  const [error, setError] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      // Retrieve the token from local storage
      const token = localStorage.getItem('token');

      const formData = new FormData();
      formData.append('filename', filename);
      formData.append('fileDescription', fileDescription);
      // Append the file to the form data if it exists
      if (file) {
        formData.append('file', file);
      }
      // Append the token to the form data
      if (token) {
        formData.append('token', token);
      }

      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
     
    
    } catch (error) {
      console.error('Upload failed:', error);
      setError('Upload failed. Please try again later.');
    }
    const handleFileChange = (e: { target: { files: any[]; }; }) => {
      const selectedFile = e.target.files[0];
      // Check if a file was selected
      if (selectedFile) {
        setFile(selectedFile);
      } else {
        // Handle case where no file was selected
        console.error('No file selected');
        setError('Please select a file');
        {/* File input */}
  };
  return (
    <>
    <NavBar btnval='Log Out'/>
    <div className="mx-auto my-10 max-w-md space-y-6 px-4 py-12 border rounded-lg shadow-lg">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Upload a File</h1>
        <p className="text-gray-500 dark:text-gray-400">Add a new file to your account.</p>
      </div>
      <form className="space-y-4"  onSubmit={handleSubmit}>
      <div className="space-y-2">
          <Label htmlFor="file-name">File ID</Label>
          <Input id="file-name" placeholder="Enter File ID" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="file-name">File Name</Label>
          <Input id="file-name" value={filename}
        onChange={(e) => setFilename(e.target.value)} placeholder="Enter a file name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="file-description">File Description</Label>
          <Textarea className="min-h-[100px]" id="file-description"   value={fileDescription}
        onChange={(e) => setFileDescription(e.target.value)}
 placeholder="Describe your file" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="file">File</Label>
          <Input id="file"  onChange={()=>handleFileChange} required type="file" />
        </div>
        <Button className="w-full " style={{backgroundColor: "#651fff",color:"white"}} type="submit">
          Upload
        </Button>
        
        {error && <p>{error}</p>}
      </form>
    </div>
    <Footer/>
    </>
  )
}
  }
}