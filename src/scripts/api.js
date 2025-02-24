

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/danieleksantos/danieleksantos.github.io/main/data/projects-API.json  ';
    const fetching = await fetch(url)
    return await fetching.json()
}