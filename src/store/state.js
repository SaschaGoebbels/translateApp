import { proxy } from 'valtio';

const defaultState = { loading: false };

export const state = proxy({ ...defaultState });
