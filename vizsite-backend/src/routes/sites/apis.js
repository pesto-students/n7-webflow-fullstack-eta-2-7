import { Router } from "express";

const sites =  Router();

export const sitesApi = (db)=>{

        sites.get("/", (req, res) => {
                res.send("get sites");
                })
        .post("/", (req, res) => {
                res.send("post sites");  
        })
        .put("/:id", (req, res) => {
                res.send("put sites");
        })
        .delete("/:id", (req, res) => {
                res.send("delete sites");
        });

        return sites;
}



// export default sites;