import React from "react";

const UserLists = ({ listItem, setSelectedItem }) => {
  const insertSelecteddata = () => {
    setSelectedItem(listItem);
  };
  return (
    <div className="col" onClick={insertSelecteddata}>
      <div className="card border-0">
        <div className="card-body d-flex align-items-center gap-3">
          <img
            src={listItem.avatar}
            className="card-image rounded-circle"
            alt={listItem.profile.username}
          />
          <h4>{listItem.profile.username}</h4>
        </div>
      </div>
    </div>
  );
};

export default UserLists;
