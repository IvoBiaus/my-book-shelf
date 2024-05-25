import TBookResult from "./TBookResult";

type TQueryResults = {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: TBookResult[];
  num_found: number;
  q: string;
};

export default TQueryResults;
