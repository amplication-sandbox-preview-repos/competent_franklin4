import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KafkaMessageServiceBase } from "./base/kafkaMessage.service.base";

@Injectable()
export class KafkaMessageService extends KafkaMessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
