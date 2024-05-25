import { BASE_URL, DOCS_PER_PAGE } from "./constants";
import TBook from "@/types/TBook";
import TBookDetail from "@/types/TBookDetail";
import TOtherWork from "@/types/TOtherWork";
import TQueryResults from "@/types/TResults";

export const getBooksByQuery = async (
  query: string,
  page: number | string = 1
): Promise<TQueryResults> => {
  const results = await fetch(
    `${BASE_URL}/search.json?q=${encodeURI(
      query
    )}&page=${page}&limit=${DOCS_PER_PAGE}`
  );
  const json = await results.json();

  return json;
};
export const getBook = async (bookId: string): Promise<TBookDetail> => {
  const results = await fetch(`${BASE_URL}/works/${bookId}.json`);
  const json = await results.json();
  return json;
};

export const getAuthorOtherWorks = async (
  autherKey: string,
  limit: number = 3
): Promise<TOtherWork[]> => {
  const results = await fetch(
    `${BASE_URL}/${autherKey}/works.json?limit=${limit}`
  );
  const json = await results.json();
  return json.entries;
};

export const getAuthor = async (autherKey: string): Promise<TAuthor> => {
  const results = await fetch(`${BASE_URL}/${autherKey}.json`);
  const json = await results.json();
  return json;
};

export const getDailyBooksByPage = async (page = 1): Promise<TBook[]> => {
  const results = await fetch(`${BASE_URL}/trending/daily.json?page=${page}`);
  const json = await results.json();
  return json.works;
};

export const getTopTrending = async (limit = 10): Promise<TBook[]> => {
  const results = await fetch(`${BASE_URL}/trending.json?limit=${limit}`);
  const json = await results.json();
  return json.works;
};
