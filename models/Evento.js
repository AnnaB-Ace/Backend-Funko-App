const { Schema, model } = require("mongoose");
const EventoSchema = Schema({
  // title: {
  //   type: String,
  //   required: true,
  // },
  // notes: {
  //   type: String,
  // },
  // start: {
  //   type: Date,
  //   required: true,
  // },
  // end: {
  //   type: Date,
  //   required: true,
  // },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
EventoSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});
module.exports = model("Evento", EventoSchema);
// creo el modelo
