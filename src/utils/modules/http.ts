type Url = string;
type Options = Pick<RequestInit, "method" | "headers" | "body" | "signal">;

export class Http {
  prefix: string;

  constructor(prefix: string) {
    this.prefix = prefix;
  }

  get<TResponse>(url: Url, options: Options) {
    return this.request<TResponse>(url, { ...options, method: "GET" });
  }

  post<TResponse>(url: Url, options: Options) {
    return this.request<TResponse>(url, { ...options, method: "POST" });
  }

  async request<TResponse>(url: Url, options: Options): Promise<TResponse> {
    const response = await fetch(this.prefix + url, options);
    const responseData = await response.json();
    return responseData as TResponse;
  }
}
