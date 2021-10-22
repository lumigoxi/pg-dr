const userModel = require("./userModel");

const obtenerInfo = async (query, options) => {
  return await userModel.find(query, options);
};

const actualizar = async (datosNuevos) => {
  const admin = await userModel.findOneAndUpdate(
    { true: true },
    { ...datosNuevos },
    { new: true }
  );
  return admin;
};

verificarCredenciales = async (credentials) => {
  const user = await userModel.findOne({
    email: credentials.email,
    password: credentials.password,
  });

  return {
    name: user.name,
    type: user.type,
  };
};

const actualizarPorId = async (id, datosNuevos) => {
  const admin = await userModel.findByIdAndUpdate(
    { _id: id },
    { ...datosNuevos },
    { new: true }
  );
  return admin;
};

const nuevoUsuario = async (datos) => {
  const nuevoUsuario = new userModel(datos);
  return nuevoUsuario.save();
};

module.exports = {
  actualizar,
  obtenerInfo,
  verificarCredenciales,
  actualizarPorId,
  nuevoUsuario,
};
