import React from 'react'
import EmployeeCard from './EmployeeCard'
import Header from './Header'
import Footer from './Footer'

export default function EmployeeProfile() {
  return (
    <>
      <Header />
      <div className="container my-4">
        <div className="row g-4">
          <div className="col-12 col-sm-6 col-md-3">
            <EmployeeCard id="1" name="Ahmed Raza" email="ahmed@gmail.com" department="IT" salary="80000" phone="03001234567" />
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <EmployeeCard id="2" name="Sara Khan" email="sara@gmail.com" department="HR" salary="65000" phone="03011234567" />
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <EmployeeCard id="3" name="Bilal Ahmed" email="bilal@gmail.com" department="Finance" salary="90000" phone="03021234567" />
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <EmployeeCard id="4" name="Ayesha Noor" email="ayesha@gmail.com" department="Marketing" salary="70000" phone="03031234567" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}