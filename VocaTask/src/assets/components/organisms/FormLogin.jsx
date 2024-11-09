import Logo from "../atoms/Logo/Logo";
import FormInput from "../molecules/FormInput/FormInput";
import LinkRegister from "../molecules/LinkRegister/LinkRegister";

const FormLogin = () => {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen">
                <div className="bg-neutral-900 box-content w-1/3 h-max p-10 rounded-lg shadow-lg border-2 border-blue-400">  
                    <Logo className="text-4xl font-bold text-center p-5 text-white">VocaTask</Logo>
                    <FormInput />
                    <LinkRegister />
                </div>
            </div>
        </>
    );
};

export default FormLogin;
