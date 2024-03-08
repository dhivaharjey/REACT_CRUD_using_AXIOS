import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  ///////-------Fetching the data ---//////////
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios ///Get call using axios
      .get("https://65d75bbd27d9a3bc1d7ad5d0.mockapi.io/user_data/USER_DATA") ///to get user details get api call
      .then((res) => setData(res.data)) /// updating response data using state
      .catch((err) => console.log(err));
  };
  ///////////////////////////////////////////////////////////////
  return (
    <>
      <div className="header sticky-top d-flex justify-content-between mb-5">
        <h2 className="p-3 fw-bolder   focus-ring-danger    text-center ">
          LIST OF USERS
        </h2>
        <div className="  p-2">
          <Link to="/create" className=" btn  btn-success add-btn mt-2">
            Add +
          </Link>
        </div>
      </div>
      <div className=" container">
        <table className="table   border-2  mb-5 ">
          <thead className=" table-dark">
            <tr className=" fw-bold ">
              <td className="p-3 ">ID</td>
              <td className="p-3">USER_ID</td>
              <td className="p-3">NAME</td>
              <td className="p-3">USER_NAME</td>
              <td className="p-3">EMAIL</td>
              <td className="p-3">MOBILE NUMBER</td>
              <td className="p-3">CRUD</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row" className="ps-3">
                    {item.id}
                  </th>
                  <td className="p-2">{item.userId}</td>
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">{item.userName}</td>
                  <td className="p-2">{item.email}</td>
                  <td className="p-2">{item.mobileNumber}</td>
                  <td className="p-2">
                    <Link
                      to={`/read/${item.id}`}
                      className="btn btn-info button"
                    >
                      Read
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
