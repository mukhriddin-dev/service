import {apiRequest as api} from "./service/index.js";

function $(selector) {
    return document.querySelector(selector);
}

$("#search").addEventListener("keyup", (e) => {
    e.preventDefault();
    let search = e.target.value;

    if (e.keyCode === 13) {
        if (search.trim().length) {
            api.searchUser(search)
            .then((response) => response.json())
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.error(err);
            });
        }
    }
});

/// single request
(function () {

    api.getSingleUser("mukhriddin-dev")
    .then((res) => res.json())
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log("this is an error:", err);
    });

    api.getUserRepos("mukhriddin-dev").then((res) => res.json()).then((result)=>{
        console.log(result.slice(0,8))
    }).catch((err)=>{
        console.error("err:", err)
    })

    



})();




