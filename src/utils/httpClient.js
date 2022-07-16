const API = process.env.REACT_APP_API
const API_Token = "Bearer " + process.env.REACT_APP_API_TOKEN

//console.log(API)
//console.log(API_Token)

export function get(path){
    return fetch(API + path ,{
            headers: {
                Authorization: API_Token,
                "Content-Type": "application/json;charset=utf-8"
            },
        }).then((result) => result.json())
}