import { UpdateableDTO } from "./updateable.dto";

export interface SlugeableDTO extends UpdateableDTO {
    id?: string;

    name: string;

    slug: string;

    image: string;
}