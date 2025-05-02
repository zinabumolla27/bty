const AUTH_API = "http://localhost:3001/api/v1/users/auth";

export const authUserAPI = async (data) => {
  const res = await fetch(AUTH_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  console.log("res", res);
  return res;
};
