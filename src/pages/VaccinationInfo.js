import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from 'components/Layout';
import Container from 'components/Container';
import Header from "components/Header"
import Footer from "components/Footer"

const VaccinationInfo = () => {
    return (
        <Layout pageName="two">
        <div className="container">
            <Helmet>
                <title>Vaccination Info</title>
            </Helmet>
            <h1 className="display-4"> Vaccination Clinics – Booking an Appointment: </h1>
            <br/>
            <div className="row">
                <div className="col">
                    <h5>St. Jude's On-Site Vaccination Clinic</h5>
                    <p>Available to CSUF Employees/Students and their families</p>
                    <br/>
                    <h5><a href="https://maps.google.com/maps?cid=2763266050030896257">101 E Valenvia Mesa Dr, Fullerton, Ca 92835</a></h5>
                    <p>Monday - Friday</p>
                    <p>8:15 am - 3:00 pm</p>
                    <a href="https://www.signupgenius.com/go/20f0844adaf23aafe3-csuf">Reserve your spot here</a>
                </div>
                <div className="col">
                    <h4>Orange County Providence Vaccination Sites</h4>
                    <p>Available to Orange County Community Members</p>
                    <li>Providence Vaccine Clinic at Edwards Lifesciences in Santa Ana</li>
                    <li>Providence Vaccine Drive-Thru at Great Park Irvine</li>
                    <p>Hours will vary by location. Reserve your spot at <a href="https://myturn.ca.gov/"> myturn.ca.gov</a></p>
                </div>
            </div>
            <br/><br/>
            <h5>Additional clinics for employees, students, and families:</h5>
                <h6>Monday:</h6>
                <p> Providence Clinic at Buena Park Community Center 6688 Beach Blvd. Buena Park 90621</p>
                <h6>Tuesday:</h6>
                <p>Providence Clinic at Whitten Community Center 900 S. Melrose Ave,  Placentia</p>
                <h6>Wednesday:</h6>
                <p>Providence Clinic at Garden Grove Sports and Recreation Complex 13641 Deodara Dr.  Garden Grove, 92844 </p>
                <h6>Thursday:</h6>
                <p>Providence Clinic at Orangethorpe United Methodist Church 2351 W. Orangethorpe Ave.  Fullerton,  92833</p>
                <h6>Friday:</h6>
                <p>Providence Clinic at La Habra Community Center 101 W. La Habra Blvd. La Habra, 90631</p>
                <p className="lead">Reserve using <a href="https://myturn.ca.gov/">MyTurn</a>.</p>
    </div>
    </Layout>
    )
}
export default VaccinationInfo;
