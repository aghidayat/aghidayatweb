export const getCachedData = (key) => {
  try {
    const cached = localStorage.getItem(key);
    return cached ? JSON.parse(cached) : null;
  } catch {
    return null;
  }
};

export const setCachedData = (key, data, ttlMs = null) => {
  const payload = ttlMs
    ? { data, expiry: Date.now() + ttlMs }
    : { data }; // no expiry

  try {
    localStorage.setItem(key, JSON.stringify(payload));
  } catch {
    console.log('error catch')
  }
};

export const getDataWithExpiry = (key) => {
  try {
    const cached = localStorage.getItem(key);
    if (!cached) return null;

    const parsed = JSON.parse(cached);
    if (parsed.expiry && Date.now() > parsed.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return parsed.data;
  } catch {
    return null;
  }
};
