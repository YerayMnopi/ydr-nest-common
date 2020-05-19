import { MockType } from '../testing/mock-type';
import { Repository } from 'typeorm';

export const userRepositoryMockFactory: () => MockType<Partial<Repository<any>>> = jest.fn(() => ({
    findOne: jest.fn(),
    find: jest.fn(),
    update: jest.fn(),
    save: jest.fn()
   }));