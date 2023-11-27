import { IJobTitle } from '../../interface/JobTitle';
import { ApiResponse } from '../../interface/Response';
import { BASE_ENDPOINT } from '../BaseEndpoint';

export const addJobTitle = async (
  data: IJobTitle
) => {
  try {
    const authToken =
      localStorage.getItem('access');
    const res = await fetch(
      `${BASE_ENDPOINT}/v1/hr/job-titles/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) {
      throw new Error(
        `Failed to add job title: ${res.statusText}`
      );
    }

    return res.json();
  } catch (error) {
    if (typeof error === 'object') {
      console.error(
        'Error adding job title:',
        error
      );
    }
    console.error(error);
    throw error;
  }
};

// export const fetchJobTitles = async (
//   statusIndex: number | null = null
// ) => {
//   const queryParams =
//     statusIndex !== null
//       ? `?statusIndex=${statusIndex}`
//       : '';
//   try {
//     const res = await fetch(
//       `${BASE_ENDPOINT}/v1/hr/job-titles${queryParams}`
//     );

//     if (!res.ok) {
//       throw new Error(
//         'Failed to fetch job titles'
//       );
//     }
//     const jsonData: ApiResponse =
//       await res.json();
//     console.log(jsonData);
//     return jsonData;
//   } catch (error) {
//     console.error(
//       'Error fetching job titles:',
//       error
//     );
//     throw error;
//   }
// };

export const fetchJobTitleById = async (
  id: number
) => {
  try {
    const res = await fetch(
      `${BASE_ENDPOINT}/v1/hr/job-titles/${id}`
    );

    if (!res.ok) {
      throw new Error(
        'Failed to fetch job title by id'
      );
    }

    const jsonData: IJobTitle = await res.json();
    return jsonData;
  } catch (error) {
    console.error(
      'Error fetching job title:',
      error
    );
    throw error;
  }
};

export const editJobTitle = async (
  data: IJobTitle & { id: number }
) => {
  const authToken = localStorage.getItem(
    'accessToken'
  );
  console.log(authToken);
  try {
    const res = await fetch(
      `${BASE_ENDPOINT}/v1/hr/job-titles/${data.id}/`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) {
      throw new Error(
        `Failed to add job title: ${res.statusText}`
      );
    }

    return res.json();
  } catch (error) {
    if (typeof error === 'object') {
      console.error(
        'Error editing job title:',
        error
      );
    }
    console.error(error);
    throw error;
  }
};

export const fetchJobTitles = async ({
  queryKey,
}: {
  queryKey: (
    | string
    | { statusIndex: number | null }
  )[];
}) => {
  try {
    const [params] = queryKey;

    const { statusIndex } = params as {
      statusIndex: number | null;
    };

    const queryParams =
      statusIndex !== null
        ? `?statusIndex=${statusIndex}`
        : '';

    const res = await fetch(
      `${BASE_ENDPOINT}/v1/hr/job-titles${queryParams}`
    );

    if (!res.ok) {
      throw new Error(
        'Failed to fetch job titles'
      );
    }

    const jsonData: ApiResponse<IJobTitle> =
      await res.json();
    return jsonData;
  } catch (error) {
    console.error(
      'Error fetching job titles:',
      error
    );
    throw error;
  }
};
