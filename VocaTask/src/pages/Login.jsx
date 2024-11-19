import { InputLabel, Link } from "../assets/components/molecules";
import { Button } from "../assets/components/atoms";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import userStore from "../store/userStore";

const Login = () => {
  const navigate = useNavigate();
  const { login, error } = userStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const log = await login(email, password);
    if (log) {
      Swal.fire({
        icon: "success",
        title: "Login Berhasil",
        timer: 1000,
        showConfirmButton: false,
      });
      navigate("/task");
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text: error.response.data.message,
        timer: 1000,
        showConfirmButton: false,
      });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-neutral-900 box-content w-1/3 h-max p-10 rounded-lg shadow-lg border-2 border-blue-400">
          <h1 className="text-4xl font-bold text-center p-5 text-white">
            VocaTask
          </h1>
          <div className="space-y-4">
            <InputLabel
              htmlFor="email"
              placeholder="Masukkan email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            >
              Email
            </InputLabel>
            <InputLabel
              htmlFor="password"
              placeholder="Masukkan Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            >
              Password
            </InputLabel>
            <Button
              onClick={handleSubmit}
              type="button"
              className="w-full mt-4"
            >
              Login
            </Button>
            <Link
              title={"Belum Punya Akun "}
              linkText={"Daftar"}
              onClick={() => navigate("/register")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;