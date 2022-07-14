const API = process.env.REACT_APP_API
const API_Token = process.env.REACT_APP_API_TOKEN

export function get(path){
    return fetch(API + path ,{
            headers: {
                Authorization: "Bearer" + API_Token,
                "Content-Type": "application/json;charset=utf-8"
            },
        }).then((result) => result.json())
}