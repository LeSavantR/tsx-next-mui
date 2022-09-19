export async function homeService () {
  try {
    const request = await fetch('url')
    const { data } = await request.json()
    return data
  } catch (error) {
    return error
  }
};