import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from 'generated/prisma';

@Controller('users')
export class UsersController {
  public constructor(private readonly usersService: UsersService) {}

  @Post('register')
  createTask(@Body() createUserkDto: CreateUserDto): Promise<User> {
    console.log(createUserkDto);
    return this.usersService.createUser(createUserkDto); // 'This action adds a new user';
  }
}
