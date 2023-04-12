import mongoose, { Schema, Document } from 'mongoose';

export interface Place extends Document {
    name: string;
    description: string;
    address: string;
    longtitude: number;
    latitude: number;
    image: String;
}

const PlaceSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    longtitude: { type: Number, required: true },
    latitude: { type: Number, required: true },
    image: { type: String, required: false },
});

export default mongoose.model<Place>('Place', PlaceSchema);