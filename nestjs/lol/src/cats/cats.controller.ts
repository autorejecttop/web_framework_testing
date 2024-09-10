import {
  // BadRequestException,
  Body,
  Controller,
  DefaultValuePipe,
  // ForbiddenException,
  Get,
  Header,
  HttpCode,
  // HttpStatus,
  // HttpException,
  // HttpStatus,
  // ImATeapotException,
  Param,
  ParseBoolPipe,
  // ParseIntPipe,
  // ParseUUIDPipe,
  Post,
  Query,
  // Redirect,
  // HttpRedirectResponse,
  // Req,
  // UsePipes,
  // UseFilters,
} from '@nestjs/common';
// import { errorCodes, FastifyRequest } from 'fastify';
import { CatsService } from './cats.service';
// import { ZodValidationPipe } from 'src/pipes/zod-validation.pipe';
import {
  CreateCatDto,
  // createCatSchema
} from './dto/create-cat.dto';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { ParseIntPipe } from 'src/pipes/parse-int.pipe';
// import { ForbiddenException } from 'src/forbidden.exception';
// import { HttpExceptionFilter } from 'src/http-exception.filter';

// @UseFilters(HttpExceptionFilter)
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @HttpCode(201)
  @Header('Cache-Control', 'none')
  @Post()
  // @UsePipes(new ZodValidationPipe(createCatSchema))
  // create(@Body() createCatDto: CreateCatDto) {
  create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    // return 'This action adds a new cat';
    this.catsService.create(createCatDto);
  }

  // @Get('*')
  // @Redirect('https://nestjs.com', 301)
  @Get()
  @HttpCode(200)
  // @UseFilters(HttpExceptionFilter)
  // findAll(@Req() request: FastifyRequest) {
  // findAll(
  //   @Query('activeOnly', new DefaultValuePipe(false), ParseBoolPipe)
  //   activeOnly: boolean,
  //   @Query('page', new DefaultValuePipe(0), ParseIntPipe) page: number,
  // )
  findAll() {
    // return await new Promise((resolve) =>
    //   setTimeout(() => resolve('This action returns all cats'), 1000),
    // );
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    // try {
    //   await this.catsService.findAll();
    // } catch (error) {
    //   throw new HttpException(
    //     {
    //       status: HttpStatus.FORBIDDEN,
    //       error: 'This is a custom message',
    //     },
    //     HttpStatus.FORBIDDEN,
    //     {
    //       cause: error,
    //     },
    //   );
    // }
    // throw new ForbiddenException();

    // throw new BadRequestException('Something bad happened', {
    //   cause: new Error(),
    //   description: 'lol',
    // });

    // throw new Error('lol');

    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      ParseIntPipe,
      // ParseIntPipe,
      // new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
      // new ParseUUIDPipe({ version: '7' }),
    )
    id: number,
  ) {
    console.log(id);

    // throw new ImATeapotException();
    // return `This action returns a #${id} cat`;
    return this.catsService.findOne(id);
  }
}
