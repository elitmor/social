const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

const initialState = {
  users: [
    {
      id: 1,
      photoUrl: "https://www.svgrepo.com/show/29895/avatar.svg",
      fullName: "Alexis",
      status: "I am boss",
      location: { country: "USA", city: "Texas" },
      followed: true,
    },
    {
      id: 2,
      photoUrl: "https://www.svgrepo.com/show/29895/avatar.svg",
      fullName: "Ksy",
      status: "I am boss too",
      location: { country: "Ukraine", city: "Odessa" },
      followed: true,
    },
    {
      id: 3,
      photoUrl: "https://www.svgrepo.com/show/29895/avatar.svg",
      fullName: "Liza",
      status: "I am boss too",
      location: { country: "Ukraine", city: "Kiev" },
      followed: true,
    },
    {
      id: 4,
      photoUrl: "https://www.svgrepo.com/show/29895/avatar.svg",
      fullName: "John",
      status: "I am boss too",
      location: { country: "England", city: "London" },
      followed: false,
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, followed: true };
          }
          return user;
        }),
        followed: true,
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, followed: false };
          }
          return user;
        }),
        followed: false,
      };
    default:
      return state;
  }
};

export const setUsersActionCreator = () => ({ type: SET_USERS });
export const followActionCreator = (userID) => ({ type: FOLLOW, userID });
export const unfollowActionCreator = (userID) => ({ type: UNFOLLOW, userID });

export default usersReducer;
