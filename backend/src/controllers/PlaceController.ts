import { PlaceService } from '../services/PlaceService';
import { Request, Response } from 'express';

class PlaceController {
    private placeService: PlaceService;

    constructor() {
        this.placeService = new PlaceService();                
    }

    public async getPlaces(req: Request, res: Response) {
        const places = await this.placeService.getAllPlaces();
        res.json(places);
    }

    public async createPlace(req: Request, res: Response) {
        const place = await this.placeService.createPlace(req.body);
        res.json(place);
    }
}

export default PlaceController;