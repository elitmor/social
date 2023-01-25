import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import Paginator from "../../common/paginator/Paginator";
import { AppDispatch } from "../../redux/store";
import { FilterType, requestUsers } from "../../redux/users-reducer";
import {
  getCurrentPage,
  getFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUsers,
  getUsersFilter,
} from "../../redux/users-selectors";
import User from "./User";
import { UsersSearchForm } from "./UsersSearchForm";

type PropsType = {};

export const Users: FC<PropsType> = (props) => {
  const users = useSelector(getUsers);
  const totalUsersCount = useSelector(getTotalUsersCount);
  const currentPage = useSelector(getCurrentPage);
  const pageSize = useSelector(getPageSize);
  const filter = useSelector(getUsersFilter);
  const followingInProgress = useSelector(getFollowingInProgress);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUsers(currentPage, pageSize, filter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter));
  };
  const onFilterChanged = (filter: FilterType) => {
    dispatch(requestUsers(1, pageSize, filter));
  };
  const follow = (userId: number) => {
    dispatch(follow(userId));
  };
  const unfollow = (userId: number) => {
    dispatch(unfollow(userId));
  };

  const useNavigateSearch = () => {
    const navigate = useNavigate();
    return (pathname: string, params: any) =>
      navigate(`${pathname}?${createSearchParams(params)}`);
  };

  const navigateSearch = useNavigateSearch();
  const location = useLocation();
  useEffect(() => {
    navigateSearch("/users", {
      page: `${currentPage}`,
      count: `${pageSize}`,
      term: `${filter.term}`,
      friend: `${filter.friend}`,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, currentPage, pageSize]);

  useEffect(() => {
    const query = new URLSearchParams(location.search);

    let actualPage = currentPage;
    let actualFilter = filter;

    const queryFriend = query.get("friend");
    const queryPage = query.get("page");
    const queryTerm = query.get("term");

    if (queryPage) actualPage = +queryPage;

    if (queryTerm) actualFilter = { ...actualFilter, term: queryTerm };

    switch (queryFriend) {
      case "null":
        actualFilter = { ...actualFilter, friend: null };

        break;
      case "true":
        actualFilter = { ...actualFilter, friend: true };
        break;
      case "false":
        actualFilter = { ...actualFilter, friend: false };
        break;
      default:
        break;
    }
    dispatch(requestUsers(actualPage, pageSize, actualFilter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return (
    <div>
      <UsersSearchForm onFilterChanged={onFilterChanged} />

      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div>
        {users.map((u) => (
          <User
            user={u}
            followingInProgress={followingInProgress}
            key={u.id}
            unfollow={unfollow}
            follow={follow}
          />
        ))}
      </div>
    </div>
  );
};
