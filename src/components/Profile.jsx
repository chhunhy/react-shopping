import React, { useContext } from "react";
import { userContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { logout } = useContext(userContext);
  const storageData = localStorage.getItem("currentUser");

  if (storageData === "null" || storageData === undefined) {
    return (
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <h1 className="text-center text-danger">No user signed in. Please log in.</h1>
      </div>
    );
  }

  const user = JSON.parse(atob(storageData));
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-0">
            {/* Profile Header */}
            <div className="card-header bg-primary text-white d-flex align-items-center">
              <div className="rounded-circle bg-light text-primary d-flex justify-content-center align-items-center me-3" style={{ width: "60px", height: "60px", fontSize: "24px", fontWeight: "bold" }}>
                {user.name.firstname[0]}
                {user.name.lastname[0]}
              </div>
              <div>
                <h5 className="card-title mb-0 text-capitalize">{`${user.name.firstname} ${user.name.lastname}`}</h5>
                <p className="card-subtitle">{user.email}</p>
              </div>
            </div>

            {/* Profile Details */}
            <div className="card-body">
              {/* Address Section */}
              <div className="mb-4">
                <h6 className="text-primary">Address</h6>
                <p className="text-muted mb-0">{`${user.address.number} ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</p>
              </div>

              {/* Contact Section */}
              <div className="mb-4">
                <h6 className="text-primary">Contact</h6>
                <p className="text-muted mb-0">{`Phone: ${user.phone}`}</p>
              </div>

              {/* Geolocation Section */}
              <div className="mb-4">
                <h6 className="text-primary">Geolocation</h6>
                <p className="text-muted mb-0">{`Latitude: ${user.address.geolocation.lat}, Longitude: ${user.address.geolocation.long}`}</p>
              </div>

              {/* Logout Button */}
              <div className="text-center">
                <button
                  onClick={handleLogout}
                  className="btn btn-danger px-5"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;


