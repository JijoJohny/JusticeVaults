"use client"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { redirect } from 'next/navigation'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";

export default function Upload() {
  const [caseId, setCaseId] = useState('');
  const [name, setCasename] = useState('');
  const [description, setCaseDescription] = useState('');
  const [error, setError] = useState('');
  const [registered, setRegistered] = useState(true);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
//       const formData = new FormData();
//       formData.append('caseId', caseId);
//       formData.append('name', name);
//       formData.append('description', description);
//       console.log(caseId);
      const token = localStorage.getItem('token');
//
//       for (var pair of formData.entries()) {
//         console.log(pair[0]+ ', ' + pair[1]);
//       }

      const response = await axios.post('http://127.0.0.1:3001/case/add', {
          caseId , name ,description
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      setSuccess(true);
    } catch (error) {
      console.error('Case add failed:', error);
      if (error.response && error.response.status === 401 && error.response.data === 'Unauthorized: Invalid token') {
        // Redirect to the login page if the error is a TokenExpiredError
        setRegistered(false);
      } else {
        setError(error.response?.data?.error || 'Add failed. Please try again later.');
      }
    }
  };

  if (!registered) {
    redirect('/login'); // Redirect to the login page
  }
  if (success) {
    redirect('/search'); // Redirect to the login page
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
            <Label htmlFor="caseId">Case ID</Label>
            <Input id="case-id" value={caseId} onChange={(e) => setCaseId(e.target.value)} placeholder="Enter Case ID" required />
          </div>
          <div className="space-y-4">
            <Label htmlFor="name">Case Name</Label>
            <Input id="case-name" value={name} onChange={(e) => setCasename(e.target.value)} placeholder="Enter a case name" required />
          </div>
          <div className="space-y-4">
            <Label htmlFor="description">Case Description</Label>
            <Textarea className="min-h-[100px]" id="case-description" value={description} onChange={(e) => setCaseDescription(e.target.value)} placeholder="Describe your case" required />
          </div>

          <Button className="w-full" style={{backgroundColor: "#651fff", color: "white"}} type="submit">
            Submit
          </Button>
          {error && <p>{error}</p>}
        </form>
        <a style={{textDecoration: 'none', color:'black', maxWidth : 'fit-content' ,padding:"10px"}} href="/upload" className="addfile">
          <Button/>

          <button  className="buttona" type="button">
            <span className="button__text">New File</span>
            <span className="button__icon">
              <svg className="svg" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <line x1="12" x2="12" y1="5" y2="19"></line>
                <line x1="5" x2="19" y1="12" y2="12"></line>
              </svg>
            </span>
          </button>
        </a>
      </div>
      <Footer/>
    </>
  );
}
