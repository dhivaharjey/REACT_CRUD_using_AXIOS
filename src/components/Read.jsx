import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Read = () => {
  const [data, setData] = useState([]);
  const [del, setDel] = useState(); ////Used for data deletion updation/re-render
  const navigate = useNavigate(); /////Using for navigation between components
  useEffect(() => {
    fetchData();
  }, [del]); //////to re-render the component after delete [del] --to remove the data
  const { id } = useParams(); ////Used for get particular user data
  const fetchData = async () => {
    await axios
      .get(
        `https://65d75bbd27d9a3bc1d7ad5d0.mockapi.io/user_data/USER_DATA/${id}`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  /////////-------To Delete  the user from the DB----///////
  const handleDelete = async () => {
    const confirmation = window.confirm(
      `Do you want to "DELETE" this user..??? `
    ); /// Confirmation msg before delete
    if (confirmation) {
      await axios ////delete call using axios
        .delete(
          `https://65d75bbd27d9a3bc1d7ad5d0.mockapi.io/user_data/USER_DATA/${id}`
        )
        .then((res) => setDel(res.data))
        .catch((err) => console.log(err));

      navigate("/"); //navigate to home page
    }
  };

  ////---To get confirmation before go to edit page
  const handleEdit = () => {
    const confirmation = window.confirm(
      `Do you want to "EDIT" this user..??? `
    );
    if (confirmation) {
      navigate(`/update/${id}`);
    }
  };
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center   vh-100  bg-dark-subtle shadow">
        <div className="card p-5 bg-transparent shadow">
          <div className=" card-body d-flex justify-content-around">
            <div className=" fw-bolder">
              <div className="mb-1">ID</div>
              <div className="mb-1">USER ID </div>
              <div className="mb-1">NAME </div>
              <div className="mb-1">USER_NAME </div>
              <div className="mb-1">EMAIL </div>
              <div className="mb-1">MOBILE_NUMBER </div>
            </div>
            <div className=" fw-semibold ">
              <div className="mb-1">: {data.id}</div>
              <div className="mb-1">: {data.userId}</div>
              <div className="mb-1">: {data.name}</div>
              <div className="mb-1">: {data.userName}</div>
              <div className="mb-1">: {data.email}</div>
              <div className="mb-1">: {data.mobileNumber}</div>
            </div>
          </div>
          <div className="form-group pt-2 ">
            <button className="btn btn-success mx-2 px-5" onClick={handleEdit}>
              Edit
            </button>
            <button className="btn  btn-danger px-5" onClick={handleDelete}>
              Delete
            </button>

            <Link to="/" className="pt-5  px-2">
              <button className="btn  btn-warning px-5">Back</button>
            </Link>
          </div>
        </div>
        <span className="mt-5">
          Note : Here you can check the particular user details and after{" "}
          <strong>Updation</strong> of user details
        </span>
      </div>
    </>
  );
};

export default Read;
