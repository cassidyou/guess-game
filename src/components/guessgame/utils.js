export const languages = [
     {
        id: 1,
        name: "HTML",
        backgroundColor: "#E2680F",
        color: "#F9F4DA"
    },{
         id: 2,
        name: 'CSS',
        backgroundColor: "#328AF1",
        color: "#F9F4DA"
    },{
         id: 3,
        name: 'JavaScript',
        backgroundColor: "#F4EB13",
        color: "#1E1E1E"
    },{
         id: 4,
         name: 'React',
        backgroundColor: "#2ED3E9",
        color: "#1E1E1E"
    },{
         id: 5,
         name: 'TypeScript',
        backgroundColor: "#298EC6",
        color: "#F9F4DA"
    },{
         id: 6,
        name: 'Node.js',
        backgroundColor: "#599137",
        color: "#F9F4DA"
    },{
         id: 7,
        name: 'Python',
        backgroundColor: "#FFD742",
        color: "#1E1E1E"
    },{
         id: 8,
        name: 'Rubby',
        backgroundColor: "#D02B2B",
        color: "#FFD742"
    },{
         id: 9,
        name: 'PHP',
        backgroundColor: "#328AD5",
        color: "#F9F4DA"
    },{
         id: 10,
         name: 'Assembly',
        backgroundColor: "#2ED3E9",
        color: "#1E1E1E"
    },
]


const words = [
    "foot",
    "mathematics",
    "money", 
    "gold", 
    "bread",
    "road", 
    "rice",
    "apple",
    "material",
    "union",
    "marriage", 
    "school", 
    "article",
    "golden",
    "useful",
    "church"
]

export const getCurrentWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const word = words[randomIndex].toLowerCase();

    return word;
}


export const getMessage =  (language) => {
    const messages = [
        `Oh no ${language} is gone.`,
        `We just lost ${language} guys`,
        `I can't believe ${language} is eliminated`,
        `He couldn't save ${language}`,
        `${language} is no longer in the house`,
        `${language} has just been sent home`
    ]

    const randomIndex = Math.floor(Math.random() * messages.length)

    return messages[randomIndex];
}

