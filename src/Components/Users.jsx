import React, { useEffect, useState } from "react";
import "./Users.css";
import axios from "axios";
import UserLists from "./UserLists";
import UserDetail from "./UserDetail";
const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const API_URL = "https://602e7c2c4410730017c50b9d.mockapi.io/users";
  useEffect(() => {
    async function fetData() {
      try {
        setData([]);
        setLoading(true);
        const response = await axios.get(API_URL);
        const resData = await response.data;
        setData(resData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetData();
  }, [API_URL]);
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center">
      <div className="user-container p-3 bg-white shadow-sm rounded-1 overflow-hidden position-relative">
        <h4 className="py-2">Users</h4>
        <div className="row h-100 position-relative g-2">
          <div className={`${selectedItem ? "col-8" : "col"} h-100 pb-3`}>
            <div className="row row-cols-2 overflow-y-scroll g-2">
              {loading ? (
                <div className="loading-container position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center ">
                  <div className="loading-item d-flex align-items-center gap-1 rounded-circle">
                    <div className="loading rounded-circle"></div>
                    <div className="loading rounded-circle"></div>
                    <div className="loading rounded-circle"></div>
                    <div className="loading rounded-circle"></div>
                  </div>
                </div>
              ) : error && data.length == 0 ? (
                <div className="w-100 h-100 bg-white rounded-1 d-flex align-items-center justify-content-center position-absolute z-1 top-0 start-0">
                  <div className="d-flex flex-column align-items-center gap-3">
                    <i className="fa-regular fa-face-frown error-icon text-danger"></i>
                    <h3>
                      {data.length == 0
                        ? "Data is not available"
                        : "Please Check Your Internet Connection"}
                    </h3>
                  </div>
                </div>
              ) : (
                data.map((listItem, index) => (
                  <UserLists
                    key={
                      data[index].id == listItem.id
                        ? listItem.id + index
                        : listItem.id
                    }
                    listItem={listItem}
                    setSelectedItem={setSelectedItem}
                  />
                ))
              )}
            </div>
          </div>
          {selectedItem && <UserDetail selectedItem={selectedItem} />}
        </div>
      </div>
    </div>
  );
};

export default Users;
