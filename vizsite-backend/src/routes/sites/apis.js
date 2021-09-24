import { Router } from "express";

const sites = Router();



sites.get("/", async(req, res) => {
        let result = await req.db.collection("sites").get();
        let  resultArray = [];
        result = result.forEach(doc => {
                resultArray.push(doc.data());
        });              
        res.status("200").json(resultArray);   
})
        .post("/", async(req, res) => {
                let Site = req.body;
                Site._id = uuidv4();
                const siteId = uuidv4();
                await req.db.collection("sites").doc(siteId).set(Site);
                res.status("201").json(Site);  
        })
        .put("/:id", async(req, res) => {
                const result = await req.db.collection("sites").doc(_id).set(Project);
                res.status("200").json(result);  
        })
        .delete("/:id", async(req, res) => {
                const result =  await req.db.collection("sites").doc({_id: req.params.id}).delete();
                res.status("200").json(result); 
        });



export default sites;