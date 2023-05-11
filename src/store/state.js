import { proxy } from 'valtio';

const defaultState = { loading: false, translate: false };

export const state = proxy({ ...defaultState });
