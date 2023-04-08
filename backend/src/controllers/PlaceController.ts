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
}

export default PlaceController;