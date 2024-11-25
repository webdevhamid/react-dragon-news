import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-base-200 flex flex-col min-h-[calc(100vh-68px)] justify-center items-center">
      <div className="card bg-base-100 w-10/12 max-w-xl rounded-none p-5">
        <div className="text-center py-5">
          <h1 className="text-3xl font-semibold text-[#403F3F]">Login your account</h1>
        </div>
        <div className="divider"></div>
        <form className="card-body">
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
            />
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
