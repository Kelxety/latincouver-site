import { IDepartment } from '../../interface/Department';
import { ApiResponse } from '../../interface/Response';
import { BASE_ENDPOINT } from '../BaseEndpoint';

export const addDepartment = async (
  data: IDepartment
) => {
  try {
    const authToken =
      localStorage.getItem('access');
    const res = await fetch(
      `${BASE_ENDPOINT}/v1/hr/departments/`,
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

export const editDepartment = async (
  data: IDepartment & { id: number }
) => {
  const authToken =
    localStorage.getItem('access');
  try {
    const res = await fetch(
      `${BASE_ENDPOINT}/v1/hr/departments/${data.id}/`,
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
        'Error adding job title:',
        error
      );
    }
    console.error(error);
    throw error;
  }
};

export const fetchDepartmentById = async (
  id: number
) => {
  try {
    const res = await fetch(
      `${BASE_ENDPOINT}/v1/hr/departments/${id}`
    );

    if (!res.ok) {
      throw new Error(
        'Failed to fetch department'
      );
    }

    const jsonData: { id: number; name: string } =
      await res.json();
    return jsonData;
  } catch (error) {
    console.error(
      'Error fetching department:',
      error
    );
    throw error;
  }
};

export const fetchDepartments = async ({
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
      `${BASE_ENDPOINT}/v1/hr/departments/${queryParams}`
    );

    if (!res.ok) {
      throw new Error(
        'Failed to fetch job titles'
      );
    }

    const jsonData: ApiResponse<IDepartment> =
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
