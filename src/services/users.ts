
const baseURL = 'https://api.spotify.com'

export async function getCurrentUserProfile(accessToken: string) {
    try {
        const response = await fetch(
            `${baseURL}/v1/me`, {
                headers: {Authorization: `Bearer ${accessToken}`}
            }
        );
        if (!response.ok) {
            throw new Error("Error en la llamada");
        }
        return await response.json()
    } catch (error) {
      console.error(error);
      return error
    }
}