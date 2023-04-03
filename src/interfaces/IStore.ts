import { StaticImageData } from 'next/image';
import { IItem } from './IItem';

export interface IStore {
    id: number;
    name: String;
    note: number;
    timeToDeliver: number;
    category: String;
    image: StaticImageData;
    items: IItem[];
}