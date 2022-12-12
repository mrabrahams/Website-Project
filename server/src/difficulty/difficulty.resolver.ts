import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DifficultyResolverBase } from "./base/difficulty.resolver.base";
import { Difficulty } from "./base/Difficulty";
import { DifficultyService } from "./difficulty.service";

@graphql.Resolver(() => Difficulty)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DifficultyResolver extends DifficultyResolverBase {
  constructor(
    protected readonly service: DifficultyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
