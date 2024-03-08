import { createContext, useContext } from 'react';

const BookCreatedFlagContext = createContext<any>(null);

export const useBookCreatedFlag = () => useContext(BookCreatedFlagContext);

export default BookCreatedFlagContext;
