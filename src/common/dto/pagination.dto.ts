import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @IsInt()
  @Type(() => Number)
  readonly limit?: number;

  @IsOptional()
  @Min(0)
  @IsInt()
  @Type(() => Number)
  readonly offset?: number;
}
