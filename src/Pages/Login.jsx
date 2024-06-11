import React, { useEffect, useState } from "react";
import useFetch from "../FetchApi/useFetch";
import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "../ContextApi/GlobalState";

const Login = () => {
  const { currentUser, setCurrentUser } = useContext(GlobalContext);
  const [user, setUser] = useState({
    username: "Hamid",
    password: "Hamidhamid",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  // const { data, loading, error } = useFetch({
  //   url: "http://localhost:8000/login",
  //   post: true,
  //   payLoad: user,
  // });

  const handleSubmit = async () => {
    try {
      setLoading(true);
      console.log(loading);
      const response = await axios.post("http://localhost:8000/login", user);

      setCurrentUser({ isAuthenticated: true, user: response.data });
      setLoading(false);
      console.log(loading);
    } catch (error) {
      setLoading(false);
      console.log(loading);
      setError(error);
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  return (
    <div className="mt-20">
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
