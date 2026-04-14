export interface ApiSuccessResponse<T> {
  status: "success";
  message: string;
  code: string;
  data: T;
}
