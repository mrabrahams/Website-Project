import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DifficultyServiceBase } from "./base/difficulty.service.base";

@Injectable()
export class DifficultyService extends DifficultyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
