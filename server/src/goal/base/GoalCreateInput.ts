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
import {
  IsInt,
  IsOptional,
  IsNumber,
  IsDate,
  ValidateNested,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { ExerciseWhereUniqueInput } from "../../exercise/base/ExerciseWhereUniqueInput";
import { TrainingPlanCreateNestedManyWithoutGoalsInput } from "./TrainingPlanCreateNestedManyWithoutGoalsInput";
@InputType()
class GoalCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  currentReps?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  currentWeight?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  deadline?: Date | null;

  @ApiProperty({
    required: false,
    type: () => ExerciseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ExerciseWhereUniqueInput)
  @IsOptional()
  @Field(() => ExerciseWhereUniqueInput, {
    nullable: true,
  })
  exercise?: ExerciseWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  motivation?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  targetReps?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  targetWeight?: number | null;

  @ApiProperty({
    required: false,
    type: () => TrainingPlanCreateNestedManyWithoutGoalsInput,
  })
  @ValidateNested()
  @Type(() => TrainingPlanCreateNestedManyWithoutGoalsInput)
  @IsOptional()
  @Field(() => TrainingPlanCreateNestedManyWithoutGoalsInput, {
    nullable: true,
  })
  trainingPlans?: TrainingPlanCreateNestedManyWithoutGoalsInput;
}
export { GoalCreateInput };