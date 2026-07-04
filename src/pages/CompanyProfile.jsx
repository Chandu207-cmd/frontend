import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

import { getAllJobs } from "../services/jobService";

import "../styles/companyProfile.css";

export default function CompanyProfile(){

    const { name } = useParams();

    const [company,setCompany]=useState(null);

    const [jobs,setJobs]=useState([]);

    useEffect(()=>{

        load();

    },[]);

    const load=async()=>{

        const companyRes=await getCompany(name);

        const jobsRes=await getAllJobs();

        setCompany(companyRes.data);

        setJobs(

            jobsRes.data.filter(

                job=>job.company===name

            )

        );

    }

    if(!company){

        return <h2 style={{textAlign:"center",marginTop:"100px"}}>Loading...</h2>

    }

    return(

        <>

        <Navbar/>

        <div className="company-profile">

            <div className="company-header">

                <img

                src={company.logo}

                alt={company.name}

                />

                <div>

                    <h1>{company.name}</h1>

                    <p>{company.industry}</p>

                </div>

            </div>

            <div className="company-grid">

                <div className="card">

                    <h3>About Company</h3>

                    <p>{company.description}</p>
                </div>

                <div className="card">

                    <h3>Website</h3>

                    <a

                    href={company.website}

                    target="_blank"

                    rel="noreferrer"

                    >

                    {company.website}

                    </a>

                </div>

                <div className="card">

                    <h3>Headquarters</h3>

                    <p>{company.headquarters}</p>

                </div>

                <div className="card">

                    <h3>Employees</h3>

                    <p>{company.employees}</p>

                </div>

                <div className="card">

                    <h3>Open Positions</h3>

                    <h2>{jobs.length}</h2>

                </div>

            </div>

            <h2 className="available">

                Available Jobs

            </h2>

            <div className="job-list">

                {

                    jobs.map(job=>

                    <div

                    key={job.id}

                    className="job-item"

                    >

                        <h3>{job.title}</h3>

                        <p>{job.location}</p>
                        <span>{job.salary}</span>

                    </div>

                    )

                }

            </div>

        </div>

        <Footer/>

        </>

    )

}