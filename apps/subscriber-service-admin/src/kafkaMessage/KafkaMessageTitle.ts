import { KafkaMessage as TKafkaMessage } from "../api/kafkaMessage/KafkaMessage";

export const KAFKAMESSAGE_TITLE_FIELD = "id";

export const KafkaMessageTitle = (record: TKafkaMessage): string => {
  return record.id?.toString() || String(record.id);
};
