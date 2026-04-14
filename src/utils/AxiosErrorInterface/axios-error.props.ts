export interface ApiErrorResponse {
  status?: "error";
  message?: string;
  code?: string;
  field?: string;
}
