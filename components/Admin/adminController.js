const { Router } = require("express");

const adminService = require("./adminService");

const ruta = Router();

ruta.get("/", async (req, res) => {
  try {
    const admin = await adminService.obtenerInfo();

    res.status(200).json({
      error: null,
      mensaje: "Admin obtenido",
      datos: admin,
    });
  } catch (err) {
    res.status(500).json({
      error: "Error inesperado",
      mensaje: err.message,
      datos: null,
    });
  }
});

ruta.patch("/", async (req, res) => {
  try {
    const admin = await adminService.actualizarInfo(req);
    res.status(200).json({
      error: null,
      mensaje: "Admin actualizado con exito",
      datos: admin,
    });
  } catch (err) {
    res.status(500).json({
      error: "No se pudo realizar la operacion",
      mensaje: err.message,
      datos: null,
    });
  }
});

module.exports = ruta;
