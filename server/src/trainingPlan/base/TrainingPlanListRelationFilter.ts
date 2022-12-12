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
import { TrainingPlanWhereInput } from "./TrainingPlanWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TrainingPlanListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TrainingPlanWhereInput,
  })
  @ValidateNested()
  @Type(() => TrainingPlanWhereInput)
  @IsOptional()
  @Field(() => TrainingPlanWhereInput, {
    nullable: true,
  })
  every?: TrainingPlanWhereInput;

  @ApiProperty({
    required: false,
    type: () => TrainingPlanWhereInput,
  })
  @ValidateNested()
  @Type(() => TrainingPlanWhereInput)
  @IsOptional()
  @Field(() => TrainingPlanWhereInput, {
    nullable: true,
  })
  some?: TrainingPlanWhereInput;

  @ApiProperty({
    required: false,
    type: () => TrainingPlanWhereInput,
  })
  @ValidateNested()
  @Type(() => TrainingPlanWhereInput)
  @IsOptional()
  @Field(() => TrainingPlanWhereInput, {
    nullable: true,
  })
  none?: TrainingPlanWhereInput;
}
export { TrainingPlanListRelationFilter };
