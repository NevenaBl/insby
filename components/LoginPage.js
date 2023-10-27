import { useState } from "react";
import Link from "next/link";
import classes from "./LoginPage.module.css";

function Login() {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = { ...formData, autoRegister: false };
    const headers = {
      Authorization:
        "Bearer QTEyOEdDTQ.b5YoIw8xqRqTdw8AhWp6iOc3qGzNTnu2LTR12t0RvyCFTPVHegzzPAp15Y0.xfPRqmp3xPK0EggV.TdP-co4_P1soGSwRNeTocRqEXsFsZvVr03mDhjYWY1yVyWy5b9Y-NuHYiLPbzqhj9D5Pk1GfsAs7fsoC2gsUkPXJUvGz80H5GytroXNSTwPn0t9mTldeaj6eoUoBadZnEJUcU9oDoe_fLxxNnr5gASb9BTyZV1lhYCRscrXQXLHZWYEQpqn9gSlBtjzvFyryIVXRHyAThe_0KQ.PLEUqwN1ehH4SwmWXmJITQ",
      "Content-Type": "application/json",
    };

    fetch("https://dev-mrp.insby.tech/api/session/customer-sign-in", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log("response", response);
          return response.json();
        } else {
          throw new Error("Failed to check user");
        }
      })
      .then((userData) => {
        console.log("podaci iz response", userData);
        // Check if the user data matches the provided email, but not password
        if (userData.data.customer.email === formData.login) {
          window.location.href = "/";
        } else {
          console.error("Invalid credentials");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className={classes.login}>
      <div className={classes.image_frame}>
        <img className={classes.image} src="login_image-removebg-preview.png" />
      </div>
      <div className={classes.form}>
        <div className={classes.title}>
          <h1>Login</h1>
        </div>
        <form onSubmit={handleLogin}>
          <label>Email address</label>
          <input
            className={classes.input}
            type="email"
            name="login"
            value={formData.login}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            className={classes.input}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />{" "}
          <button type="submit" className={classes.login_btn}>
            Login
          </button>
        </form>
        <div className={classes.action_text}>
          <p className={classes.account}>Don't have an account?</p>
          <Link href="/signup">
            <a className={classes.register_btn}>Register</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
