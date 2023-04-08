import Place from '../models/PlaceModel';

export class PlaceService {
  public async getAllPlaces() {
    const places = await Place.find({}); 
    return places;
  };

  public async createPlace(place: any) {
    try {
      const newPlace = await Place.create(place);
      return newPlace;
    } catch (error) {
      if (error.name === "ValidationError") {
        let errors = {};
  
        Object.keys(error.errors).forEach((key) => {
          errors[key] = error.errors[key].message;
        });
        
        if(!place.image) {
          errors['image'] = 'Image is missing but is not required';
        }
        return errors;
      }
    }
  };
}
