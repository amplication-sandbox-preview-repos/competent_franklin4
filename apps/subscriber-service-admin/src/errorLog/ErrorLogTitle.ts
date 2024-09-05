import { ErrorLog as TErrorLog } from "../api/errorLog/ErrorLog";

export const ERRORLOG_TITLE_FIELD = "id";

export const ErrorLogTitle = (record: TErrorLog): string => {
  return record.id?.toString() || String(record.id);
};
