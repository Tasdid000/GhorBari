import React, { Component } from 'react';
import axios from 'axios';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import JobDetails from './JobDetails';

class JobList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            loading: true,
        };
    }

    componentDidMount() {
        this.fetchJobs();
    }

    fetchJobs = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/apiv1/user/JobOpening/');
            this.setState({
                jobs: response.data,
                loading: false,
            });
        } catch (error) {
            console.error('Error fetching job list:', error);
            this.setState({
                loading: false,
            });
        }
    };

    render() {
        const { jobs, loading } = this.state;

        return (
            <div>
                {loading ? (
                    <p>Loading...</p>
                ) : jobs.length === 0 ? (
                    <p>Coming Soon</p>
                ) : (
                    <div>
                        {jobs.map((job) => (
                            <div key={job.JobTitle}>
                                <Row>
                                    <Col md="6">
                                        <h3>{job.JobTitle}</h3>
                                        <p>{job.JobSchedule} {job.JobLocation}</p>
                                        <p>Deadline: {job.Deadline}</p>
                                    </Col>
                                    <Col>
                                        <Row style={{ textAlign: "right" }}>
                                            <Col md="4">
                                                <Link to={`/career/${job.JobTitle}`}>
                                                    <button className="joblistbutton">
                                                        View Details
                                                    </button>
                                                </Link>
                                            </Col>
                                            <Col md="3">
                                                <Link to={`/apply_for_job/${job.JobTitle}`} style={{ marginTop: "10%" }}>
                                                    <button type="button" className="joblistbutton"> Apply</button>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default JobList;
