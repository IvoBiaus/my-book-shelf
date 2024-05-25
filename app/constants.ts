export const PATHS = {
  books: (query: string, page = 1) =>
    `/books?query=${encodeURI(query)}&page=${page}`,
  bookDetail: (id: string) => `/books/${id}`,
  home: () => "/",
};

export const BASE_URL = "https://openlibrary.org/";

export const DOCS_PER_PAGE = 23;
