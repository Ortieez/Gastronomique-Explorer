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

        return errors;
      }
    }
  };

  public async removePlaceById(id: string) {
    try {
      if(await Place.findById(id) === null) {
        return {message: 'Place not found'};
      }

      const place = await Place.findByIdAndDelete(id);
      return place;
    } catch (error) {
      if (error.name === "CastError") {
        return {message: 'Invalid id'};
      }
    }
  };

  public async getPlaceById(id: string) {
    try {
      const place = await Place.findById(id);

      if(place === null) {
        return {message: 'Place not found'};
      }

      return place;
    } catch (error) {
      if (error.name === "CastError") {
        return {message: 'Invalid id'};
      }
    }

  }

  public async updatePlaceById(id: string, place: any) {
    try {
      const placeToUpdate = await Place.findByIdAndUpdate(id, place, {new: true})

      return placeToUpdate;
    } catch (error) {
      if (error.name === "CastError") {
        return {message: 'Invalid id'};
      }

      if (error.name === "ValidationError") {
        let errors = {};
  
        Object.keys(error.errors).forEach((key) => {
          errors[key] = error.errors[key].message;
        });

        return errors;
      }
    }
  }

}
