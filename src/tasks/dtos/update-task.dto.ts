import { IsBoolean, IsOptional, IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateTaskDto {
  @IsString()
  @Transform(({ value }) => (value as string).trim())
  @MinLength(1, { message: 'Title cannot be empty' })
  @IsOptional()
  title: string;

  @IsBoolean()
  @Transform(({ value }) => value === 'true' || value === true)
  @IsOptional()
  completed: boolean;
}
