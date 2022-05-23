import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisCacheService {
    private readonly cacheLifeTime = 300;
  constructor(
    @Inject(CACHE_MANAGER) private readonly cache: Cache,
  ) {}

  async get(key: string): Promise<any> {
    await this.cache.get(key);
  }

  async set(key: string, value: any): Promise<any> {
    await this.cache.set(key, value, {ttl: this.cacheLifeTime});
  }
}