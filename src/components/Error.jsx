import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <h1 className="display-4 fw-bold text-danger mb-4">404! Not Found</h1>
      <p className="lead text-muted text-center mb-4">
        Oops! It seems like the page you are looking for doesn't exist.
      </p>
      <Link to="/" className="btn btn-primary px-4 py-2">
        Go back to Home
      </Link>
    </div>
  );
}
