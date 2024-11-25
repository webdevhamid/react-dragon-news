import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-base-200 flex flex-col min-h-[calc(100vh-68px)] justify-center items-center">
      <div className="card bg-base-100 w-10/12 max-w-xl rounded-none p-5">
        <div className="text-center py-5">
          <h1 className="text-3xl font-semibold text-[#403F3F]">Register your account</h1>
        </div>
        <div className="divider"></div>
        <form className="card-body">
          {/* Name Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input bg-[#F3F3F3] text-sm"
              required
            />
          </div>
          {/* Photo Url Input  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter your photo URL"
              className="input bg-[#F3F3F3] text-sm"
              required
            />
          </div>
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
          </div>
          {/* Submit button input */}
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Register</button>
          </div>

          <h2 className="pt-3 text-center">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="bg-gradient-to-r bg-clip-text text-transparent font-medium from-red-600 to-orange-600"
            >
              Login
            </Link>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default Register;
