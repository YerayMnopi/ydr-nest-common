import { Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm'
import { UpdateableEntity } from './updateable.abstract';
import { IsUUID, IsUrl, IsOptional } from "class-validator";

export abstract class SlugeableEntity extends UpdateableEntity {
    @PrimaryGeneratedColumn('uuid')
    @IsUUID()
    id: string;

    @Column('varchar', { length: 255, unique: true})
    name: string;

    @PrimaryColumn()
    @Column('varchar', { length:255, unique: true})
    slug: string;

    @Column('varchar', { length: 255, nullable: true })
    @IsUrl()
    @IsOptional()
    image: string;
}
