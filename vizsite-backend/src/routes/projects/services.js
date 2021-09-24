import { v4 as uuidv4 } from 'uuid';
import { createSite } from '../sites/services';

export const createProject = async(db,Project)=>{
  const projectId = uuidv4()
  Project._id = projectId;
  const {_id:siteId} =await createSite(db,{siteObj:{}})
  Project.siteId = siteId;
  await db.collection("projects").doc(projectId).set(Project);
  return Project
}