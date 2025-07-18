import { Router } from "express"
import {
    loginUser, 
    registerUser,
    logoutUser,
    getAuthStatus, 
    changePassword,
    verifyUser
} from "../controllers/auth.controller.js"
import { verifyUserJwtToken, authorizeRoles} from "../middlewares/auth.middleware.js";

const authRoute = Router();

authRoute.post("/signin", loginUser)
authRoute.post("/signup", registerUser)
authRoute.get("/verify-auth", verifyUserJwtToken, getAuthStatus) ; 
authRoute.get("/logout", verifyUserJwtToken,  logoutUser)
authRoute.get("/verify-account", verifyUser)

export default authRoute