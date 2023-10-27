import { useState } from "react";
import Link from "next/link";
import classes from "./SignupPage.module.css";

function Signup() {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const data = { ...formData, autoRegister: true };
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
          return response.json();
        } else {
          throw new Error("Failed to send data");
        }
      })
      .then((responseData) => {
        console.log("Request successful:", responseData);
        window.location.href = "/login";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className={classes.signup}>
      <div className={classes.image_frame}>
        <img
          className={classes.image}
          src="signup_image-removebg-preview.png"
        />
      </div>
      <div className={classes.form}>
        <div className={classes.title}>
          <h1>Sign up</h1>
          <p>Enter your details to get started.</p>
        </div>
        <form method="post" onSubmit={handleSignUp}>
          <label>Email</label>
          <input
            className={classes.input}
            type="email"
            name="login"
            value={formData.login}
            onChange={handleChange}
            required
          />
          <label>Create a password</label>
          <input
            className={classes.input}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label>Confirm password</label>
          <input
            className={classes.input}
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit" className={classes.signup_btn}>
            Sign up
          </button>
        </form>
        <div className={classes.action_text}>
          <p className={classes.account}>Already have an account?</p>
          <Link href="/login">
            <a className={classes.login_btn}>Log in</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
