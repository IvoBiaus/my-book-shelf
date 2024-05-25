type TOtherWork = {
  title: string;
  subjects: string[];
  key: string;
  authors: [
    {
      author: {
        key: string;
      };
    }
  ];
  latest_revision: number;
  revision: number;
  created: {
    value: string;
  };
};

export default TOtherWork;
