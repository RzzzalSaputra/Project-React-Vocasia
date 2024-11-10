import InputLabel from "../molecules/InputLabel/InputLabel";
import Button from "../atoms/Button/Button";
const FormSetting = () => {
    return (
        <>
            <InputLabel htmlFor="imageURL" placeholder="Masukkan URL" type="text">Image URL</InputLabel>
            <InputLabel htmlFor="name" placeholder="Masukkan Name" type="text">Name</InputLabel>
            <InputLabel htmlFor="email" placeholder="Masukkan Email" type="email">Email</InputLabel>
            <InputLabel htmlFor="password" placeholder="Masukkan Password" type="password">Password</InputLabel>
            <Button className="w-full btn-primary text-xl text-white">Update</Button>
        </>
    );
}

export default FormSetting