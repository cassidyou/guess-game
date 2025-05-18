import { words } from "./words";


export function getCurrentWord() {
    const randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex].toLowerCase()
}



export function getFarewellText(language) {
    const options = [
        `Farewell, ${language}`,
        `Adios, ${language}`,
        `R.I.P, ${language}`,
        `We'll miss you, ${language}`,
        `Oh no, not ${language}`,
        `${language} bites the dust`,
        `Gone but not forgoteen, ${language}`,
        `Off into the sunset, ${language} as we know it`,
        `${language}, it's been real`,
        `${language}, your watch has ended`,
        `${language} has left the building`,
    ];

    const randomIndex = Math.floor(Math.random() * options.length)
    return options[randomIndex]
}