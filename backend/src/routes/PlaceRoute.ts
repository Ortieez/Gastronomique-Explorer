import express = require('express');
import PlaceController from '../controllers/PlaceController';

const router = express.Router();
const placeController = new PlaceController();

router.get('/', async (req, res) => placeController.getPlaces(req, res));
router.post('/', async (req, res) => placeController.createPlace(req, res));

export default router;