export const uploadService = {
  uploadFiles: async (files: File[]) => {
    try {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("file", files[i]);
      }
      const response = await fetch(
        `https://api-be-abc.azurewebsites.net/api/File/upload`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: formData,
        }
      ).then((res) => res.json());
      return response;
    } catch (error) {
      return [];
    }
  },
};
