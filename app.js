import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";

const app = express();

const handleHome = (req,res) => res.send("Hello from Home");
const handleProfile = (req, res) => res.send("You are on my profile");
const handleAboutus = (req, res) => res.send("About us");
const handleContact = (req, res) => res.send("Contact");
const handleProtected = (req, res) => res.send("Protected!!");
  

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);
app.use("/user", userRouter);
app.get("/profile", handleProfile);
app.get("/about-us", handleAboutus);
app.get("/contact", handleContact);



export default app;