export const saveToLocalStorage = <T>(key: string, data: T): void => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.error('Failed to save to local storage', error)
  }
}

export const loadFromLocalStorage = <T>(key: string): T | null => {
  try {
    const serializedData = localStorage.getItem(key);
    if (!serializedData) return null;

    return JSON.parse(serializedData) as T;
  } catch (error) {
    console.error('Failed to load from local storage', error);
    return null;
  }
}

export const isTokenEmpty = (): boolean => {
  if (!loadFromLocalStorage('accessToken')) {
    return true;
  }

  return false;
}
