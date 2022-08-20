const myForm = document.getElementById("myForm")
const startsWith = document.getElementById("startsWith")
const btnSearch = document.getElementById("btnSearch")
const myContent = document.getElementById("myContent")
const apiKey = "d2625193407a8318174c6d989eca9aec"

myForm.addEventListener("submit", e => e.preventDefault())

const draw = heroes => {
    myContent.innerText = ""
    const fragment = document.createDocumentFragment()

    heroes.array.forEach(hero => {
        const container = document.createElement("div")
        const title = document.createElement("h2")
        const image = document.createElement("img")

        title.textContent = hero.name
        image.scr = `${hero.thumbnail.path}/portrait_incredible.${hero.thumbnail.extension}`
        container.appendChild(title)
        container.appendChild(image)
        fragment.appendChild(container)
    });

    myContent.appendChild(fragment)
}

btnSearch.addEventListener("click", async () => {
    const encodeName = encodeURI(startsWith.value)
    const marvelURL = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${startsWith.value}&apikey=${apiKey}`
    const resp = await axios.get(marvelURL)
    draw(resp.data.data.result)
})