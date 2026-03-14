export const generateTokenAndSendCookie = (user, statusCode, res) => {

  const token = user.getJwtToken()

  const isProduction = process.env.NODE_ENV === "production"

  // ✅ FIXED: localhost needs secure:false and sameSite:'Lax'
  //           production (HTTPS) keeps secure:true and sameSite:'None'
  const cookieOptions = {
    httpOnly: true,
    sameSite: isProduction ? "None" : "Lax",
    secure:   isProduction ? true   : false,
    expires:  new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  }

  res.status(statusCode).cookie("token", token, cookieOptions).json({
    success: true,
    user
  })
}
