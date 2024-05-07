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
  const [caseid, setCaseId] = useState('');
  const [casename, setCasename] = useState('');
  const [caseDescription, setCaseDescription] = useState('');
  
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('caseid', caseid);
      formData.append('casename', casename);
      formData.append('caseDescription', caseDescription);
   

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
  const astyle ={
    textDecoration: 'none',
    color:'black',
    maxWidth : 'fit-content'
}

  
  return (
    <>
      <NavBar btnval='Log Out'/>
      
      <div className="mx-auto my-1 max-w-md space-y-1 px-4 py-1 border rounded-lg shadow-lg">

        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Case Details</h1>
          <p className="text-gray-500 dark:text-gray-400"></p>
        </div>
        <form className="space-y-4" style={{height:"55vh"}}  onSubmit={handleSubmit}>
          <div className="space-y-4">
            <Label htmlFor="case-id">Case ID</Label>
            <Input id="case-id" value={caseid} onChange={(e) => setCaseId(e.target.value)} placeholder="Enter Case ID" required />
          </div>
          <div className="space-y-4">
            <Label htmlFor="case-name">Case Name</Label>
            <Input id="case-name" value={casename} onChange={(e) => setCasename(e.target.value)} placeholder="Enter a case name" required />
          </div>
          <div className="space-y-4">
            <Label htmlFor="case-description">Case Description</Label>
            <Textarea className="min-h-[100px]" id="case-description" value={caseDescription} onChange={(e) => setCaseDescription(e.target.value)} placeholder="Describe your case" required />
          </div>
        
          <Button className="w-full" style={{backgroundColor: "#651fff", color: "white"}} type="submit">
            Submit
          </Button>
          {error && <p>{error}</p>}
        </form>
        <a style={astyle} href="/upload" className="addfile"><Button/>
        <button className="buttona" type="button">
  <span className="button__text">New File</span>
  <span className="button__icon"><svg className="svg" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg></span>
</button></a>
      </div>
      <Footer/>
    </>
  );
}
