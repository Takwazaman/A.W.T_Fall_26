
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  Max,
  Min,
} from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/\S/)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/\S/)
  code: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/\S/)
  instructor: string;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(6)
  credits: number;

}