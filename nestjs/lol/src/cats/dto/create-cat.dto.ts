// import { z } from 'zod';

import { IsInt, IsString } from 'class-validator';

// export const createCatSchema = z
//   .object({
//     name: z.string(),
//     age: z.number(),
//     breed: z.string(),
//   })
//   .required();

export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;
}

// export type CreateCatDto = z.infer<typeof createCatSchema>;
