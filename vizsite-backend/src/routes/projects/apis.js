import { Router } from "express";


// write get,post,put,delete apis for projects

const projects = Router();

export const projectsApi = (db) => {

projects.get("/", (req, res) => {
        res.send("get projects");
    })
.post("/", (req, res) => {
        res.send("post projects");  
})
.put("/:id", (req, res) => {
        res.send("put projects");
})
.delete("/:id", (req, res) => {
        res.send("delete projects");
});
return projects;
}
// export default projects;