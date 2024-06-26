import express from "express";
import { Signale } from "signale";
import dotenv from 'dotenv';
import cors from "cors";
// import { userRouter } from "./product/infrastructure/UserRouter";
dotenv.config()

import { userRouter } from "./user/infrestucture/UserRouter";
import { subscriptionsRouter } from "./suscriptions/infestucture/subscriptionsRouter";
import { stationsRouter } from "./stations/infrstructure/StationsRouter";
import { accesRouter } from "./acces/Infrestructure/accesRouter";
const app = express();
const corsOptions: cors.CorsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
};
app.use(cors(corsOptions));

const signale = new Signale();
app.disable("x-powered-by");

app.use(express.json());
app.use("/users", userRouter);
app.use("/acces", accesRouter);
app.use("/subscriptions", subscriptionsRouter);
app.use("/stations", stationsRouter)


app.listen(3000, () => {
  signale.success("Server online in port 3000");
});
