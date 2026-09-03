import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useHello } from "../context/HelloContext";
import { useBio } from "../context/BioContext";

function ProfilePage() {
  const { userProfile } = useAuth();
  const greeting = useHello();
  const { name, age } = useBio();

  useEffect(() => {
    console.log(userProfile);
  }, [userProfile]);

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Greeting: {greeting}</p>
    </div>
  );
}

export default ProfilePage;
