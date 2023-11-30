import { create } from 'zustand';
import { ApiResponse } from '../../interface/Response';
import { UsersDataType } from '../../interface/it';
import { BASE_ENDPOINT } from '../BaseEndpoint';

export const fetchUser = async (
  email: string
) => {
  try {
    const queryParams =
      email !== null
        ? `?user_email=${email}`
        : '';

    console.log(queryParams);
    const res = await fetch(
      `${BASE_ENDPOINT}/v1/users/${queryParams}`
    );

    if (!res.ok) {
      throw new Error(
        'Failed to fetch job titles'
      );
    }
    const jsonData: ApiResponse<UsersDataType> =
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

type UserState = {
  user: Partial<UsersDataType>;
  email: string;
  addEmail: (email: string) => void;
  addUser: (newUsers: UsersDataType[]) => void;
  removeUser: () => void;
};

export const userStore = create<UserState>(
  (set) => ({
    user: {},
    email: '',
    addEmail: (email) => {
      set({ email: email });
    },
    addUser: (newUsers: UsersDataType[]) =>
      set({ user: newUsers[0] }),
    removeUser: () => set({ user: {} }),
  })
);
