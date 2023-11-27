import { ApiResponse } from '../../interface/Response';
import { ISchedule } from '../../interface/Schedule';
import { BASE_ENDPOINT } from '../BaseEndpoint';

export const addSchedule = async (
  data: ISchedule
) => {
  try {
    const authToken =
      localStorage.getItem('access');
    const res = await fetch(
      `${BASE_ENDPOINT}/v1/hr/employees-schedule/`,
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
        `Failed to add schedule: ${res.statusText}`
      );
    }

    return res.json();
  } catch (error) {
    if (typeof error === 'object') {
      console.error(
        'Error adding schedule:',
        error
      );
    }
    console.error(error);
    throw error;
  }
};

export const editSchedule = async (
  data: ISchedule & { id: number }
) => {
  const authToken =
    localStorage.getItem('access');
  try {
    const res = await fetch(
      `${BASE_ENDPOINT}/v1/hr/employees-schedule/${data.id}/`,
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
        `Failed to add schedule: ${res.statusText}`
      );
    }

    return res.json();
  } catch (error) {
    if (typeof error === 'object') {
      console.error(
        'Error adding schedule:',
        error
      );
    }
    console.error(error);
    throw error;
  }
};

export const fetchScheduleById = async (
  id: number
) => {
  try {
    const res = await fetch(
      `${BASE_ENDPOINT}/v1/hr/employees-schedule/${id}`
    );

    if (!res.ok) {
      throw new Error('Failed to fetch schedule');
    }

    const jsonData: { id: number; name: string } =
      await res.json();
    return jsonData;
  } catch (error) {
    console.error(
      'Error fetching schedule:',
      error
    );
    throw error;
  }
};

export const fetchSchedule = async ({
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
      `${BASE_ENDPOINT}/v1/hr/employees-schedule/${queryParams}`
    );

    if (!res.ok) {
      throw new Error('Failed to fetch schedule');
    }

    const jsonData: ApiResponse<ISchedule> =
      await res.json();
    return jsonData;
  } catch (error) {
    console.error(
      'Error fetching schedule:',
      error
    );
    throw error;
  }
};
