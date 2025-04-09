import { IsNumber, IsOptional, IsPositive, IsString, MaxLength, MinLength } from "class-validator";

export class CreateDealDto {
  
  @IsString()
  @MinLength(3)
  title: string;

  @IsString()
  @MaxLength(100)
  description: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  price: number
}
