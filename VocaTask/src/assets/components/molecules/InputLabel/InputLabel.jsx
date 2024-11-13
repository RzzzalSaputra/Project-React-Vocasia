import Input from "../../atoms/Input/Input";

const InputLabel = ({ htmlFor, placeholder, children, type = "text" }) => {
    return (
        <div className="form-control w-full">
            <label className="w-full mb-2" htmlFor={htmlFor}>{children}</label>
            <Input id={htmlFor} name={htmlFor} type={type} placeholder={placeholder} />
        </div>
    );
}

export default InputLabel
