import {
    useEffect,
    useState
} from "react";

import {
    useNavigate
} from "react-router-dom";

import {
    FaBuilding
} from "react-icons/fa";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

import {
    getAllJobs
} from "../services/jobService";

import "../styles/company.css";

export default function Companies() {

    const navigate = useNavigate();

    const [companies, setCompanies] = useState([]);

    const [page, setPage] = useState(1);

    const companiesPerPage = 12;

    useEffect(() => {

        document.title = "Companies | Code2Future";

        loadCompanies();

    }, []);

    const loadCompanies = async () => {

        try {

            const res = await getAllJobs();

            const uniqueCompanies = [];

            const added = new Set();

            res.data.forEach(job => {

                const companyName = job.company?.trim();

                if (
                    companyName &&
                    !added.has(companyName.toLowerCase())
                ) {

                    added.add(companyName.toLowerCase());

                    uniqueCompanies.push({

                        name: companyName,

                        industry: job.type.replace("_", " "),

                        jobs: res.data.filter(

                            j =>

                                j.company &&
                                j.company.trim().toLowerCase() ===
                                companyName.toLowerCase()

                        ).length

                    });

                }

            });

            setCompanies(uniqueCompanies);

        } catch (e) {

            console.log(e);

        }

    };

    const last = page * companiesPerPage;

    const first = last - companiesPerPage;

    const currentCompanies = companies.slice(first, last);

    const totalPages = Math.ceil(

        companies.length / companiesPerPage

    );

    return (

        <>

            <Navbar />

            <div className="company-page">

                <h1>Hiring Companies</h1>

                <p className="company-subtitle">

                    Explore companies hiring on Code2Future

                </p>

                <div className="company-grid">

                    {

                        currentCompanies.map((company, index) => (

                            <div

                                key={index}

                                className="company-card"

                                onClick={() =>
                                    navigate(
                                        `/company/${encodeURIComponent(company.name)}`
                                    )
                                }

                            >

                                <div className="company-icon">

                                    <FaBuilding />

                                </div>

                                <h2>

                                    {company.name}

                                </h2>

                                <p className="industry">

                                    {company.industry}

                                </p>

                                <p className="jobs-count">

                                    {company.jobs} Open Job{company.jobs > 1 ? "s" : ""}

                                </p>

                                <button className="view-btn">

                                    View Jobs

                                </button>

                            </div>

                        ))

                    }

                </div>

                {

                    totalPages > 1 &&

                    <div className="pagination">

                        <button

                            disabled={page === 1}

                            onClick={() =>

                                setPage(page - 1)

                            }

                        >

                            Previous

                        </button>

                        {

                            Array.from({

                                length: totalPages

                            }).map((_, i) => (

                                <button

                                    key={i}

                                    className={

                                        page === i + 1 ?

                                            "active-page"

                                            :

                                            ""

                                    }

                                    onClick={() =>

                                        setPage(i + 1)

                                    }

                                >

                                    {i + 1}

                                </button>

                            ))

                        }

                        <button

                            disabled={page === totalPages}

                            onClick={() =>

                                setPage(page + 1)

                            }

                        >

                            Next

                        </button>

                    </div>

                }

            </div>

            <Footer />

        </>

    );

}