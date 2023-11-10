export const SAVE = "SAVE";
export const saveBookInfo = (bookId, bookName) => ({
  type: SAVE,
  bookId: bookId,
  bookName: bookName,
});

const initialState = {
  bookId: "",
  bookName: "",
};

export const rentBookInfo = (state = initialState, action) => {
  switch (action.type) {
    case SAVE:
      return {
        ...state,
        bookId: action.bookId,
        bookName: action.bookName,
      };

    default:
      return state;
  }
};
