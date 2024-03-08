import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [editData, setEditData] = useState({
    userId: "",
    name: "",
    userName: "",
    email: "",
    mobileNumber: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(
        `https://65d75bbd27d9a3bc1d7ad5d0.mockapi.io/user_data/USER_DATA/${id}`
      )
      .then((res) => setEditData(res.data))
      .catch((err) => console.log(err));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const confirmation = window.confirm(
      `Do you want Change this "USER DATA"....???? `
    );
    if (confirmation) {
      await axios /// updating using the put method
        .put(
          `https://65d75bbd27d9a3bc1d7ad5d0.mockapi.io/user_data/USER_DATA/${id}`,
          editData ///payload
        )
        .catch((err) => console.log(err));
      navigate(`/read/${id}`);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditData({ ...editData, [name]: value }); /// updating the data using the state update function
  };
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center  vh-100 bg-success-subtle">
        <form
          className=" bg-transparent p-5 rounded-5  shadow "
          onSubmit={handleSubmit}
        >
          <div className="form-group pb-3">
            <label
              htmlFor="formGroupExampleInput1 "
              className=" fw-semibold pb-1"
            >
              USER ID:
            </label>
            <input
              type="text"
              className="form-control  "
              id="formGroupExampleInput1"
              name="userId"
              value={editData.userId} //// to show the existing data in the input field
              onChange={handleChange} ///To get new data
              required
            />
          </div>
          <div className="form-group pb-3">
            <label
              htmlFor="formGroupExampleInput2 "
              className=" fw-semibold pb-1"
            >
              NAME :
            </label>
            <input
              type="text"
              className="form-control "
              id="formGroupExampleInput2"
              name="name"
              value={editData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group pb-3">
            <label
              htmlFor="formGroupExampleInput3 "
              className=" fw-semibold pb-1"
            >
              USER_NAME :
            </label>
            <input
              type="text"
              className="form-control pt-2"
              id="formGroupExampleInput3"
              name="userName"
              value={editData.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group pb-3">
            <label
              htmlFor="formGroupExampleInput4 "
              className=" fw-semibold pb-1"
            >
              EMAIL :
            </label>
            <input
              type="email"
              className="form-control "
              id="formGroupExampleInput4"
              name="email"
              value={editData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group pb-3">
            <label
              htmlFor="formGroupExampleInput5 "
              className=" fw-semibold pb-1"
            >
              MOBILE NUMBER :
            </label>
            <input
              type="tel"
              className="form-control "
              id="formGroupExampleInput5"
              name="mobileNumber"
              value={editData.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group pt-2 d-flex justify-content-center">
            <button type="submit" className="btn btn-success px-4 p-0 ">
              Update
            </button>

            <button
              onClick={() => {
                navigate(`/read/${id}`);
              }}
              className="btn  btn-warning px-4 mx-3 "
            >
              Back
            </button>
            <button
              onClick={() => {
                navigate(`/`);
              }}
              className="btn btn-dark px-4 mx-3 "
            >
              Home
            </button>
          </div>
        </form>
        <div className="mt-3">
          <span>
            Note : Here you can <strong>Update</strong> the exsisting user
            details.
          </span>
        </div>
      </div>
    </>
  );
};

export default Update;
