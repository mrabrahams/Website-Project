import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { WorkoutResolverBase } from "./base/workout.resolver.base";
import { Workout } from "./base/Workout";
import { WorkoutService } from "./workout.service";

@graphql.Resolver(() => Workout)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class WorkoutResolver extends WorkoutResolverBase {
  constructor(
    protected readonly service: WorkoutService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
