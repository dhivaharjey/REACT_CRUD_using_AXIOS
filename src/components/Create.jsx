import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [addData, setAddData] = useState({
    userId: "",
    name: "",
    userName: "",
    email: "",
    mobileNumber: "",
  });
  const navigate = useNavigate();
  const handleUpadteSubmit = async (event) => {
    event.preventDefault(); /// To prevent the data is not erasing
    const confirmation = window.confirm(
      `Do you want to  "ADD" New user ..... ????`
    );

    if (confirmation) {
      await axios ///post call to add new data into the db
        .post(
          "https://65d75bbd27d9a3bc1d7ad5d0.mockapi.io/user_data/USER_DATA",
          addData ///payload to add the data in db
        )
        .then((res) => setAddData(res.data)) ////update/re-render the data get from the user using state mamnagement
        .catch((err) => console.log(err));

      navigate("/");
    }
  };
  //////---While typing to get the data
  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddData({ ...addData, [name]: value }); /// upating the data using state update function
  };
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100  bg-body-secondary">
        <form
          className=" bg-transparent p-5 rounded-5 w-25 shadow"
          onSubmit={handleUpadteSubmit}
        >
          <div className=" text-center fw-bolder  fs-3 mb-3">ADD USER</div>
          <div className="form-group pb-3">
            <label for="formGroupExampleInput1" className=" fw-semibold pb-1">
              USER ID :
            </label>
            <input
              type="text"
              className="form-control "
              id="formGroupExampleInput1"
              name="userId"
              value={addData.userId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group pb-3">
            <label for="formGroupExampleInput2 " className=" fw-semibold pb-1">
              NAME :
            </label>
            <input
              type="text"
              className="form-control "
              id="formGroupExampleInput2"
              name="name"
              value={addData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group pb-3">
            <label for="formGroupExampleInput3 " className=" fw-semibold pb-1">
              USER_NAME :
            </label>
            <input
              type="text"
              className="form-control pt-2"
              id="formGroupExampleInput3"
              name="userName"
              value={addData.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group pb-3">
            <label for="formGroupExampleInput4 " className=" fw-semibold pb-1">
              EMAIL :
            </label>
            <input
              type="email"
              className="form-control "
              id="formGroupExampleInput4"
              name="email"
              value={addData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group pb-3">
            <label for="formGroupExampleInput5 " className=" fw-semibold pb-1">
              MOBILE NUMBER :
            </label>
            <input
              type="tel"
              className="form-control "
              id="formGroupExampleInput5"
              name="mobileNumber"
              value={addData.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group pt-2 d-flex justify-content-center">
            <button type="submit" className="btn btn-success px-5 mx-2">
              Add
            </button>

            <button
              onClick={() => {
                navigate("/");
              }}
              className="btn  btn-warning px-5"
            >
              Home
            </button>
          </div>
        </form>
        <div className="mt-3 ">
          <span>
            Note : Here you can <strong>ADD NEW USER</strong> details.
          </span>
        </div>
      </div>
    </>
  );
};

export default Create;
