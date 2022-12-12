/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Exercise } from "../../exercise/base/Exercise";
import { Goal } from "../../goal/base/Goal";
import { User } from "../../user/base/User";
import { Workout } from "../../workout/base/Workout";
@ObjectType()
class TrainingPlan {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [Exercise],
  })
  @ValidateNested()
  @Type(() => Exercise)
  @IsOptional()
  exercise?: Array<Exercise>;

  @ApiProperty({
    required: false,
    type: () => [Goal],
  })
  @ValidateNested()
  @Type(() => Goal)
  @IsOptional()
  goal?: Array<Goal>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  targetBodyPart!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;

  @ApiProperty({
    required: false,
    type: () => [Workout],
  })
  @ValidateNested()
  @Type(() => Workout)
  @IsOptional()
  workouts?: Array<Workout>;
}
export { TrainingPlan };