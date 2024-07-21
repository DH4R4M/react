import { useState } from "react";
import Swal from "sweetalert2";
import "./LoginSignup.css";

function LoginSignup() {
  const [state, setState] = useState("Signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [arr, setArr] = useState([]);

  const handleClick = () => {
    if (!name || !email || !password) {
      Swal.fire("Error", "All fields are required for signup", "error");
      return;
    }

    let isEmailPresent = arr.some((user) => user.email === email);
    if (isEmailPresent) {
      Swal.fire("Error", "Email is already registered", "error");
      return;
    }

    let obj = {
      username: name,
      email: email,
      pass: password,
    };
    setArr([...arr, obj]);
    Swal.fire("Signup Successful");

    setName("");
    setEmail("");
    setPassword("");
  };

  const handleLoginClick = () => {
    let data = arr.filter((el) => {
      return el.email === loginEmail && el.pass === loginPass;
    });
    if (data.length > 0) {
      Swal.fire("Login Successful");
    } else {
      Swal.fire("Login Unsuccessful", "Invalid email or password", "error");
    }
  };

  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="container">
        <h3>{state === "Signup" ? "Signup Here" : "Login Here"}</h3>

        {state === "Signup" ? (
          <>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="User Name"
              value={name}
              onChange={(d) => setName(d.target.value)}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(d) => setEmail(d.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(d) => setPassword(d.target.value)}
            />

            <button type="button" onClick={handleClick}>
              Signup
            </button>
            <p onClick={() => setState("Login")}>
              Already have an account? Login
            </p>
          </>
        ) : (
          <>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={loginPass}
              onChange={(e) => setLoginPass(e.target.value)}
            />

            <button type="button" onClick={handleLoginClick}>
              Login
            </button>
            <p onClick={() => setState("Signup")}>Create an account</p>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginSignup;
