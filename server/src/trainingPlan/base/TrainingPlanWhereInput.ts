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
import { ExerciseListRelationFilter } from "../../exercise/base/ExerciseListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { GoalListRelationFilter } from "../../goal/base/GoalListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { WorkoutListRelationFilter } from "../../workout/base/WorkoutListRelationFilter";
@InputType()
class TrainingPlanWhereInput {
  @ApiProperty({
    required: false,
    type: () => ExerciseListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ExerciseListRelationFilter)
  @IsOptional()
  @Field(() => ExerciseListRelationFilter, {
    nullable: true,
  })
  exercise?: ExerciseListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => GoalListRelationFilter,
  })
  @ValidateNested()
  @Type(() => GoalListRelationFilter)
  @IsOptional()
  @Field(() => GoalListRelationFilter, {
    nullable: true,
  })
  goal?: GoalListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  targetBodyPart?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => WorkoutListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WorkoutListRelationFilter)
  @IsOptional()
  @Field(() => WorkoutListRelationFilter, {
    nullable: true,
  })
  workouts?: WorkoutListRelationFilter;
}
export { TrainingPlanWhereInput };