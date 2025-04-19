const USER_API = "http://192.168.58.87:3000/api/v1/users";

export const fetchUsersAPI = async () => {
  const res = await fetch(USER_API);
  return res.json();
};

export const addUserAPI = async (data) => {
  const res = await fetch(USER_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteUserAPI = async (id) => {
  const res = await fetch(`${USER_API}/${id}`, {
    method: "DELETE",
  });
  return res.json();
};

export const updateUserAPI = async (data) => {
  const res = await fetch(`${USER_API}/${data.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};
