const { ironSession } = require("iron-session/express");
const express = require("express");
const cors = require("cors");

require('dotenv').config();
require("./config/mongoose.config");

const PORT = process.env.PORT;
const app = express();

app.use(
    cors({credentials: true, origin: "http://localhost:3000"}), 
    express.urlencoded({ extended: true }), 
    express.json(),
    ironSession({
        cookieName: "UserCookie",
        password: process.env.COOKIE_SECRET,
        cookieOptions: { secure: process.env.NODE_ENV === "production" }
    })
);

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/users', require('./routes/user.routes'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));