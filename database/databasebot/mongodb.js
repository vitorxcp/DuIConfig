const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const c = require("colors")
const path = require("path");
	const Logger = require("../../Logger");
    this.logger = new Logger(path.join(__dirname, ".", "Logs.log"));
mongoose.connect(process.env.mongo_token, { useUnifiedTopology: true, useNewUrlParser: true }, (erro) => {
    if (erro) return this.logger.database_erro("Erro, "+c.green("MongoDB")+" Não Conectado.");
    this.logger.database(""+c.green("MongoDB")+" Conectado.");
});
let Bot = new Schema({
  _id: {
    type: String,
    required: true
  },
  server:{
    type: String,
    default: 0
  },
  desc: {
    type: Number,
    default: 0
  },
  urlpessoa: {
    type: String,
    default: 0
  },
  pessoa: {
    type: Number,
    default: 0
  },
  pessoa: {
    type: String,
    default: 0
  },
  level: {
    type: Number,
    default: 0
  },
  xp: {
    type: Number,
    default: 0
  },
  boton: {
    type: String,
     default: 0
  },
  cmdUsd: {
    type: Number,
    default: 0
  },
  uptime: {
    type: Number,
    default: 0
  },
  uptimo2: {
    type: Number,
    default: 0
  },
  srvs: {
    type: String,
    default: 0
  },
  users: {
    type: String,
    default: 0
  },
  ping: {
    type: Number,
    default: 0
  },
  pong2: {
    type: Number,
    default: 0
  }
});
let Bots = mongoose.model("Bots", Bot)
exports.Bots = Bots;
