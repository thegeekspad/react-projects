import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter username"
          className='border p-3 rounded-lg id="username'></input>
        <input
          type="text"
          placeholder="Enter email id"
          className='border p-3 rounded-lg id="email'></input>
        <input
          type="password"
          placeholder="Enter password"
          className='border p-3 rounded-lg id="password'></input>
        <button className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-90 disabled:opacity-50">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={'/signin'}>
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
