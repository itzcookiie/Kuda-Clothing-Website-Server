import { Router } from "express";
import { createUser, findAllUsers } from "../controllers/index.js";

//Example of how to modularise routers
//Set up all routing here using router
//Each router has it's own file. Sick.

const router = Router();

router.get("/", findAllUsers);

router.get('/:userId', findAllUsers)

router.post("/", createUser);

router.put("/:userId", (req, res) => {
  res.send("Change user");
});

router.delete("/:userId", (req, res) => {
  res.send("Delete user");
});

export default router;
