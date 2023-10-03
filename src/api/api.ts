export const get = async (path: string) => {
  const response = await fetch(path, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching data");
  }

  return await response.json();
};
