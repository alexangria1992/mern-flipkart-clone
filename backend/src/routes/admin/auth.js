const express = require("express")
const router = express.Router()
const {signup, signin, requireSignin} = require("../../controller/admin/auth")
const {validateSignupRequest, isRequestValidated, validateSigninRequest} = require("../../validators/auth")

router.post("/admin/signup", validateSignupRequest, isRequestValidated, signup)

router.post("/admin/signin", isRequestValidated, validateSigninRequest, signin)




module.exports = router