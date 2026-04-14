export interface ApiFieldErrorResponse {
  field: string;
  message: string;
  code: string;
}

export interface ApiErrorResponse {
  status?: "error";
  message?: string;
  code?: string;
  field?: string;
  errors?: ApiFieldErrorResponse[];
}
