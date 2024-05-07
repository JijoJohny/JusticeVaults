"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { useState } from "react"
import axios from "axios"

export default function Upload() {
  const [casename, setCasename] = useState('');
  const [caseDescription, setCaseDescription] = useState('');
  
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('casename', casename);
      formData.append('caseDescription', caseDescription);
      if (case) {
        formData.append('case', case);
      }

      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Handle response
    } catch (error) {
      console.error('Upload failed:', error);
      setError('Upload failed. Please try again later.');
    }
  };

  const handleCaseChange = (e) => {
    const selectedCase = e.target.cases[0];
    if (selectedCase) {
      setCase(selectedCase);
    } else {
      console.error('No case selected');
      setError('Please select a case');
    }
  };

  return (
    <>
      <NavBar btnval='Log Out'/>
      
      <div className="mx-auto my-10 max-w-md space-y-6 px-4 py-12 border rounded-lg shadow-lg">

        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Upload a Case</h1>
          <p className="text-gray-500 dark:text-gray-400">Add a new case to your account.</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="case-id">Case ID</Label>
            <Input id="case-id" placeholder="Enter Case ID" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="case-name">Case Name</Label>
            <Input id="case-name" value={casename} onChange={(e) => setCasename(e.target.value)} placeholder="Enter a case name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="case-description">Case Description</Label>
            <Textarea className="min-h-[100px]" id="case-description" value={caseDescription} onChange={(e) => setCaseDescription(e.target.value)} placeholder="Describe your case" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="case">Case</Label>
            <Input id="case" onChange={handleCaseChange} required type="case" />
          </div>
          <Button className="w-full" style={{backgroundColor: "#651fff", color: "white"}} type="submit">
            Upload
          </Button>
          {error && <p>{error}</p>}
        </form>
      </div>
      <Footer/>
    </>
  );
}
