import { MockType } from './mock-type';
import { Repository } from 'typeorm';

export const repositoryMockFactory: <T>() => MockType<Partial<Repository<T>>> = jest.fn(() => {
    return {
        findOne: jest.fn(),
        find: jest.fn(),
        update: jest.fn(),
        save: jest.fn()
    };
});
