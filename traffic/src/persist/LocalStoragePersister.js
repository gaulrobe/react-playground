export const PERSIST_KEY = 'segment_state'

export function persistStateInLocalStorage(state) {
    const json = JSON.stringify(state);
    localStorage.setItem(PERSIST_KEY, json);
}