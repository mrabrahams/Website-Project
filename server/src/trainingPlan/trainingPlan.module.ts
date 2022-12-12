import { Module } from "@nestjs/common";
import { TrainingPlanModuleBase } from "./base/trainingPlan.module.base";
import { TrainingPlanService } from "./trainingPlan.service";
import { TrainingPlanController } from "./trainingPlan.controller";
import { TrainingPlanResolver } from "./trainingPlan.resolver";

@Module({
  imports: [TrainingPlanModuleBase],
  controllers: [TrainingPlanController],
  providers: [TrainingPlanService, TrainingPlanResolver],
  exports: [TrainingPlanService],
})
export class TrainingPlanModule {}
