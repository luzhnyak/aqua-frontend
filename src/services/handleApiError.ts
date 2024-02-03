// import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export interface IError {
  errorMessage: string;
  errorCode: number;
}

// Опис типу для конфігурації запиту
// interface MyAxiosRequestConfig extends AxiosRequestConfig {
//   // Додайте власні поля конфігурації, якщо необхідно
// }

// Опис типу для відповіді Axios
// interface MyAxiosResponse<T> extends AxiosResponse<MyResponse<T>> {}

// Опис типу для помилки Axios
// interface MyAxiosError<T = MyError> extends AxiosError<MyResponse<T>> {}

export const handleApiError = (error: any): IError => {
  if (error.response && error.response.status) {
    const errorMessage = error.response.data?.message || "Unknown error";

    const errorCode = error.response.status;
    return { errorMessage, errorCode };
  } else {
    return { errorMessage: "Server error", errorCode: 500 };
  }
};
