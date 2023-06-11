import type { State } from '../types';

export const isUserAuthed = (state: State) => Boolean(state.core.token);
