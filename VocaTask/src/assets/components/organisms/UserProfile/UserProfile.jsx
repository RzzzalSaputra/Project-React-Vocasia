import Avatar from "../../atoms/Avatar/Avatar";
import Paragraf from "../../atoms/Paragraf/Paragraf";
import Button from "../../atoms/Button/Button";
import { Link } from "react-router-dom";
import { DataContext } from "../../../../config/Dummydata";
import { useContext } from "react";

const UserProfile = () => {
  const { dataProfile } = useContext(DataContext);

  return (
    <div className="flex flex-col items-center justify-center bg-neutral-900 border-2 border-blue-400 p-7 rounded-md space-y-5 box-content">
      <Avatar src={dataProfile.img} />
      <Paragraf className="text-center">{dataProfile.name}</Paragraf>
      <div className="">
        <Link to="/update-profile">
          <Button className="w-full">
            <img src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/settings--v1.png" alt="Setting Icon"  className="w-6"/>
            Setting
          </Button>
        </Link>
        <Link to="/">
          <Button className="w-full mt-4">
              <img src="https://img.icons8.com/forma-light/24/FFFFFF/exit.png" alt="Logout Icon" className="w-6"/>
              Logout
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default UserProfile;
