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
            req.body.image = fs.readFileSync(path.join(__dirname, '..', 'assets', 'placeholder.jpg'), { encoding: 'base64' });
        }

        const place = await this.placeService.createPlace(req.body);
        res.json(place);
    }

    public async removePlace(req: Request, res: Response) {
        if (req.body.id === undefined || req.body.id === null || req.body.id === '') {
            res.status(400).json({ message: 'Id is required' });
            return;
        }

        const place = await this.placeService.removePlaceById(req.body.id);
        res.json(place);
    }

    public async getPlaceById(req: Request, res: Response) {
        if (req.body.id === undefined || req.body.id === null || req.body.id === '') {
            res.status(400).json({ message: 'Id is required' });
            return;
        }

        const place = await this.placeService.getPlaceById(req.body.id);
        res.json(place);
    }

    public async updatePlaceById(req: Request, res: Response) {
        if (req.body.id === undefined || req.body.id === null || req.body.id === '') {
            res.status(400).json({ message: 'Id is required' });
            return;
        }        

        if (req.files !== undefined && req.files.length !== 0) {
                req.body.image = Buffer.from(req.files[0].buffer).toString('base64');
        } 

        const place = await this.placeService.updatePlaceById(req.body.id, req.body);

        if (place === null) {
            res.status(400).json({ message: 'Place not found' });
            return;
        }
        
        res.json(place);
    }
}

export default PlaceController;