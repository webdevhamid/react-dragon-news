import { FaGithub, FaGoogle } from "react-icons/fa6";

const SocialLogins = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl mb-4">Login With</h2>
      <div className="flex flex-col gap-2 items-center">
        <button className="btn btn-outline btn-primary w-full">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn btn-outline btn-neutral w-full">
          <FaGithub /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogins;
