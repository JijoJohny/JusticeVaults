"use client";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { redirect } from 'next/navigation'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { useState } from "react"
import axios from "axios"

export default function Upload() {
  const [fileName, setFileName] = useState('');
  const [description, setFileDescription] = useState('');
  const [file, setFile] = useState(undefined);
  const [fileId, setFileId] = useState('');
  const [caseId, setCaseId] = useState('');
  const [error, setError] = useState('');
  const [registered, setRegistered] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');

      const formData = new FormData();
      formData.append('id', fileId);
      formData.append('fileName', fileName);
      formData.append('description', description);
      formData.append('caseId', caseId);
      if (file) {
        formData.append('file', file);
      }

      const response = await axios.post('http://127.0.0.1:3001/file/upload', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error('Upload failed:', error);
      if (error.response && error.response.status === 401 && error.response.data === 'Unauthorized: Invalid token') {
        // Redirect to the login page if the error is a TokenExpiredError
        setRegistered(false)
      } else {
        setError(error.response?.data?.error || 'Upload failed. Please try again later.');
      }
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    } else {
      console.error('No file selected');
      setError('Please select a file');
    }
  };

  if (!registered) {
    redirect('/login')
  }

  return (
    <>
    <NavBar btnval='Log Out'/>
    <div className="mx-auto my-10 max-w-md space-y-6 px-4 py-12 border rounded-lg shadow-lg">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Upload a File</h1>
        <p className="text-gray-500 dark:text-gray-400">Add a new file to your account.</p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
          <Label htmlFor="fileId">File id</Label>
          <Input id="fileId" value={fileId} onChange={(e) => setFileId(e.target.value)}placeholder="Enter a file ID" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="file-name">File Name</Label>
          <Input id="file-name" value={fileName} onChange={(e) => setFileName(e.target.value)}placeholder="Enter a file name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="caseId">Case ID</Label>
          <Input id="caseId" value={caseId} onChange={(e) => setCaseId(e.target.value)} placeholder="Enter a case ID" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">File Description</Label>
          <Textarea className="min-h-[100px]" id="description" value={description} onChange={(e) => setFileDescription(e.target.value)} placeholder="Describe your file" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="file">File</Label>
          <Input id="file" onChange={handleFileChange} required type="file" />
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
