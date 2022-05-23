import { Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm'
import { UpdateableEntity } from './updateable.abstract';
import { IsUUID, IsUrl, IsOptional, MinLength } from "class-validator";

export abstract class SlugeableEntity extends UpdateableEntity {

    @Column('varchar', { length: 255})
    @MinLength(4)
    name: string;

    @PrimaryColumn()
    @Column('varchar', { length:255, unique: true})
    slug: string;

    @Column('varchar', { length: 255, nullable: true })
    @IsUrl()
    @IsOptional()
    image: string;
}
