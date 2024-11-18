import { InputLabel } from "../../molecules";
import { Button } from "../../atoms";
import { useState } from "react";
import userStore from "../../../../store/userStore";
import Swal from "sweetalert2";
import _ from "lodash"

const FormSetting = () => {
    const {updateUser} = userStore();
    const [photo_url, setPhoto_url] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

const handleSubmit = () => {

  Swal.fire({
    title: 'Apakah kamu yakin?',
    text: "Ini akan mengubah data!",
    icon: 'warning',
    showCancelButton: true,  
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Ya, Ubah!',
    cancelButtonText: 'Batal'
  }).then((result) => {
    if (result.isConfirmed) {
        
        const updatedData = {
            photo_url,
            name,
            email,
            password
        }
        const filteredData = _.omitBy(updatedData, (value) => value === "" || value === null);
        updateUser(filteredData)

      Swal.fire(
        'Berhasil Update!',
        'Data telah diupdate.',
        'success',
        '2000'
      );
    }
  });
};

    return (
        <>
            <InputLabel htmlFor="imageURL" placeholder="Masukkan URL" type="text" value={photo_url} onChange={(e)=>{setPhoto_url(e.target.value)}}>Image URL</InputLabel>
            <InputLabel htmlFor="name" placeholder="Masukkan Name" type="text" value={name} onChange={(e)=>{setName(e.target.value)}}>Name</InputLabel>
            <InputLabel htmlFor="email" placeholder="Masukkan Email" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}>Email</InputLabel>
            <InputLabel htmlFor="password" placeholder="Masukkan Password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}>Password</InputLabel>
            <Button className="w-full btn-primary text-xl text-white" onClick={handleSubmit}>Update</Button>
        </>
    );
}

export default FormSetting