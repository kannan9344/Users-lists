import React from "react";

const UserDetail = ({ selectedItem }) => {
  return (
    <div className="col-4 px-2">
      <div className="card w-100 border-0 py-3">
        <img
          src={selectedItem.avatar}
          className="mx-auto rounded-1"
          alt={selectedItem.profile.username}
        />
        <div className="card-body d-flex flex-column align-items-center py-3  px-1">
          <h5 className="card-title mb-3">{selectedItem.jobTitle}</h5>
          <div className="px-2 user-details align-self-start w-100">
            <div className="d-flex align-items-center text-break mb-2">
              <strong>Firstname : </strong>
              <small>{selectedItem.profile.firstName}</small>
            </div>
            <div className="d-flex align-items-center text-break mb-2">
              <strong>Last Name : </strong>
              <small>{selectedItem.profile.lastName}</small>
            </div>
            <div className="d-flex align-items-center text-break mb-2">
              <strong>Username : </strong>
              <small>{selectedItem.profile.username}</small>
            </div>
            <div className="d-flex align-items-center text-break mb-2">
              <strong>Email : </strong>
              <small>{selectedItem.profile.email}</small>
            </div>
            <div className="d-flex align-items-center text-break mb-2">
              <strong>Bio : </strong>
              <small>{selectedItem.Bio}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
