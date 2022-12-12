import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DifficultyService } from "./difficulty.service";
import { DifficultyControllerBase } from "./base/difficulty.controller.base";

@swagger.ApiTags("difficulties")
@common.Controller("difficulties")
export class DifficultyController extends DifficultyControllerBase {
  constructor(
    protected readonly service: DifficultyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
