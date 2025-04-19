const API_BASE = "http://10.134.114.87:3000/api/v1/contact";

export const fetchContactsAPI = async () => {
  const res = await fetch(API_BASE);
  return res.json();
};

export const addContactAPI = async (data) => {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteContactAPI = async (id) => {
  const res = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
  return res.json();
};

export const updateContactAPI = async (data) => {
  const res = await fetch(`${API_BASE}/${data.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};
export const fetchContactAPI = async (id) => {
  const res = await fetch(`${API_BASE}/${id}`);
  return res.json();
};
