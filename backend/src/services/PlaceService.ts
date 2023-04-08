import Place from '../models/PlaceModel';

export class PlaceService {
  public async getAllPlaces() {
    const places = await Place.find({}); 
    return places;
  };
}
