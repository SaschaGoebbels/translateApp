import { proxy } from 'valtio';

const defaultState = { loading: false, translate: true };

export const state = proxy({ ...defaultState });
