class Api{
    constructor(){

    }
    async requestApi(url,data,token){
        let tampon = {};
        let req = {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
          };
        if(data !== undefined) req.body=JSON.stringify(data);
        if(token !== undefined) req.headers.Authorization = 'Bearer'+token;
        await fetch(url,req)
        .then((resp) => {
            tampon.status=resp.status; 
            tampon.statusText=resp.statusText;
            return resp.json();
        })
        .then((resp)=>{
            tampon = {...resp, ...tampon};
        })
        .catch((e) => {
            tampon = e;
        });
        return tampon;
        }

    async sendlogin(data){
        return await this.requestApi('http://localhost:3001/api/v1/user/login',data);
    }
    async getProfil(token){
        return await this.requestApi('http://localhost:3001/api/v1/user/profile',undefined,token);
    }
}
export default Api;