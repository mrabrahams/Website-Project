/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TrainingPlanService } from "../trainingPlan.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TrainingPlanCreateInput } from "./TrainingPlanCreateInput";
import { TrainingPlanWhereInput } from "./TrainingPlanWhereInput";
import { TrainingPlanWhereUniqueInput } from "./TrainingPlanWhereUniqueInput";
import { TrainingPlanFindManyArgs } from "./TrainingPlanFindManyArgs";
import { TrainingPlanUpdateInput } from "./TrainingPlanUpdateInput";
import { TrainingPlan } from "./TrainingPlan";
import { ExerciseFindManyArgs } from "../../exercise/base/ExerciseFindManyArgs";
import { Exercise } from "../../exercise/base/Exercise";
import { ExerciseWhereUniqueInput } from "../../exercise/base/ExerciseWhereUniqueInput";
import { GoalFindManyArgs } from "../../goal/base/GoalFindManyArgs";
import { Goal } from "../../goal/base/Goal";
import { GoalWhereUniqueInput } from "../../goal/base/GoalWhereUniqueInput";
import { WorkoutFindManyArgs } from "../../workout/base/WorkoutFindManyArgs";
import { Workout } from "../../workout/base/Workout";
import { WorkoutWhereUniqueInput } from "../../workout/base/WorkoutWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TrainingPlanControllerBase {
  constructor(
    protected readonly service: TrainingPlanService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "TrainingPlan",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TrainingPlan })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: TrainingPlanCreateInput
  ): Promise<TrainingPlan> {
    return await this.service.create({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        name: true,
        targetBodyPart: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "TrainingPlan",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [TrainingPlan] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(TrainingPlanFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<TrainingPlan[]> {
    const args = plainToClass(TrainingPlanFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        targetBodyPart: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "TrainingPlan",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TrainingPlan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: TrainingPlanWhereUniqueInput
  ): Promise<TrainingPlan | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        targetBodyPart: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "TrainingPlan",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: TrainingPlan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: TrainingPlanWhereUniqueInput,
    @common.Body() data: TrainingPlanUpdateInput
  ): Promise<TrainingPlan | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          name: true,
          targetBodyPart: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "TrainingPlan",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: TrainingPlan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: TrainingPlanWhereUniqueInput
  ): Promise<TrainingPlan | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          targetBodyPart: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Exercise",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/exercise")
  @ApiNestedQuery(ExerciseFindManyArgs)
  async findManyExercise(
    @common.Req() request: Request,
    @common.Param() params: TrainingPlanWhereUniqueInput
  ): Promise<Exercise[]> {
    const query = plainToClass(ExerciseFindManyArgs, request.query);
    const results = await this.service.findExercise(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,

        difficulty: {
          select: {
            id: true,
          },
        },

        equipmentNeeded: true,
        id: true,
        imageLink: true,
        name: true,
        targetbodyPart: true,
        updatedAt: true,
        videoLink: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "TrainingPlan",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/exercise")
  async connectExercise(
    @common.Param() params: TrainingPlanWhereUniqueInput,
    @common.Body() body: ExerciseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      exercise: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "TrainingPlan",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/exercise")
  async updateExercise(
    @common.Param() params: TrainingPlanWhereUniqueInput,
    @common.Body() body: ExerciseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      exercise: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "TrainingPlan",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/exercise")
  async disconnectExercise(
    @common.Param() params: TrainingPlanWhereUniqueInput,
    @common.Body() body: ExerciseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      exercise: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Goal",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/goal")
  @ApiNestedQuery(GoalFindManyArgs)
  async findManyGoal(
    @common.Req() request: Request,
    @common.Param() params: TrainingPlanWhereUniqueInput
  ): Promise<Goal[]> {
    const query = plainToClass(GoalFindManyArgs, request.query);
    const results = await this.service.findGoal(params.id, {
      ...query,
      select: {
        createdAt: true,
        currentReps: true,
        currentWeight: true,
        deadline: true,

        exercise: {
          select: {
            id: true,
          },
        },

        id: true,
        motivation: true,
        targetReps: true,
        targetWeight: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "TrainingPlan",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/goal")
  async connectGoal(
    @common.Param() params: TrainingPlanWhereUniqueInput,
    @common.Body() body: GoalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      goal: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "TrainingPlan",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/goal")
  async updateGoal(
    @common.Param() params: TrainingPlanWhereUniqueInput,
    @common.Body() body: GoalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      goal: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "TrainingPlan",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/goal")
  async disconnectGoal(
    @common.Param() params: TrainingPlanWhereUniqueInput,
    @common.Body() body: GoalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      goal: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Workout",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/workouts")
  @ApiNestedQuery(WorkoutFindManyArgs)
  async findManyWorkouts(
    @common.Req() request: Request,
    @common.Param() params: TrainingPlanWhereUniqueInput
  ): Promise<Workout[]> {
    const query = plainToClass(WorkoutFindManyArgs, request.query);
    const results = await this.service.findWorkouts(params.id, {
      ...query,
      select: {
        createdAt: true,
        date: true,

        exerciseLog: {
          select: {
            id: true,
          },
        },

        id: true,

        trainingPlan: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "TrainingPlan",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/workouts")
  async connectWorkouts(
    @common.Param() params: TrainingPlanWhereUniqueInput,
    @common.Body() body: WorkoutWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workouts: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "TrainingPlan",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/workouts")
  async updateWorkouts(
    @common.Param() params: TrainingPlanWhereUniqueInput,
    @common.Body() body: WorkoutWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workouts: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "TrainingPlan",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/workouts")
  async disconnectWorkouts(
    @common.Param() params: TrainingPlanWhereUniqueInput,
    @common.Body() body: WorkoutWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workouts: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
