import FormLogin from "../assets/components/organisms/FormLogin";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-neutral-900 box-content w-1/3 h-max p-10 rounded-lg shadow-lg border-2 border-blue-400">
        <FormLogin />
      </div>
    </div>
  );
}

export default Login