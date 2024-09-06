import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
// import { User } from './users/entities/user.entity';
import { PhotosModule } from './photos/photos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nestjs',
      password: 'nestjs123',
      database: 'nestjs',
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // DEV ONLY!!!
      // entities: [User],
      autoLoadEntities: true,
    }),
    UsersModule,
    PhotosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
