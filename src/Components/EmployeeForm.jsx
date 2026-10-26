import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';

export default function EmployeeForm() {
    const [formdata, setformdata] = useState({
        name: '',
        email: '',
        phone: '',
        department: '',
        position: '',
        gender: '',
        address: '',
        terms: false
    });

    const [error, seterror] = useState('');
    const [success, setSuccess] = useState('');

    function handlechange(event) {
        const { name, value, type, checked } = event.target;
        setformdata({
            ...formdata,
            [name]: type === 'checkbox' ? checked : value
        });
        seterror('');
        setSuccess('');
    }

    function handleSubmit(event) {
        event.preventDefault();
        seterror('');
        setSuccess('');

        if (!formdata.name) {
            seterror("Please enter the name");
            return;
        }
        if (formdata.name.length < 3) {
            seterror("Name must be at least 3 characters.");
            return;
        }
        if (!formdata.email) {
            seterror("Please enter the email");
            return;
        }
        if (!formdata.phone) {
            seterror("Please enter the phone number");
            return;
        }
        if (!formdata.department) {
            seterror("Please select the department");
            return;
        }
        if (!formdata.position) {
            seterror("Please select the position");
            return;
        }
        if (!formdata.gender) {
            seterror("Please select the gender");
            return;
        }
        if (!formdata.address) {
            seterror("Please enter the address");
            return;
        }
        if (!formdata.terms) {
            seterror("Please accept the terms and conditions");
            return;
        }

        console.log("Employee information", formdata);
        setSuccess("Employee registered successfully!");

        setformdata({
            name: '',
            email: '',
            phone: '',
            department: '',
            position: '',
            gender: '',
            address: '',
            terms: false
        });
    }

    return (
        <>
            <Header />
            <div className="container my-4">
                <div className="card shadow-sm">
                    <div className="card-body p-4">
                        <h2 className="mb-4">Employee Registration</h2>

                        <form onSubmit={handleSubmit} noValidate>

                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input type="text" name="name" className="form-control" placeholder="Enter your name" value={formdata.name} onChange={handlechange} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" name="email" className="form-control" placeholder="Enter your email" value={formdata.email} onChange={handlechange} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Phone Number</label>
                                <input type="tel" name="phone" className="form-control" placeholder="Enter your phone" value={formdata.phone} onChange={handlechange} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Department</label>
                                <select name="department" className="form-select" value={formdata.department} onChange={handlechange}>
                                    <option value="">Select Department</option>
                                    <option value="IT">IT</option>
                                    <option value="HR">HR</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Marketing">Marketing</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Position</label>
                                <select name="position" className="form-select" value={formdata.position} onChange={handlechange}>
                                    <option value="">Select Position</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Accountant">Accountant</option>
                                    <option value="Intern">Intern</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label d-block">Gender</label>
                                <div className="form-check form-check-inline">
                                    <input type="radio" name="gender" value="Male" className="form-check-input" checked={formdata.gender === 'Male'} onChange={handlechange} />
                                    <label className="form-check-label">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio" name="gender" value="Female" className="form-check-input" checked={formdata.gender === 'Female'} onChange={handlechange} />
                                    <label className="form-check-label">Female</label>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Address</label>
                                <textarea name="address" className="form-control" rows="4" placeholder="Enter your address" value={formdata.address} onChange={handlechange} />
                            </div>

                            <div className="mb-3">
                                <div className="form-check">
                                    <input type="checkbox" name="terms" className="form-check-input" checked={formdata.terms} onChange={handlechange} />
                                    <label className="form-check-label"> I agree to the terms and conditions. </label>
                                </div>
                            </div>

                            {error && (
                                <div className="alert alert-danger"> {error} </div>
                            )}

                            {success && (
                                <div className="alert alert-success"> {success} </div>
                            )}

                            <button type="submit" className="btn btn-primary">
                                Register Employee
                            </button>

                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}