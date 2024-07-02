import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { ContentNew } from "./ContentNew";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setuserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "your user name is",
      username,
      "and your password is",
      password
    );
    alert(`your username is ${username} and password is ${password}`);
    // setuserName((pre) => (pre.length > 0 ? "" : pre));
    // setPassword((pre) => (pre.length > 0 ? "" : pre));
    window.location.reload();
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div
        style={{
          textAlign: "center",
          width: "auto",
          padding: "0px 250px",
          paddingTop: "100px",
          color: "teal",
        }}
      >
        <h2>Login Page</h2>
      </div>
      <div style={{ width: "auto", padding: "0px 250px" }}>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <lebel style={{ paddingBottom: "10px",color:"gray" }}>User Name :</lebel>
          <input
            type="text"
            placeholder="enter user name"
            onChange={(e) => {
              setuserName(e.target.value);
            }}
            style={{width:"auto",
                height:"25px",
                border:"1px solid gray",
                borderRadius:"4px",
                paddingLeft:"5px"
            }}
          ></input>

          <lebel style={{ padding: "10px 0px",color:"gray" }}>Password :</lebel>
          <input
            type="password"
            placeholder="enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            style={{width:"auto",
                height:"25px",
                border:"1px solid gray",
                borderRadius:"4px",
                paddingLeft:"5px"
            }}
          ></input>
          <button type="submit" style={{ 
            marginTop: "15px",
            backgroundColor:"#3d4ecf",
            color:"#fff",
            border:"none",
            borderRadius:"4px",
            padding:"4px 3px",
            cursor:"pointer",
            fontSize:"18px",
            fontWeight:"600" }}>
            Login
          </button>
        </form>

        <Link to="/register">
        <button style={{ 
            marginTop: "15px",
            backgroundColor:"green",
            color:"#fff",
            border:"none",
            borderRadius:"4px",
            padding:"4px 3px",
            cursor:"pointer",
            fontSize:"18px",
            fontWeight:"600",
            width:"auto" }}>
            Register
          </button>
          </Link>
      </div>
      <ContentNew />
    </div>
  );
}
