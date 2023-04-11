const express = require("express");
const cors = require("cors");
const { ironSession } = require("iron-session/express");
const app = express();
const PORT = 8000;
const DB = "mernAuthDB"

require('dotenv').config();

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

require("./config/mongoose.config")(DB);
require("./routes/user.routes")(app);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));