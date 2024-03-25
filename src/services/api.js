class Api{
    constructor(){

    }
    async requestApi(method,url,data,token){
        let tampon = {};
        let req = {
            method: method, // *GET, POST, PUT, DELETE, etc.
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
        return await this.requestApi('POST','http://localhost:3001/api/v1/user/login',data);
    }
    async getProfil(token){
        return await this.requestApi('POST','http://localhost:3001/api/v1/user/profile',undefined,token);
    }
    async changeProfil(token, data){
        return await this.requestApi('PUT','http://localhost:3001/api/v1/user/profile',data,token);
    }
}
export default Api;