import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function EmployeeCard({ id, name, email, department, salary, phone }) {
  const [views, setViews] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  function handleView() {
    setViews(views + 1);
  }

  return (
    <div className="card shadow-sm border-0 h-100 overflow-hidden">
      {/* Top Avatar Banner */}
      <div className="bg-light py-4 text-center border-bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="currentColor"
          className="bi bi-person-circle text-secondary"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
        </svg>
      </div>

      {/* Card Content Body */}
      <div className="card-body d-flex flex-column text-center p-3">
        <h5 className="card-title fw-bold mb-2 text-dark">{name}</h5>

        <div className="text-muted small mb-3">
          <div><strong>ID:</strong> {id}</div>
          <div><strong>Department:</strong> {department}</div>
          <div><strong>Email:</strong> {email}</div>
          <div><strong>Salary:</strong> <span className="badge bg-success bg-opacity-75">{salary}</span></div>
        </div>

        <div className="small text-secondary mb-3">
          <strong>Views:</strong> {views}
        </div>

        <div className="mt-auto d-flex justify-content-center gap-2">
          <button className="btn btn-outline-danger btn-sm" onClick={handleView}>
            + View
          </button>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Hide' : 'Details'}
          </button>
        </div>

        {showDetails && (
          <div className="mt-3 p-2 bg-light rounded text-start border small">
            <div className="text-truncate"><strong>Email:</strong> {email}</div>
            <div><strong>Phone:</strong> {phone}</div>
          </div>
        )}

        <div className="mt-3">
          <Link
            to={`/employeeview/${id}`}
            state={{ id, name, email, department, salary, phone }}
            className="btn btn-outline-primary"
          >
            Open Employee Profile
          </Link>
        </div>
      </div>
    </div>
  );
}