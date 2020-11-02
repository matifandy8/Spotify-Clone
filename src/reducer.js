export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQCP8sQAg3rZMkycLBf_kUVh4e9U6oysoN1h5lQZUaTgJNfT8CgIS4tNkG8xGPrATJO4zl3hCkEvnGt6SgDxqt6QIMkBJGhNUQLix0QqyrI9EQd-j-BR1A4peDorjHp7bx1etQAo58otNQdK0XCSYaB6zXFAcAGjnlSsEbrpBNt5tZsn",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
