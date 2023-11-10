export const SAVE = "SAVE";
export const saveInfo = (loginId, memberType) => ({
  type: SAVE,
  loginId: loginId,
  memberType: memberType,
});

const initialState = {
  loginId: "",
  memberType: "0",
};

export const saveLoginInfo = (state = initialState, action) => {
  switch (action.type) {
    case SAVE:
      return {
        ...state,
        loginId: action.loginId,
        memberType: action.memberType,
      };

    default:
      return state;
  }
};
