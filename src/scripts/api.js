

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/danieleksantos/danieleksantos.github.io/refs/heads/main/data/profile-API.json';
    const fetching = await fetch(url)
    return await fetching.json()
}