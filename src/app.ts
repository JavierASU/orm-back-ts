import * as express from "express";
import * as morgan from "morgan";
import * as cors from "cors";
import userRoutes from "./routes/user.routes";
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(userRoutes);

export default app;
