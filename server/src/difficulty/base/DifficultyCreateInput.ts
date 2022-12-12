/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { ExerciseCreateNestedManyWithoutDifficultiesInput } from "./ExerciseCreateNestedManyWithoutDifficultiesInput";
import { Type } from "class-transformer";
@InputType()
class DifficultyCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  advanced?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  beginner?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  elite?: string | null;

  @ApiProperty({
    required: false,
    type: () => ExerciseCreateNestedManyWithoutDifficultiesInput,
  })
  @ValidateNested()
  @Type(() => ExerciseCreateNestedManyWithoutDifficultiesInput)
  @IsOptional()
  @Field(() => ExerciseCreateNestedManyWithoutDifficultiesInput, {
    nullable: true,
  })
  exercises?: ExerciseCreateNestedManyWithoutDifficultiesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  expert?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  intermediate?: string | null;
}
export { DifficultyCreateInput };