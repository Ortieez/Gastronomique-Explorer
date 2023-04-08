import mongoose, { Schema, Document } from 'mongoose';

export interface Place extends Document {
    name: string;
    description: string;
    address: string;
    longtitude: number;
    latitude: number;
    image: Buffer;
}

const PlaceSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    longtitude: { type: Number, required: true },
    latitude: { type: Number, required: true },
    image: { type: Buffer, required: false, contentType: String },
});

export default mongoose.model<Place>('Place', PlaceSchema);