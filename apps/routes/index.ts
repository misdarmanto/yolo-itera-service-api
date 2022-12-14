import express, { Express, Request, Response } from "express";
import { index } from "../controllers";
import { VEHICLE } from "../controllers/vehicle";
import { USER } from "../controllers/user";
import { middleware } from "../middlewares";
import { TRAFFICS } from "../controllers/traffics";
import { STATISTIC } from "../controllers/statistic";
import { ADMIN } from "../controllers/admin";

export const route = (app: Express) => {
    app.get("/", (req: Request, res: Response) => index(req, res));

    const statisticRouter = express.Router();
    app.use("/statistic", middleware.useAuthorization, statisticRouter);
    statisticRouter.get("/", (req: Request, res: Response) => STATISTIC.all(req, res));

    const userRouter = express.Router();
    app.use("/users", middleware.useAuthorization, userRouter);
    userRouter.post("/", (req: Request, res: Response) => USER.create(req, res));
    userRouter.get("/", (req: Request, res: Response) => USER.single(req, res));
    userRouter.get("/list", (req: Request, res: Response) => USER.list(req, res));
    userRouter.patch("/", (req: Request, res: Response) => USER.update(req, res));
    userRouter.delete("/", (req: Request, res: Response) => USER.delete(req, res));

    const adminRouter = express.Router();
    app.use("/admin", middleware.useAuthorization, adminRouter);
    adminRouter.get("/list", (req: Request, res: Response) => ADMIN.list(req, res));
    adminRouter.post("/login", (req: Request, res: Response) => ADMIN.login(req, res));
    adminRouter.post("/register", (req: Request, res: Response) => ADMIN.register(req, res));
    adminRouter.get("/logout", (req: Request, res: Response) => ADMIN.logout(req, res));

    const vehicleRouter = express.Router();
    app.use("/vehicles", middleware.useAuthorization, vehicleRouter);
    vehicleRouter.get("/list", (req: Request, res: Response) => VEHICLE.list(req, res));
    vehicleRouter.get("/", (req: Request, res: Response) => VEHICLE.single(req, res));
    vehicleRouter.post("/", (req: Request, res: Response) => VEHICLE.create(req, res));
    vehicleRouter.patch("/", (req: Request, res: Response) => VEHICLE.update(req, res));
    vehicleRouter.delete("/", (req: Request, res: Response) => VEHICLE.delete(req, res));

    const trafficRouter = express.Router();
    app.use("/traffics", middleware.useAuthorization, trafficRouter);
    trafficRouter.post("/verify", (req: Request, res: Response) => TRAFFICS.verify(req, res));
    trafficRouter.get("/list", (req: Request, res: Response) => TRAFFICS.list(req, res));
    trafficRouter.get("/", (req: Request, res: Response) => TRAFFICS.single(req, res));
};
