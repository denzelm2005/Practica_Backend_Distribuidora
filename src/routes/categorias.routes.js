import { Router } from 'express';
import { obtenerCategorias,registrarCategoria } from '../controllers/categorias.controller.js';

const router = Router();

// Ruta para obtener todos las categorias
router.get('/categorias', obtenerCategorias);

// Ruta para registrar las categorias
router.post('/registrarcategoria', registrarCategoria);


export default router;