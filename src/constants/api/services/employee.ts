import { IEmployee } from '../../interface/Employee';
import { ApiResponse } from '../../interface/Response';
import { BASE_ENDPOINT } from '../BaseEndpoint';

export const fetchEmployee = async ({
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
      `${BASE_ENDPOINT}/v1/hr/employees/${queryParams}`
    );

    if (!res.ok) {
      throw new Error(
        'Failed to fetch employees'
      );
    }

    const jsonData: ApiResponse<IEmployee> =
      await res.json();
    return jsonData;
  } catch (error) {
    console.error(
      'Error fetching employee:',
      error
    );
    throw error;
  }
};
