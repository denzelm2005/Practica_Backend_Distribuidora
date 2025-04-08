import { Router } from 'express';
import { obtenerClientes, obtenerCliente, registrarCliente } from '../controllers/clientes.controller.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/clientes', obtenerClientes);

// Ruta para obtener un cliente por ID
router.get('/clientes/:id', obtenerCliente);

// Ruta para registrar un nuevo cliente
router.post('/registrarcliente', registrarCliente);

export default router;