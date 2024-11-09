import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import Label from "../../atoms/Label/Label";
import { Link } from "react-router-dom";

const FormInput = () => {
  return (
    <form className="form-control space-y-4">
      <Label className="text-xl" htmlFor="email">Email</Label>
      <Input id="email" name="email" placeholder="Masukkan Email" autoComplete="email" />

      <Label className="text-xl" htmlFor="password">Password</Label>
      <Input id="password" name="password" type="password" placeholder="Masukkan Password" autoComplete="current-password"/>
      
      <Link to="/task">
        <Button className="w-full btn-primary text-xl text-white">
          Login
        </Button>
      </Link>
    </form>
  );
};

export default FormInput;
