import { Router } from 'express';
import { obtenerComprasConDetalles, obtenerCompras } from '../controllers/compras.controller.js';

const router = Router();

// Ruta para obtener todas las compras con detalles
router.get('/compras', obtenerComprasConDetalles);

// Ruta para obtener todas las ventas
router.get('/obtenercompras', obtenerCompras);

export default router;