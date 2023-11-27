import { ILeaveRequest } from '../../interface/LeaveRequest';
import { ApiResponse } from '../../interface/Response';
import { BASE_ENDPOINT } from '../BaseEndpoint';

export const addLeaveRequest = async (
  data: ILeaveRequest
) => {
  try {
    const res = await fetch(
      `${BASE_ENDPOINT}/v1/hr/leave-request/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) {
      throw new Error(
        `Failed to add leave request: ${res.statusText}`
      );
    }

    return res.json();
  } catch (error) {
    if (typeof error === 'object') {
      console.error(
        'Error adding leave request:',
        error
      );
    }
    console.error(error);
    throw error;
  }
};

export const editLeaveRequest = async (
  data: ILeaveRequest & { id: number }
) => {
  try {
    const res = await fetch(
      `${BASE_ENDPOINT}/v1/hr/leave-request/${data.id}/`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) {
      throw new Error(
        `Failed to add leave request: ${res.statusText}`
      );
    }

    return res.json();
  } catch (error) {
    if (typeof error === 'object') {
      console.error(
        'Error adding leave request:',
        error
      );
    }
    console.error(error);
    throw error;
  }
};

export const fetchByLeaveRequestId = async (
  id: number
) => {
  try {
    const res = await fetch(
      `${BASE_ENDPOINT}/v1/hr/leave-request/${id}`
    );

    if (!res.ok) {
      throw new Error(
        'Failed to fetch leave request'
      );
    }

    const jsonData: ILeaveRequest =
      await res.json();
    return jsonData;
  } catch (error) {
    console.error(
      'Error fetching leave request:',
      error
    );
    throw error;
  }
};

export const fetchLeaveRequest = async ({
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
      `${BASE_ENDPOINT}/v1/hr/leave-request/${queryParams}`
    );

    if (!res.ok) {
      throw new Error(
        'Failed to fetch leave requests'
      );
    }

    const jsonData: ApiResponse<ILeaveRequest> =
      await res.json();
    return jsonData;
  } catch (error) {
    console.error(
      'Error fetching leave requests:',
      error
    );
    throw error;
  }
};
