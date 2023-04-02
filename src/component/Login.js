import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    
  const [loginError, setLoginError] = useState('');
  const { register,formState: { errors } } = useForm();
    const {signIn} = useContext(AuthContext)

    const diffToast = ()=>{
        alert('Login successful')
      }

    const  handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email,password)
        .then(result =>{
            const user = result.user;
            form.reset();
            toast.success('successfully done')
            console.log(user)
        })
        .catch(err =>console.error(err))
        setLoginError()
    }

    return (
        <div className="hero w-full my-20">
      <div className="hero-content gap-10 grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
            <img className="w-3/4" src="https://i.ibb.co/sbtvKV9/login.png" alt = ""/>
        </div>
        <div className="card  w-full max-w-sm shadow-2xl py-10 bg-base-100">
          <h1 className="text-5xl font-bold text-center mt-5">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name='email'
                {...register("email",{required:"Email Address is required",})}
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
                name='password'
                {...register("password",{required:"password id required",minLength:{value:6,message:"password must be at least 6 characters"}})}
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
          {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
              </label>
            </div>
            <div className="form-control mt-6">
                <ToastContainer/>
                <button onClick={diffToast} className="btn btn-primary" type = "submit" value='sign In'>Login</button>
                { loginError && <p className="text-red-600">{loginError}</p>}
            </div>
            
          <div className="divider">OR</div>
            <p className='text-center mt-4'>Already have an Account? <Link className='text-blue-700 font-bold' to='/'>create an account</Link></p>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Login;