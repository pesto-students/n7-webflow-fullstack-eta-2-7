import { Router } from "express";
import { v4 as uuidv4 } from 'uuid';

// write get,post,put,delete apis for projects

const projects = Router();


projects.get("/", async(req, res) => {
        let result = await req.db.collection("projects").get();
        let  resultArray = [];
        result = result.forEach(doc => {
                resultArray.push(doc.data());
        });              
        res.status("200").json(resultArray);   
    })
.post("/", async(req, res) => {
        let Project = req.body;
        Project._id = uuidv4();
        const projectId = uuidv4();
        await req.db.collection("projects").doc(projectId).set(Project);
        res.status("201").json(Project);  
})
.put("/:id", async(req, res) => {
        const result = await req.db.collection("projects").doc(_id).set(Project);
        res.status("200").json(result);  
})
.delete("/:id", async(req, res) => {
        const result =  await req.db.collection("projects").doc({_id: req.params.id}).delete();
        res.status("200").json(result);  
});

export default projects;