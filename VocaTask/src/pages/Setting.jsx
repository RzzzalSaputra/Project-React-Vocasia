import Button from "../assets/components/atoms/Button/Button";
import Paragraf from "../assets/components/atoms/Paragraf/Paragraf";
import Avatar from "../assets/components/atoms/Avatar/Avatar";
import FormSetting from "../assets/components/organisms/FormSetting";
import {Link} from "react-router-dom";
import { DataContext } from "../config/Dummydata";
import { useContext } from "react";

const UpdateProfile = () => {
  const { dataProfile } = useContext(DataContext);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center bg-neutral-900 border-2 border-blue-400 p-7 rounded-md space-y-5 box-content size-96 h-auto">
          <div className="flex flex-row justify-between w-full">
            <Link to="/task">
              <Button className="w-full btn-primary text-xl text-white">
                <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/FFFFFF/back--v1.png" alt="back--v1"/>
              </Button>
            </Link>
            <Paragraf className="font-semibold text-2xl">Setting</Paragraf>
          </div>
          <Avatar src={dataProfile.img} />
          <FormSetting />
        </div>
    </div>
  )
}

export default UpdateProfile;