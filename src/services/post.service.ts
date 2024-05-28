import { domain } from "./type";

export const postService = {
  createPost: async (
    data: {
      postTypeId: string;
      creatorUid: string;
      eventId: 0;
      mentionUid: string[];
      title: string;
      content: string;
      images: string[];
      files: string[];
      status: "create";
    }[]
  ) => {
    try {
      const res = await fetch(domain + "/Post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());

      return res;
    } catch (error) {
      return [];
    }
  },
};
