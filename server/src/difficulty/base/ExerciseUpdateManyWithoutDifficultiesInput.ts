/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ExerciseWhereUniqueInput } from "../../exercise/base/ExerciseWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class ExerciseUpdateManyWithoutDifficultiesInput {
  @Field(() => [ExerciseWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ExerciseWhereUniqueInput],
  })
  connect?: Array<ExerciseWhereUniqueInput>;

  @Field(() => [ExerciseWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ExerciseWhereUniqueInput],
  })
  disconnect?: Array<ExerciseWhereUniqueInput>;

  @Field(() => [ExerciseWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ExerciseWhereUniqueInput],
  })
  set?: Array<ExerciseWhereUniqueInput>;
}
export { ExerciseUpdateManyWithoutDifficultiesInput };
