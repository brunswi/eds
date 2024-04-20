/**
 * Loads data from the specified URL asynchronously.
 *
 * @param {string} url - The URL from which to load the data.
 * @return {Promise<any>} - A Promise that resolves with the loaded data, or rejects with an error.
 */
async function loadData(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

export {
  loadData,
};
