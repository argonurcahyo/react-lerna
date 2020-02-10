import { createBrowserHistory } from "history";
export const history = createBrowserHistory();
export const defaultPage: number = 1;
export const defaultLimit: number = 10;
export const defaultSort: string = "desc";
export const defaultPageSize: number = 10;
export const defaultTotalPages: number = 1;
export const defaultTotalRecord: number = 0;

export const initialList = {
  data: [],
  meta: { total_records: 0, limit: defaultLimit, page: 1, total_pages: 1 },
};
export const pageSizeOptions: string[] = ["10", "15", "25", "50"];
export const showSizeChanger: boolean = true;

export const getAdditionalHeader = () => ({
  Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2wiOjEsImF1ZCI6ImFkbSIsImRpZCI6Ik1vemlsbGEvNS4wIChYMTE7IExpbnV4IHg4Nl82NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzc5LjAuMzk0NS4xMzAgU2FmYXJpLzUzNy4zNiIsImV4cCI6MTU4MTg1MzA0MywiaWF0IjoxNTgxMzM0NjQzLCJpc3MiOiJicHMiLCJqdGkiOiIyYjhmMmMyMS00YzA3LTQ5YzctODhmZS0xNWRjZDgwYTc5ZTIiLCJtZW1iZXIiOnsiaWQiOiJCUFMxOTA5MTAyOTM5NiIsInVzZXJuYW1lIjoiZGhhY2EiLCJlbWFpbCI6ImRoYWNhQGdldG5hZGEuY29tIiwidW5pdF9rZXJqYV9jb2RlIjoiNzIxMjAiLCJzYXRrZXIiOiI3MjEyMCIsInVzZXJfdHlwZSI6ImludGVybmFsIn19.EHVOrWvU3GGZ4x1R7TgL2C2XsqhOaqV_mu7Ch-qXzzGmYRwTlmlX-hfxegrn3Ohbn8oj6TeHqTNaF8Q7DP8ZlOueSoi-oJYnSVHB4uauj1PlXBOjgcJ2OBWHCeuAKMx6StPWdfP3grK5gR1lyWbraK7cP9w0Mni4CxArmnPgHeI`,
  "Content-Type": "application/json",
});
