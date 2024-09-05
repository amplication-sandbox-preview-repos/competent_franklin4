import { Module } from "@nestjs/common";
import { ErrorLogModuleBase } from "./base/errorLog.module.base";
import { ErrorLogService } from "./errorLog.service";
import { ErrorLogController } from "./errorLog.controller";
import { ErrorLogResolver } from "./errorLog.resolver";

@Module({
  imports: [ErrorLogModuleBase],
  controllers: [ErrorLogController],
  providers: [ErrorLogService, ErrorLogResolver],
  exports: [ErrorLogService],
})
export class ErrorLogModule {}
