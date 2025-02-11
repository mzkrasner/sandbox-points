import express from "express";
import cors from "cors";
import path from "path";
import singleRouter from "./routes/single";
import multiRouter from "./routes/multi";

const app = express();
const port = 8080; // default port to listen

app.use(express.json());
app.use(cors());
// app.use(bodyParser.json());

const allowCrossDomain = (
  req: any,
  res: { header: (arg0: string, arg1: string) => void },
  next: () => void
) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(allowCrossDomain);

app.use("/single", singleRouter);
app.use("/multi", multiRouter);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
