import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="  h-screen  ">
      <Header />
      <div className='bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_small.jpg")]  h-screen bg-center bg-cover object-cover'>
        <div className="flex justify-center items-center h-screen ">
          <form className=" w-320px flex flex-col gap-4 bg-black px-8 py-4 mx-auto rounded ">
            <h3 className="text-white text-2xl">Sign In </h3>
            <input
              className="px-2 py-3 bg-gray-600 border-2 border-gray-400 outline-none rounded"
              type="text "
              placeholder="Email"
            />
            <input
              className="px-2 py-3 border-2  bg-gray-600 border-gray-400 outline-none rounded"
              type="text "
              placeholder="Password"
            />
            <div>
              <button className="w-full px-2 py-3 bg-red-500 rounded">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
