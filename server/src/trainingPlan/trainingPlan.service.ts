import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TrainingPlanServiceBase } from "./base/trainingPlan.service.base";

@Injectable()
export class TrainingPlanService extends TrainingPlanServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
