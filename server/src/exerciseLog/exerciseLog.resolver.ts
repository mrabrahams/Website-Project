import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ExerciseLogResolverBase } from "./base/exerciseLog.resolver.base";
import { ExerciseLog } from "./base/ExerciseLog";
import { ExerciseLogService } from "./exerciseLog.service";

@graphql.Resolver(() => ExerciseLog)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ExerciseLogResolver extends ExerciseLogResolverBase {
  constructor(
    protected readonly service: ExerciseLogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
