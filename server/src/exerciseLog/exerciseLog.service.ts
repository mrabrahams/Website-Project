import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ExerciseLogServiceBase } from "./base/exerciseLog.service.base";

@Injectable()
export class ExerciseLogService extends ExerciseLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
