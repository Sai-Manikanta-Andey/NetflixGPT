import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm,setisSignInForm]= useState(true)
  const toggleForm=()=>{
    setisSignInForm(prev=> !prev)
  }
  return (
    <div className="  h-screen  ">
      <Header />
      <div className='bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_small.jpg")]  h-screen bg-center bg-cover object-cover'>
        <div className="flex justify-center items-center h-screen bg-black bg-opacity-60 ">
          <form className=" w-76 md:w-96 flex flex-col gap-8 bg-black bg-opacity-90  px-8 py-4 mx-auto rounded ">
            <h3 className="text-white text-3xl">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h3>
            <div className="flex flex-col gap-6">
              {!isSignInForm && <input
                className="text-white px-2 py-3 bg-slate-900 outline-none rounded"
                type="text "
                placeholder="Full Name"
              />}
              <input
                className="text-white px-2 py-3 bg-slate-900 outline-none rounded"
                type="text "
                placeholder="Email"
              />
              <input
                className="text-white px-2 py-3 bg-slate-900 outline-none rounded"
                type="password "
                placeholder="Password"
              />
            </div>

            <div>
              <button className="w-full text-white px-2 py-3 bg-red-500 rounded">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
            </div>
            <div className="flex gap-1  items-center text-white">
              
              <p onClick={toggleForm } className="cursor-pointer mb-8">
                {isSignInForm? "New to Netflix? Sign Up Now":"Already registered? Sign In Now."}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
