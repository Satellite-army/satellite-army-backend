import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AlarmDocument = Alarm & Document;

@Schema()
export class Alarm {
    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop()
    breed: string;
}

export const AlarmSchema = SchemaFactory.createForClass(Alarm);
