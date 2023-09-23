export async function getJokes() {
    const response = await fetch('http://official-joke-api.appspot.com/random_ten')
    console.log(response);
    return await response.json();
}