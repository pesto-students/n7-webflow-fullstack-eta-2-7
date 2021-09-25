// redux query get all projects

export const getAllProjectsQuery = {
  url: `${process.env.REACT_APP_API_BASE_URL}/projects`,
  transform: (responseBody) => {
    const data = responseBody ? responseBody.data : [];
    return { projects: data };
  },
  update: {
    projects: (oldValue, newValue) => newValue,
  },
};

export const makeProjetMutation = (data) => ({
  url: `${process.env.REACT_APP_API_BASE_URL}/projects`,
  body: data,
  transform: (responseBody) => {
    const responseData = responseBody ? responseBody.data : {};
    return { createdProject: responseData };
  },
  update: {
    createdProject: (oldValue, newValue) => newValue,
  },
});
