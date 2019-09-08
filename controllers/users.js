import  models  from "../models/index";

function createUser(req, res) {
  return models.User.create({
    name: req.body.email,
    password: req.body.password
  })
    .then(user => res.status(200).send(user))
    .catch(error => res.status(400).send(error));
}

function findAllUsers(req, res) {
  return models.User.findAll()
  .then(users => {
    res.status(200).send(users)
  })
  .catch(error => console.log(error))
}

export { createUser, findAllUsers }
