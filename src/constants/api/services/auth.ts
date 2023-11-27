import { BASE_ENDPOINT } from '../BaseEndpoint';

export const login = async (data: {
  email: string;
  password: string;
}) => {
  try {
    console.log(data);
    const res = await fetch(
      `${BASE_ENDPOINT}/token/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    console.log(res);

    if (!res.ok) {
      throw new Error(
        `Failed to add job title: ${res.statusText}`
      );
    }

    return res.json();
  } catch (error) {
    if (typeof error === 'object') {
      console.error('Error logging in:', error);
    }
    console.error(error);
    throw error;
  }
};
