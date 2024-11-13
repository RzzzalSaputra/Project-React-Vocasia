import { InputLabel } from "../assets/components/molecules";
import { Button } from "../assets/components/atoms";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-neutral-900 box-content w-1/3 h-max p-10 rounded-lg shadow-lg border-2 border-blue-400">
          <h1 className="text-4xl font-bold text-center p-5 text-white">VocaTask</h1>
          <div className="space-y-4">
            <InputLabel
              htmlFor="email"
              placeholder="Masukkan Email"
              type="email"
            >
              Email
            </InputLabel>
            <InputLabel
              htmlFor="password"
              placeholder="Masukkan Password"
              type="password"
            >
              Password
            </InputLabel>
            <Link to="/task">
              <Button className="w-full mt-4">Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;