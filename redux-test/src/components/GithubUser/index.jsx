import { useQuery } from "react-query";

function fetchUser(username) {
  return fetch(`https://api.github.com/users/${username}`).then((res) =>
    res.json()
  );
}

export default function GithubUser({ username }) {
  const userQuery = useQuery([username], () => fetchUser(username));

  if (userQuery.isLoading) {
    return <div>...</div>;
  }

  if (userQuery.isError) {
    return <div>{userQuery.error.message}</div>;
  }

  const data = userQuery.data;
}
