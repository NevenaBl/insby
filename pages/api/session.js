// // import { NextApiRequest, NextApiResponse } from "next";
// import axios from "axios";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { email, password, confirmPassword } = req.body;
//     // if (password !== confirmPassword) {
//     //   return res.status(400).json({ error: "Passwords do not match" });
//     // }
//     // Make a POST request to the provided endpoint with the user data
//     try {
//       const response = await axios.post(
//         "https://dev-mrp.insby.tech/api/session/customer-sign-in",
//         {
//           autoRegister: true,
//           email,
//           password,
//           confirmPassword,
//         }
//       );
//       res.status(200).json(response.data);
//     } catch (error) {
//       res.status(400).json({ error: "Registration failed" });
//     }
//   }
// }
