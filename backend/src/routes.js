const express = require("express");
const OngController = require("./controller/OngController");
const IncidentController = require("./controller/IncidentController");
const ProfileController = require("./controller/ProfileController");
const SessionController = require("./controller/SessionController");

const routes = express.Router();

//rotas session
routes.post("/sessions", SessionController.create);

//rotas ongs
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

//rotas incidents
routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

//rotas profile
routes.get("/profile", ProfileController.index);

module.exports = routes;