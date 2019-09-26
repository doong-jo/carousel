const router = require("express").Router();

const authRouter = require("./auth");
const userRouter = require("./user");
const carouselRouter = require("./carousel");
const adminRouter = require("./admin");

const routes = {
    "/auth": authRouter,
    "/user": userRouter,
    "/carousel": carouselRouter,
    "/admin": adminRouter
};

for (const [path, route] of Object.entries(routes)) {
    router.use(path, route);
}

module.exports = router;
