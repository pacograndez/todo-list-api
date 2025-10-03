import { IsBoolean, IsOptional, IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiProperty({
    description: 'The updated title of the task',
    example: 'Finish the report',
    required: false,
  })
  @IsString()
  @Transform(({ value }) => (value as string).trim())
  @MinLength(1, { message: 'Title cannot be empty' })
  @IsOptional()
  title: string;

  @ApiProperty({
    description: 'The updated completion status of the task',
    example: true,
    required: false,
  })
  @IsBoolean()
  @Transform(({ value }) => value === 'true' || value === true)
  @IsOptional()
  completed: boolean;
}
