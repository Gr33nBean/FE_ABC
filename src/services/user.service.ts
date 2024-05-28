import { domain } from "./type";

export const userService = {
  getUser: async (uids: string[]) => {
    try {
      const res = await fetch(domain + "/User/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(uids),
      }).then((res) => res.json());
      console.log(res);

      return res;
    } catch (error) {
      return [];
    }
  },

  getAll: async () => {
    try {
      const res = await fetch(domain + "/User/getALL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page: 1,
          limit: 10000,
        }),
      }).then((res) => res.json());
      console.log(res);

      return res;
    } catch (error) {
      return [];
    }
  },
  // updateUser: async (data: User[]) => {
  //   try {
  //     const res = await fetch(domain + "/User", {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     }).then((res) => res.json());
  //     console.log(res);

  //     return res;
  //   } catch (error) {
  //     return [];
  //   }
  // },
};
