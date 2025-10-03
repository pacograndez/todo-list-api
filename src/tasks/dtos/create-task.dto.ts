import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({
    description: 'The title of the task',
    example: 'Learn NestJS',
  })
  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  title: string;
}
