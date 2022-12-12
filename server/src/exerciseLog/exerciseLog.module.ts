import { Module } from "@nestjs/common";
import { ExerciseLogModuleBase } from "./base/exerciseLog.module.base";
import { ExerciseLogService } from "./exerciseLog.service";
import { ExerciseLogController } from "./exerciseLog.controller";
import { ExerciseLogResolver } from "./exerciseLog.resolver";

@Module({
  imports: [ExerciseLogModuleBase],
  controllers: [ExerciseLogController],
  providers: [ExerciseLogService, ExerciseLogResolver],
  exports: [ExerciseLogService],
})
export class ExerciseLogModule {}
