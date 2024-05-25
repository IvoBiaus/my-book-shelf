type TAuthor = {
  key: string;
  bio?:
    | string
    | {
        value: string;
      };
  photos?: number[];
  personal_name: string;
  links: [
    {
      title: string;
      url: string;
    },
    {
      title: string;
      url: string;
    }
  ];
  name: string;
  latest_revision: number;
  revision: number;
  created: {
    value: string;
  };
  last_modified: {
    value: string;
  };
};
