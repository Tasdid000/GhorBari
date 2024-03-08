import React, { Component } from 'react';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ApplyJob from './JobApply';
class ApplyJobPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            JobTitle: null,
            loading: true,
            error: null,
        };
    }

    componentDidMount() {
        const { match } = this.props;
        const jobId = match.params.id;

        axios.get(`http://127.0.0.1:8000/apiv1/user/JobOpening/${jobId}/`)
            .then(response => {
                this.setState({
                    JobTitle: response.data,
                    loading: false,
                });

            })
            .catch(error => {
                console.error('Error fetching property details:', error);
                this.setState({
                    error: 'Error fetching property details. Please try again later.',
                    loading: false,
                });
            });
    }

    render() {
        const { JobTitle, loading, error } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }
        return (
            <div style={{ marginBottom: "5%" }}>
                <div>
                    <div style={{ backgroundImage: "url('/assets/images/bannerapplyforjob.jpeg')", height: "400px", backgroundPosition: "center", backgroundSize: "cover" }}>
                        <h3 style={{ textAlign: "center", paddingTop: "15%", color: "white", fontSize: "40px" }}>Ready to Apply?</h3>
                        <p style={{ textAlign: "center", color: "white", fontSize: "17px", paddingTop: "2%", }}>If you have the necessary skills and talent then apply to join GhorBari today</p>
                    </div>
                </div>
                <div className='container'>
                    <ApplyJob JobPosition={JobTitle.JobTitle} />
                </div>
            </div>
        );
    }
}
export default ApplyJobPage;
