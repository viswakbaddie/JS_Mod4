'use strict';

async function showInfo() {

    const show = prompt('Enter the show.')
    const url = `https://api.tvmaze.com/singlesearch/shows?q=${show}`

    const response = await fetch(url)
    const responseJSON = await response.json()

    console.log(responseJSON)

    const name = responseJSON['name']
    const link = responseJSON['url']
    const image = responseJSON['image']['medium']
    const summary = responseJSON['summary']
    const genres = responseJSON['genres']

    const h1 = document.getElementById('showTitle')
    h1.innerText = name

    const a = document.getElementById('url')
    a.href = link

    const img = document.getElementById('imgShow')
    img.src = image

    const pSummary = document.getElementById('summary')
    pSummary.innerHTML = summary

    const pGenres = document.getElementById('genres')
    pGenres.innerText = `${genres[0]}|${genres[1]}|${genres[2]}`
}

showInfo()