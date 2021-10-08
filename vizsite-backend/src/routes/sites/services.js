import { v4 as uuidv4 } from 'uuid';

export const createSite = async (db, Site, fileId) => {
  const siteId = uuidv4();
  Site._id = siteId;
  Site.fileId = fileId;
  await db.collection('sites').doc(siteId).set(Site);
  return Site;
};
