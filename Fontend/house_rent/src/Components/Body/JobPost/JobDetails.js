import React, { Component } from 'react';
import axios from 'axios';
// import ApplyJob from './ApplyJob'; // Import ApplyJob component
import { Link } from 'react-router-dom/cjs/react-router-dom';

class JobDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            job: {},
            loading: true,
        };
    }

    componentDidMount() {
        const jobId = this.props.match.params.id;
        console.log(jobId)
        this.fetchJobDetails(jobId);
    }

    fetchJobDetails = async (jobId) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/apiv1/user/JobOpening/${jobId}/`);
            console.log('Job Details API Response:', response.data);
            this.setState({
                job: response.data,
                loading: false,
            });
        } catch (error) {
            console.error('Error fetching job details:', error);
            this.setState({
                loading: false,
            });
        }
    };

    render() {
        const { job, loading } = this.state;
        return (
            <div>
                {loading ? (
                    <p>Loading job details...</p>
                ) : (
                    <div>
                        <div style={{ background: "#f5f5f5", paddingTop: '12%', textAlign: "center", paddingBottom: "5%" }}>
                            <h3 style={{ fontSize: "40px", fontWeight: "600" }}>{job.JobTitle}</h3>
                            <p style={{ fontSize: "20px", fontWeight: "400", paddingTop: "2%" }}>Deadline: {job.Deadline}</p>
                            <Link to={`/apply_for_job/${job.JobTitle}`} style={{ marginTop: "10%" }}>
                                <button type="button" className="joblistbutton" JobPosition={job.JobTitle}> Apply</button>
                            </Link>
                        </div>
                        <div className='container'>
                            <div style={{ marginTop: "5%" }}>
                                <p style={{ fontSize: "25px", fontWeight: "600" }}>About Job:</p>
                                <p style={{ fontSize: "17px", color: "#4c4a4a" }}>{job.AboutJob}</p>
                            </div>
                            <div style={{ marginTop: "5%" }}>
                                <p style={{ fontSize: "25px", fontWeight: "600" }}>Job Requirements:</p>
                                <p style={{ fontSize: "17px", color: "#4c4a4a" }}>{job.JobRequirements}</p>
                            </div>
                            <div style={{ marginTop: "5%" }}>
                                <p style={{ fontSize: "25px", fontWeight: "600" }}>Experience:</p>
                                <p style={{ fontSize: "17px", color: "#4c4a4a" }}>{job.Experience}</p>
                            </div>
                            <div style={{ marginTop: "5%" }}>
                                <p style={{ fontSize: "25px", fontWeight: "600" }}>Education:</p>
                                <p style={{ fontSize: "17px", color: "#4c4a4a" }}>{job.Education}</p>
                            </div>
                            <div style={{ marginTop: "5%" }}>
                                <p style={{ fontSize: "25px", fontWeight: "600" }}>Job Location:</p>
                                <p style={{ fontSize: "17px", color: "#4c4a4a" }}>{job.JobLocation}</p>
                            </div>
                            <div style={{ marginTop: "5%" }}>
                                <h3>Additional Requirements:</h3>
                                <div style={{ marginTop: "5%" }}>
                                    <p style={{ fontSize: "25px", fontWeight: "600" }}>Benefits:</p>
                                    <p style={{ fontSize: "17px", color: "#4c4a4a" }}>{job.Benefits}</p>
                                </div>

                            </div>
                            <div style={{ marginTop: "5%" }}>
                                <p style={{ fontSize: "17px", fontWeight: "500", color: "#4c4a4a" }}>NOTE:
                                    <span style={{ fontSize: "17px", fontWeight: "400" }}> {job.Note}</span></p>
                            </div>
                            <div style={{ paddingTop: '12%', textAlign: "center", paddingBottom: "5%" }}>
                                <Link to={`/apply_for_job/${job.JobTitle}`} style={{ marginTop: "10%" }}>
                                    <button type="button" className="joblistbutton"> Apply</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default JobDetails;
