/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateWorkoutArgs } from "./CreateWorkoutArgs";
import { UpdateWorkoutArgs } from "./UpdateWorkoutArgs";
import { DeleteWorkoutArgs } from "./DeleteWorkoutArgs";
import { WorkoutFindManyArgs } from "./WorkoutFindManyArgs";
import { WorkoutFindUniqueArgs } from "./WorkoutFindUniqueArgs";
import { Workout } from "./Workout";
import { ExerciseLogFindManyArgs } from "../../exerciseLog/base/ExerciseLogFindManyArgs";
import { ExerciseLog } from "../../exerciseLog/base/ExerciseLog";
import { TrainingPlan } from "../../trainingPlan/base/TrainingPlan";
import { WorkoutService } from "../workout.service";

@graphql.Resolver(() => Workout)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class WorkoutResolverBase {
  constructor(
    protected readonly service: WorkoutService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Workout",
    action: "read",
    possession: "any",
  })
  async _workoutsMeta(
    @graphql.Args() args: WorkoutFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Workout])
  @nestAccessControl.UseRoles({
    resource: "Workout",
    action: "read",
    possession: "any",
  })
  async workouts(
    @graphql.Args() args: WorkoutFindManyArgs
  ): Promise<Workout[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Workout, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Workout",
    action: "read",
    possession: "own",
  })
  async workout(
    @graphql.Args() args: WorkoutFindUniqueArgs
  ): Promise<Workout | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Workout)
  @nestAccessControl.UseRoles({
    resource: "Workout",
    action: "create",
    possession: "any",
  })
  async createWorkout(
    @graphql.Args() args: CreateWorkoutArgs
  ): Promise<Workout> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        exerciseLog: args.data.exerciseLog
          ? {
              connect: args.data.exerciseLog,
            }
          : undefined,

        trainingPlan: args.data.trainingPlan
          ? {
              connect: args.data.trainingPlan,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Workout)
  @nestAccessControl.UseRoles({
    resource: "Workout",
    action: "update",
    possession: "any",
  })
  async updateWorkout(
    @graphql.Args() args: UpdateWorkoutArgs
  ): Promise<Workout | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          exerciseLog: args.data.exerciseLog
            ? {
                connect: args.data.exerciseLog,
              }
            : undefined,

          trainingPlan: args.data.trainingPlan
            ? {
                connect: args.data.trainingPlan,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Workout)
  @nestAccessControl.UseRoles({
    resource: "Workout",
    action: "delete",
    possession: "any",
  })
  async deleteWorkout(
    @graphql.Args() args: DeleteWorkoutArgs
  ): Promise<Workout | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ExerciseLog])
  @nestAccessControl.UseRoles({
    resource: "ExerciseLog",
    action: "read",
    possession: "any",
  })
  async exerciseLogs(
    @graphql.Parent() parent: Workout,
    @graphql.Args() args: ExerciseLogFindManyArgs
  ): Promise<ExerciseLog[]> {
    const results = await this.service.findExerciseLogs(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => ExerciseLog, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ExerciseLog",
    action: "read",
    possession: "any",
  })
  async exerciseLog(
    @graphql.Parent() parent: Workout
  ): Promise<ExerciseLog | null> {
    const result = await this.service.getExerciseLog(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => TrainingPlan, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TrainingPlan",
    action: "read",
    possession: "any",
  })
  async trainingPlan(
    @graphql.Parent() parent: Workout
  ): Promise<TrainingPlan | null> {
    const result = await this.service.getTrainingPlan(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
