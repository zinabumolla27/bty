export const uploadFilesAPI = async (formData) => {
  const res = await fetch("http://localhost:3001/api/v1/upload", {
    method: "POST",
    body: formData, // Do NOT set headers manually b/c axios knows the data type by default
  });
  if (!res.ok) throw new Error("File upload failed");

  return res.json();
};

export const getUploadedFilesAPI = async () => {
  const res = await fetch("http://localhost:3001/api/v1/upload");

  if (!res.ok) throw new Error("Failed to fetch uploaded files");

  return res.json(); // Expected to be an array of uploaded files
};

export const deleteNews = async (id) => {
  const res = await fetch("http://localhost:3001/api/v1/upload/" + id, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to fetch uploaded files");

  return res.json(); // Expected to be an array of uploaded files
};
