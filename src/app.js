import "dotenv/config";
import express from "express";
import cors from "cors";
import routes from "../routes/index";
import models from "../models";

const app = express();

const port = process.env.PORT || 8000;

models.sequelize
  .sync()
  .then(() => console.log("Database working as expected"))
  .catch(error => console.log(error));

app.use(cors());

app.use((req, res, next) => {
  //Req.content passes hello content to all routes
  //e.g. Req.content is available to all routes
  req.content = "hello context";
  next();
});

//Only need to define one route
//Using app.use and the place of request e.g. /users

app.use("/users", routes.users);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
