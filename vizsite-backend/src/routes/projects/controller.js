import { v4 as uuidv4 } from 'uuid';
import { createProject } from './services';

export const getAllProjectsController = async(req, res) => {
  let result = await req.db.collection("projects").get();
  let  resultArray = [];
  result = result.forEach(doc => {
          resultArray.push(doc.data());
  });              
  res.status("200").json(resultArray);   
}

export const createProjectController = async(req, res) => {
  let Project = req.body;
  const newProject = await createProject(req.db,Project);
  res.status("201").json(Project);  
}

export const getProjectByIdController = async(req, res) => {
  const result = await req.db.collection("projects").doc(req.params.id).set(req.body);
  res.status("200").json(result);  
}

export const updateProjectController = async(req, res) => {
  const result = await req.db.collection("projects").doc(req.params.id).set(req.body);
  res.status("200").json(result);  
}

export const deleteProjectController = async(req, res) => {
  const result =  await req.db.collection("projects").doc(req.params.id).delete();
  res.status("200").json(result);  
}