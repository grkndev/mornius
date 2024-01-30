export async function getRepositories(query: string) {
  const res = await fetch(`https://api.github.com/repos/${query}`);
  const data = await res.json();
  return data;
}
export async function getUser(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();
  return data;
}
export async function searchUsers(
  query: string,
  page?: number,
  per_page?: number,
  sort?: "followers" | "repositories" | "joined",
  order?: "desc" | "asc"
) {
  const baseUrl = `https://api.github.com/search/users?q=${query}
  ${
    page &&
    `&page=${page}` + per_page &&
    `&per_page=${per_page}` + sort &&
    `&sort=${sort}` + order &&
    `&order=${order}`
  }`;

  const res = await fetch(baseUrl);
  const data = await res.json();
  return data;
}
export async function searchTopics(
  query: string,
  page?: number,
  per_page?: number
) {
  const baseUrl = `https://api.github.com/search/topics?q=${query}
    ${page && `&page=${page}` + per_page && `&per_page=${per_page}`}`;

  const res = await fetch(baseUrl);
  const data = await res.json();
  return data;
}
