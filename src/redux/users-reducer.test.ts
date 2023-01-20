import usersReducer, { actions, InitialStateType } from "./users-reducer";

let state: InitialStateType;

beforeEach(() => {
  state = {
    users: [
      {
        id: 0,
        name: "Alex 0",
        followed: false,
        status: "status 0",
        photos: { small: null, large: null },
      },
      {
        id: 1,
        name: "Alex 1",
        followed: false,
        status: "status 1",
        photos: { small: null, large: null },
      },
      {
        id: 2,
        name: "Alex 2",
        followed: true,
        status: "status 2",
        photos: { small: null, large: null },
      },
      {
        id: 3,
        name: "Alex 3",
        followed: true,
        status: "status 3",
        photos: { small: null, large: null },
      },
    ],
    pageSize: 5,
    totalUsersCount: 101,
    currentPage: 2,
    isFetching: false,
    followingInProgress: [],
  };
});

test("follow success", () => {
  const newState = usersReducer(state, actions.followSuccess(1));
  expect(newState.users[0].followed).toBeFalsy();
  expect(newState.users[1].followed).toBeTruthy();
});

test("unfollow success", () => {
  const newState = usersReducer(state, actions.unfollowSuccess(3));
  expect(newState.users[2].followed).toBeTruthy();
  expect(newState.users[3].followed).toBeFalsy();
});
