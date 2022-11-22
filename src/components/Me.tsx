import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Shoutout from "../models/Shoutout";
import { getToOrFromNameShoutouts } from "../services/shoutoutApiService";
import "./Me.css";

const Me = () => {
  const { user } = useContext(AuthContext);
  const [shoutouts, setShoutouts] = useState<Shoutout[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      getToOrFromNameShoutouts(user.displayName!).then((res) => {
        console.log(res);
        setShoutouts(res);
      });
    } else {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <ul className="Me">
      {shoutouts.map((shoutout) => (
        <li key={shoutout._id}>
          <p>To: {shoutout.to}</p>
          <p>From: {shoutout.from}</p>
          <img src={shoutout.profilePic} alt={shoutout.from} />
          <p>{shoutout.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default Me;
