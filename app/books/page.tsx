const NoBooksSearchPage = () => {
  return (
    <div className="flex flex-col px-11 py-6 overflow-y-auto overflow-x-hidden h-full">
      <div className="flex flex-col gap-6 justify-center h-full">
        <h1 className="text-5xl max-w-96 leading-relaxed text-center m-auto">
          There are no books matching your search.
        </h1>
      </div>
    </div>
  );
};

export default NoBooksSearchPage;
