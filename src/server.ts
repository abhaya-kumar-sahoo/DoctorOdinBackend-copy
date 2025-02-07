import bodyParser from "body-parser";
import express from "express";
import { connectDB } from "@Odin/db/mongodb";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import router from "@Odin/routes/router";
import cors from "cors";
import path from "path";
const app = express();
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views")); // Set the views directory
// app.use(express.static(path.join(__dirname, "public")));

require("dotenv").config();

const PORT = process.env.PORT || 3000;
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// console.log(process.env.JWT_SECRET);
app.use("/", router);
app.use(bodyParser.json());

connectDB();
// const swaggerDefinition = {
//   openapi: "3.0.0",
//   info: {
//     title: "Express API for JSONPlaceholder",
//     version: "1.0.0",
//     description:
//       "This is a REST API application made with Express. It retrieves data from JSONPlaceholder.",
//   },
//   authAction: {
//     JWT: {
//       name: "JWT",
//       schema: {
//         type: "apiKey",
//         in: "header",
//         name: "Authorization",
//         description: "",
//       },
//       value: "Bearer <JWT>",
//     },
//   },
//   servers: [
//     {
//       url: "http://localhost:3000",
//       description: "Development server",
//     },
//   ],
// };

// const options = {
//   swaggerDefinition,
//   apis: [`${__dirname}/swagger/*`],
// };
// const swaggerSpec = swaggerJSDoc(options);

// app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", async (req, res) => {
  res.json({ fine: true, description: "Ok" });
});

// app.get("/", (req, res) => {
//   res.json({
//     message:
//       "Everything is Good 🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹 ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅ 🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹",
//     project_name: "Odin_Nodejs Backend",
//     dev_name: "A.K Sahoo",
//   });
// });
app.get("/health", (req, res) => {
  res.status(200).json({
    message: "Everything is Good 💐💐💐💐💐💐💐 🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹",
    project_name: "Odin_Nodejs Backend",
    dev_name: "Abhaya Kumar Sahoo",
  });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
