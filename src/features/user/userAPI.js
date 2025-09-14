const USER_API = "http://localhost:3001/api/v1/users";
const AUTH_USER_API = "http://localhost:3001/api/v1/auth";

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

export const updateUserAPI = async ({ id, data }) => {
  console.log("updating user in API", id, data);
  const res = await fetch(`${USER_API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Failed to update user");
  }
  return res.json(); // should be the updated user object
};

export const requestPasswordResetAPI = async (email) => {
  const res = await fetch(`${AUTH_USER_API}/forgot-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    throw new Error("Failed to request password reset");
  }
  return res.json(); // { success: true, message: "Verification code sent" }
};

// 2. Reset password
export const resetPasswordAPI = async ({ email, code, password }) => {
  const res = await fetch(`${AUTH_USER_API}/reset-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, code, password }),
  });

  if (!res.ok) {
    throw new Error("Failed to reset password");
  }
  return res.json(); // { success: true, message: "Password reset successful" }
};
