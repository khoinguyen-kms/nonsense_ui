import { atom } from "jotai"

export type AuthPayload = {
  username: string,
  password: string
};

export const authAtom = atom<AuthPayload>({
  username: '',
  password: ''
});

export const isAuthenticated = atom<boolean>(false);
