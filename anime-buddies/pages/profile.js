import { useEffect, useState } from "React";
import {useRouter} from 'next/router';
import { useAuth } from "../lib/auth";
import "firebase/auth";
import Profile from "../components/Profile";
import SignIn from "../components/SignIn";


const ProfilePage = () => {
  let email;
  const auth = useAuth();

  if (true) {
    return (<Profile></Profile>);
  } else {
    return <SignIn></SignIn>;
  }
};

export default ProfilePage;
