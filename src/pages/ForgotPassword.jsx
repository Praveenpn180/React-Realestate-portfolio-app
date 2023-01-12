import { useState } from "react";
import { Link } from "react-router-dom";
import Auth from '../components/Auth'
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const onChange = (e) => {
  setEmail(e.target.value)
  };
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold ">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            className=" w-full rounded-2xl  "
            src="https://images.unsplash.com/photo-1585914641050-fa9883c4e21c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80"
            alt="key"
          />
        </div>
        <div className="w-full md:w-[67%] lg:ml-20 lg:w-[40%]">
          <form>
            <input
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              onChange={onChange}
              type="email"
              name=""
              id="email"
              value={email}
              placeholder="Email Address"
            />
           
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Don't have an account?{" "}
                <Link className="text-red-600 " to="/signup ">
                  Register
                </Link>
              </p>
              <p>
              <Link
                to="/login"
                className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
              >
                Login instead
              </Link>
            </p>
            </div>
            

            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
              type="submit"
            >
              Send reset password
            </button>
            <div className="flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
           <Auth/>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ForgotPassword