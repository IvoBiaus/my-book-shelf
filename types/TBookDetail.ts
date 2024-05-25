type TBookDetail = {
  title: string;
  key: string;
  authors: [
    {
      author: {
        key: string;
      };
    }
  ];
  description: string | { value: string };
  covers: number[];
  subject_places: string[];
  subjects: string[];
  subject_people: string[];
  subject_times: string[];
  location: string;
  latest_revision: number;
  revision: number;
  created: {
    value: string;
  };
  last_modified: {
    value: string;
  };
};

export default TBookDetail;
