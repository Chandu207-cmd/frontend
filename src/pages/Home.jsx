import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import FeatureCard from "../components/feature/FeatureCard";
import JobList from "../components/jobs/JobList";
import Footer from "../components/footer/Footer";

import "../styles/hero.css";

export default function Home({ defaultType = "" }) {
  const route = useLocation();

  const [keyword, setKeyword] = useState("");
  const [type, setType] = useState(defaultType);
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (route.pathname === "/") {
      setType("");
      document.title = "Jobs | Code2Future";
    } else if (route.pathname === "/fulltime") {
      setType("FULL_TIME");
      document.title = "Full Time Jobs | Code2Future";
    } else if (route.pathname === "/parttime") {
      setType("PART_TIME");
      document.title = "Part Time Jobs | Code2Future";
    } else if (route.pathname === "/internships") {
      setType("INTERNSHIP");
      document.title = "Internships | Code2Future";
    }

    setKeyword("");
    setLocation("");
  }, [route.pathname]);

  return (
    <div>
      <Navbar />

      <div className="main">
        <section className="hero">
          <div className="hero-left">
            <h1>
              Welcome to
              <span className="logo-text">
                {" "}
                code<span>2</span>future
              </span>
              <br />
              Job Portal
            </h1>

            <p>Apply only to jobs that match your skills 🎯</p>

            <div className="search">
              <input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search jobs..."
              />

              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">All Types</option>
                <option value="FULL_TIME">FULL TIME</option>
                <option value="PART_TIME">PART TIME</option>
                <option value="INTERNSHIP">INTERNSHIP</option>
              </select>

              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">All Locations</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Vizag">Vizag</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Kochi">Kochi</option>
                <option value="Chennai">Chennai</option>
                <option value="Noida">Noida</option>
                <option value="Indore">Indore</option>
                <option value="Gurugram">Gurugram</option>
                <option value="Delhi">Delhi</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Delhi">Delhi</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
          </div>

          <div className="hero-right">
            <FeatureCard />
          </div>
        </section>

        <JobList keyword={keyword} type={type} location={location} />

        <Footer />
      </div>
    </div>
  );
}