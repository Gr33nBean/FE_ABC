import { domain } from "./type";

export const resourceUsingService = {
  getAll: async () => {
    try {
      const res = await fetch(domain + "/ResourceUsing/getAll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page: 1,
          limit: 100,
        }),
      }).then((res) => res.json());

      return res;
    } catch (error) {
      return [];
    }
  },
};