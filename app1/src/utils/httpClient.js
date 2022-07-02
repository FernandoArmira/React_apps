const API = "https://api.themoviedb.org/3"

export function get(path){
    return fetch(API + path ,{
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjVmODU0ZTUxN2E2OTEwY2MyNDg1NzNhYTZiMDFjYiIsInN1YiI6IjYyYmY5OTFlMWU2NDg5MDA1ZWZjOTY0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f9f1HxVLH5-mzyHcIroPPB21u4PFV1H3lyQXWPNyaOo",
                "Content-Type": "application/json;charset=utf-8"
            },
        }).then((result) => result.json())
}