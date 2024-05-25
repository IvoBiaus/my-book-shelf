type TBook = {
  author_key: string[];
  author_name?: string[];
  cover_i?: number;
  edition_count: number;
  first_publish_year: number;
  key: string;
  title: string;
  availability?: {
    status: "borrow_available";
    available_to_browse: true;
    available_to_borrow: false;
    available_to_waitlist: true;
    is_printdisabled: true;
    is_readable: false;
    is_lendable: true;
    is_previewable: true;
  };
};

export default TBook;
