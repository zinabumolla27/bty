const AUTH_API = "http://localhost:3001/api/v1/users/auth";

export const authUserAPI = async (data) => {
  const res = await fetch(AUTH_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res
      .json()
      .catch(() => ({ message: "Unknown error" }));
    throw new Error(errorData.message || "Failed to authenticate");
  }

  // Only call .json() once and return it
  const json = await res.json();
  return json;
};
