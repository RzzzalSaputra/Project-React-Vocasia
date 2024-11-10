import Label from "../../atoms/Label/Label";
import Input from "../../atoms/Input/Input";

// eslint-disable-next-line react/prop-types
const InputLabel = ({ htmlFor, placeholder, children, type = "text" }) => {
    return (
        <div className="form-control w-full">
            <Label htmlFor={htmlFor}>{children}</Label>
            <Input id={htmlFor} name={htmlFor} type={type} placeholder={placeholder} />
        </div>
    );
}

export default InputLabel
