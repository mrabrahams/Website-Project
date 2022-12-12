import { Module } from "@nestjs/common";
import { DifficultyModuleBase } from "./base/difficulty.module.base";
import { DifficultyService } from "./difficulty.service";
import { DifficultyController } from "./difficulty.controller";
import { DifficultyResolver } from "./difficulty.resolver";

@Module({
  imports: [DifficultyModuleBase],
  controllers: [DifficultyController],
  providers: [DifficultyService, DifficultyResolver],
  exports: [DifficultyService],
})
export class DifficultyModule {}
