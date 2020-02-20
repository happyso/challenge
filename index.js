import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req,res) => res.send("Hello from Home");
const handleProfile = (req, res) => res.send("You are on my profile");
const handleAboutus = (req, res) => res.send("About us");
const handleContact = (req, res) => res.send("Contact");
const handleProtected = (req, res) => res.send("Protected!!");
  
const betweenAll = (req, res, next) => {
    console.log("I'm a middleware");
    next();
};
  
const middleware = (req, res, next) => {
    res.redirect('/');
};
app.use(betweenAll);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.get("/about-us", handleAboutus);
app.get("/contact", handleContact);
app.get("/protected",middleware, handleProtected);

app.listen(PORT, handleListening);

