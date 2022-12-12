import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TrainingPlanService } from "./trainingPlan.service";
import { TrainingPlanControllerBase } from "./base/trainingPlan.controller.base";

@swagger.ApiTags("trainingPlans")
@common.Controller("trainingPlans")
export class TrainingPlanController extends TrainingPlanControllerBase {
  constructor(
    protected readonly service: TrainingPlanService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
