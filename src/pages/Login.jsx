import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const { singInUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  // console.log(error);

  const location = useLocation();
  const navigate = useNavigate();

  // console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    singInUser(email, password)
      .then((credential) => {
        const user = credential.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        const errorCode = err.code;
        setError({ ...error, login: errorCode });
      });
  };
  return (
    <div className="bg-base-200 flex flex-col min-h-[calc(100vh-68px)] justify-center items-center">
      <div className="card bg-base-100 w-10/12 max-w-xl rounded-none p-5">
        <div className="text-center py-5">
          <h1 className="text-3xl font-semibold text-[#403F3F]">Login your account</h1>
        </div>
        <div className="divider"></div>
        <form className="card-body" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input bg-[#F3F3F3] text-sm"
              required
              name="email"
            />
          </div>
          {/* Password Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input bg-[#F3F3F3] text-sm"
              required
              name="password"
            />
            {/* Error Message */}
            <label className="label">
              <p className="text-red-500">{error && error.login}</p>
            </label>
            {/* Label Forget password */}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          {/* Login submit input */}
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Login</button>
          </div>
          <h2 className="pt-3 text-center">
            Don't have an account?{" "}
            <Link
              to="/auth/register"
              className="bg-gradient-to-r bg-clip-text text-transparent font-medium from-red-600 to-orange-600"
            >
              Register
            </Link>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default Login;
