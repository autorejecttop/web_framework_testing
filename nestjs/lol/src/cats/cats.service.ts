import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    // throw new Error('Lol');
    return this.cats;
  }

  findOne(id: number) {
    return this.cats[id];
  }
}
