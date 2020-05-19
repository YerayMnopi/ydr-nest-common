import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository, DeepPartial } from 'typeorm';

export abstract class BaseService<T> extends TypeOrmCrudService<T> {
    constructor(repo: Repository<T>) {
        super(repo);
    };

    async getOrCreate(where: DeepPartial<T>, defaultObject: DeepPartial<T>): Promise<T> {
        let entity = await this.repo.findOne({where: where});

        if (!entity) {
            entity = await this.repo.save(defaultObject);
        }

        return entity;
    }
}