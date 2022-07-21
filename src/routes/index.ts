import { Router } from "express";
import { translationRoutes } from "./translation.route";

const router = Router();

router.use("/translation", translationRoutes);

export { router };
