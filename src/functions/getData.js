export async function getData(url) {
  try {
    const response = await fetch(`${url}`, { cache: "no-store" });
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
}
