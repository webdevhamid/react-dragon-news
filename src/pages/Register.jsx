import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 6) {
      setError({ ...error, name: "Name must be 6 characters long!" });
      return;
    }
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    // console.log({ name, photo, email, password });

    // It will create a new user
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ name, photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="bg-base-200 flex flex-col min-h-[calc(100vh-68px)] justify-center items-center">
      <div className="card bg-base-100 w-10/12 max-w-xl rounded-none p-5">
        <div className="text-center py-5">
          <h1 className="text-3xl font-semibold text-[#403F3F]">Register your account</h1>
        </div>
        <div className="divider"></div>
        <form className="card-body" onSubmit={handleSubmit}>
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
              name="name"
            />
          </div>
          {/* Name Error Handling */}
          {error && <label className="label text-red-500 text-xs">{error.name}</label>}

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
              name="photo"
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
