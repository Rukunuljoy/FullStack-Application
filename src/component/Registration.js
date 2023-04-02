import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Registration = () => {
  const [signUpError, setSignUpError] = useState("");
  const {
    register,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(AuthContext);

  const diffToast = () => {
    alert("registration successful");
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        toast.success("successfully done");
        console.log(user);
      })
      .catch((err) => console.error(err));
    setSignUpError();
  };

  return (
    <div className="hero w-full my-20">
      <div className="hero-content gap-10 grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src="https://i.ibb.co/sbtvKV9/login.png" alt="" />
        </div>
        <div className="card  w-full max-w-sm shadow-2xl py-10 bg-base-100">
          <h1 className="text-5xl font-bold text-center mt-5">Register now!</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name", { required: "name Address is required" })}
                placeholder="Enter your name here..."
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                {...register("email", {
                  required: "Email Address is required",
                })}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: "password id required",
                  minLength: {
                    value: 6,
                    message: "password must be at least 6 characters",
                  },
                })}
                placeholder="password"
                className="input input-bordered"
                required
              />
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <ToastContainer />
              <button
                onClick={diffToast}
                className="btn btn-primary"
                type="submit"
                value="register"
              >
                Register
              </button>
              {signUpError && <p className="text-red-600">{signUpError}</p>}
            </div>
          </form>
          <div className="divider">OR</div>
          <p className="text-center mb-10">
            Already have an Account?{" "}
            <Link className="text-blue-700 font-bold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
