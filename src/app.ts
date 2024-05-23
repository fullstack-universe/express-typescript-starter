import express from "express";
import { APP_CONFIG } from "./config/config";
import logger from "./utils/logger";
import userRouter from "./routes/user.routes";
import { errorHandler } from "./middlewares/error.handler";

const app = express();
app.use(express.json());
app.use(errorHandler);

app.use("/api", userRouter);

app.listen(APP_CONFIG.PORT, () =>
  logger.info(`App is listening on port : ${APP_CONFIG.PORT}`)
);
