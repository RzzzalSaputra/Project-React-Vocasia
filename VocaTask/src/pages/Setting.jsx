import { Button, Avatar } from "../assets/components/atoms";
import { FormSetting } from "../assets/components/organisms";
import {Link} from "react-router-dom";
import userStore from "../store/userStore";

const UpdateProfile = () => {
  const {userData} = userStore()

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center bg-neutral-900 border-2 border-blue-400 p-7 rounded-md space-y-5 box-content size-96 h-auto">
          <div className="flex flex-row justify-between w-full">
            <Link to="/task">
              <Button className="w-full btn-primary text-xl text-white">
                <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/FFFFFF/back--v1.png" alt="back--v1"/>
              </Button>
            </Link>
            <p className="font-semibold text-2xl">Setting</p>
          </div>
          <Avatar src={userData?.photo_url ? userData.photo_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} />
          <FormSetting />
        </div>
    </div>
  )
}

export default UpdateProfile;