import { InputLabel, Link} from "../assets/components/molecules";
import { Button } from "../assets/components/atoms";
import {  useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import userStore from "../store/userStore";

const Register = () => {
    const navigate = useNavigate();
    const {register} = userStore()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    const handleSubmit = async ()=>{
      const res = await register(name, email, password)
      console.log(email, name, password)
      if(res){
        Swal.fire({
            icon: 'success',
            title: 'Daftar Berhasil',
            text: 'Silahkan Login',
            timer: 3000,
            showConfirmButton: false
        })
        navigate('/')
      }
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-neutral-900 box-content w-1/3 h-max p-10 rounded-lg shadow-lg border-2 border-blue-400">
          <h1 className="text-4xl font-bold text-center p-5 text-white">VocaTask</h1>
          <div className="space-y-4">            
            <InputLabel
              htmlFor="name"
              placeholder="Masukkan Nama"
              type="text"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
            >
             Nama
            </InputLabel>            
            <InputLabel
              htmlFor="email"
              placeholder="Masukkan email"
              type="email"
              value={email}
              onChange={(e)=>{setEmail  (e.target.value)}}
            >
              Email
            </InputLabel>
            <InputLabel
              htmlFor="password"
              placeholder="Masukkan Password"
              type="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
            >
              Password
            </InputLabel>
              <Button onClick={handleSubmit} type="button" className="w-full mt-4">Daftar</Button>
              <Link title={"Sudah Punya Akun "} linkText={"Login"} onClick={()=>navigate('/')}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;