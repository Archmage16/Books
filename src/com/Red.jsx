import React from 'react';
import QueryClientWrapper from './QueryClientWrapper';
import SearchBook from './SearchBook';

const Red = () => {
  return (
    <QueryClientWrapper>
      <SearchBook />
    </QueryClientWrapper>
  );
};

export default Red;
