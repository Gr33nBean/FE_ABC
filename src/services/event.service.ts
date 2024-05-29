import { domain } from "./type";

export const eventService = {
  getAll: async () => {
    try {
      const res = await fetch(domain + "/Event/getAll", {
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
