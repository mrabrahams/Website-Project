import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ExerciseLogService } from "./exerciseLog.service";
import { ExerciseLogControllerBase } from "./base/exerciseLog.controller.base";

@swagger.ApiTags("exerciseLogs")
@common.Controller("exerciseLogs")
export class ExerciseLogController extends ExerciseLogControllerBase {
  constructor(
    protected readonly service: ExerciseLogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
