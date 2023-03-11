export const fetchData = async function <T>(url: string): Promise<T[]> {
  try {
    const response = await fetch(url);
    return response.json() as unknown as T[];
  } catch (error) {
    console.error(error);
    return [];
  }
};
