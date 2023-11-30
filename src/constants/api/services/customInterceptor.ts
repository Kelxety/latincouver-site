const handleResponse = async (response) => {
  if (!response.ok) {
    if (response.error === 401) {
    }
    if (true) {
      const originalRequest = response.config;
      return fetch(
        originalRequest.url,
        originalRequest.options
      );
    }

    throw new Error('Request failed');
  }

  return response;
};
