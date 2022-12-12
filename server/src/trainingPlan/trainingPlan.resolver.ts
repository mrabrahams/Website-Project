import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TrainingPlanResolverBase } from "./base/trainingPlan.resolver.base";
import { TrainingPlan } from "./base/TrainingPlan";
import { TrainingPlanService } from "./trainingPlan.service";

@graphql.Resolver(() => TrainingPlan)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TrainingPlanResolver extends TrainingPlanResolverBase {
  constructor(
    protected readonly service: TrainingPlanService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
