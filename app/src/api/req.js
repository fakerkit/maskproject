import axios from "axios";
export default{
    limiShop(){
        return axios({
            method:"get",
            url:"/api/limiShop"
        })
    },
    hotShop(){
        return axios({
            method:"get",
            url:"/api/hotShop"
        })
    },
    hotlistShop(id){
        return axios({
            method:"get",
            url:"/api/hotlistShop/"+id
        })
    },
    newShop(){
        return axios({
            method:"get",
            url:"/api/newShop"
        })
    }
}