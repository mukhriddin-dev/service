const baseURL = "https://api.github.com";

export const headers = {
    "Content-Type": "application/json",
};

 export  const apiRequest = {

    getSingleUser:   async function (user_name) {
        return await fetch(`${baseURL}/users/${user_name}`);
    },

    searchUser: async function (searchUserName) {
        return await fetch(`${baseURL}/search/users?q=${searchUserName}`);
    },
    getUserRepos: async function (user_name) {
        return await fetch(`${baseURL}/users/${user_name}/repos`);
    },
    getUserFollowers: async function (user_name) {
        return await fetch(`${baseURL}/users/${user_name}/followers`);
    },
    getUserFollowing: async function (user_name) {
        return await fetch(`${baseURL}/users/${user_name}/following`);
    },
    getOrganizations: async function (user_name) {
        return await fetch(`${baseURL}/users/${user_name}/orgs`);
    },
};


export const productAPI={
    getProducts: async function (user_name) {
        return await fetch(`${baseURL}/users/${user_name}/repos`);
    },
    getProductById: async function (user_name) {
        return await fetch(`${baseURL}/users/${user_name}/repos`);
    }
}


