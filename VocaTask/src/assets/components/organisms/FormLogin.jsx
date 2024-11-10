import Logo from "../atoms/Logo/Logo";
import LinkRegister from "../molecules/LinkRegister/LinkRegister";
import InputLabel from "../molecules/InputLabel/InputLabel";
import Button from "../atoms/Button/Button";
import { Link } from "react-router-dom";

const FormLogin = () => {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen">
                <div className="bg-neutral-900 box-content w-1/3 h-max p-10 rounded-lg shadow-lg border-2 border-blue-400">  
                    <Logo className="text-4xl font-bold text-center p-5 text-white">VocaTask</Logo>
                     <div className="space-y-4">
                        <InputLabel htmlFor="email" placeholder="Masukkan Email" type="email">Email</InputLabel>
                        <InputLabel htmlFor="password" placeholder="Masukkan Password" type="password">Password</InputLabel>
                        <Link to="/task">
                            <Button className="w-full btn-primary text-xl text-white mt-4">Login</Button>
                        </Link>
                        <LinkRegister />
                     </div>
                </div>
            </div>
        </>
    );
};

export default FormLogin;
