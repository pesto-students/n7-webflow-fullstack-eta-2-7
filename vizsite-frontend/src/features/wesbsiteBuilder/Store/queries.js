export const getProjectByIdQuery = (id) => ({
  url: `${process.env.REACT_APP_API_BASE_URL}/projects/${id}`,
  transform: (responseBody) => ({ project: responseBody }),
  update: {
    project: (oldValue, newValue) => newValue,
  },
});

export const saveCodeMutation = (data, node, fileId, siteId) => ({
  url: `${process.env.REACT_APP_API_BASE_URL}/projects/saveCode`,
  body: {
    code: data, node, fileId, siteId,
  },
  transform: (responseBody) => {
    const responseData = responseBody ? responseBody.data : {};
    return { savedCode: responseData };
  },
  update: {
    savedCode: (oldValue, newValue) => newValue,
  },
});
