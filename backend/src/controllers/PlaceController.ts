import { PlaceService } from '../services/PlaceService';
import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';


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
        if (req.files !== undefined) {
            req.body.image = Buffer.from(req.files[0].buffer).toString('base64');
        } else {
            req.body.image =  fs.readFileSync(path.join(__dirname, '..', 'assets', 'placeholder.jpg'), {encoding: 'base64'});
        }
        
        const place = await this.placeService.createPlace(req.body);
        res.json(place);
    }
}

export default PlaceController;