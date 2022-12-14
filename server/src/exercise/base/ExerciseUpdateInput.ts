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
import { DifficultyWhereUniqueInput } from "../../difficulty/base/DifficultyWhereUniqueInput";
import { Type } from "class-transformer";
import { ExerciseLogUpdateManyWithoutExercisesInput } from "./ExerciseLogUpdateManyWithoutExercisesInput";
import { GoalUpdateManyWithoutExercisesInput } from "./GoalUpdateManyWithoutExercisesInput";
import { TrainingPlanUpdateManyWithoutExercisesInput } from "./TrainingPlanUpdateManyWithoutExercisesInput";
@InputType()
class ExerciseUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => DifficultyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DifficultyWhereUniqueInput)
  @IsOptional()
  @Field(() => DifficultyWhereUniqueInput, {
    nullable: true,
  })
  difficulty?: DifficultyWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  equipmentNeeded?: string;

  @ApiProperty({
    required: false,
    type: () => ExerciseLogUpdateManyWithoutExercisesInput,
  })
  @ValidateNested()
  @Type(() => ExerciseLogUpdateManyWithoutExercisesInput)
  @IsOptional()
  @Field(() => ExerciseLogUpdateManyWithoutExercisesInput, {
    nullable: true,
  })
  exerciseLogs?: ExerciseLogUpdateManyWithoutExercisesInput;

  @ApiProperty({
    required: false,
    type: () => GoalUpdateManyWithoutExercisesInput,
  })
  @ValidateNested()
  @Type(() => GoalUpdateManyWithoutExercisesInput)
  @IsOptional()
  @Field(() => GoalUpdateManyWithoutExercisesInput, {
    nullable: true,
  })
  goals?: GoalUpdateManyWithoutExercisesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  imageLink?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  targetbodyPart?: string | null;

  @ApiProperty({
    required: false,
    type: () => TrainingPlanUpdateManyWithoutExercisesInput,
  })
  @ValidateNested()
  @Type(() => TrainingPlanUpdateManyWithoutExercisesInput)
  @IsOptional()
  @Field(() => TrainingPlanUpdateManyWithoutExercisesInput, {
    nullable: true,
  })
  trainingPlans?: TrainingPlanUpdateManyWithoutExercisesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  videoLink?: string;
}
export { ExerciseUpdateInput };
