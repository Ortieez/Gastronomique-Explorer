import express = require('express');
import PlaceController from '../controllers/PlaceController';

const router = express.Router();
const placeController = new PlaceController();

router.get('/getAllPlaces', async (req, res) => placeController.getPlaces(req, res));
router.get('/getPlace', async (req, res) => placeController.getPlaceById(req, res));
router.post('/createPlace', async (req, res) => placeController.createPlace(req, res));
router.delete('/removePlace', async (req, res) => placeController.removePlace(req, res));
router.put('/updatePlace', async (req, res) => placeController.updatePlaceById(req, res));

export default router;