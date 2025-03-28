import express from "express"
import {signup,login,logout} from "../controllers/auth.controller.js"




const router = express.Router();

router.get("/test", (req, res) => {
   res.json({ message: "Auth route is working!" });
   });

/*
router.post("/signup", (req, res) => {
    res.send("signup route");
});
*/

router.post("/signup",signup);

router.post("/login",login);

router.post("/logout",logout);

export default router;