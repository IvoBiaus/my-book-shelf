export const PATHS = {
  books: (query: string, page = 1) => `/books/${query}/${page}`,
  bookDetail: (id: string) => `/book/${id}`,
  home: () => "/",
};

export const BASE_URL = "https://openlibrary.org/";

export const DOCS_PER_PAGE = 23;
