import { createSite } from './services';

export const getAllSitesController = async (req, res) => {
  const result = await req.db.collection('sites').get();
  const resultArray = [];
  result.forEach((doc) => {
    resultArray.push(doc.data());
  });
  res.status('200').json(resultArray);
};

export const createSiteController = async (req, res) => {
  const Site = req.body;
  await createSite(req.db, Site);
  res.status('201').json(Site);
};

export const getSiteByIDController = async (req, res) => {
  const result = await req.db.collection('sites').doc(req.params.id).get();
  res.status('200').json(result.data());
};

export const updateSiteController = async (req, res) => {
  const result = await req.db.collection('sites').doc(req.params.id).set(req.body);
  res.status('200').json(result);
};

export const deleteSiteController = async (req, res) => {
  const result = await req.db.collection('sites').doc(req.params.id).delete();
  res.status('200').json(result);
};
