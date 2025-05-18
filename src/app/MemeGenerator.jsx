import { useState, useEffect } from "react";

const MemeGenerator = () => {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "https://api.memegen.link/images/both/width_or_height/why_not_both~q.png"
  });

  const [allMemes, setAllMemes] = useState([]);


  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data => setAllMemes(data.data.memes))
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const newMemeUrl = allMemes[randomNumber].url
    setMeme(prevMeme => ({...prevMeme, imageUrl: newMemeUrl}))

  }

  function handleChange(event) {
    const {id, value} = event.currentTarget;
    setMeme({...meme, [id]: value})

  }

  return (
    <div>
      <main className="meme-main">
        <div className="meme-form">
          <h2>Meme Generator</h2>
          <div className="d-flex">
            <label htmlFor="topText">
              Top text
              <input
                type="text"
                name="topText"
                id="topText"
                placeholder="type some characters"
                onChange={handleChange}
                value={meme.topText}
              />
            </label>
            <label htmlFor="bottomText">
              Bottom text
              <input
                type="text"
                name="bottomText"
                id="bottomText"
                placeholder="type some characters"
                onChange={handleChange}
                value={meme.bottomText}
              />
            </label>
          </div>
          <button onClick={getMemeImage}>Get a new meme image</button>
          <div className="displayarea">
            <img src={meme.imageUrl} alt="meme" />
            <h3 className="top-text">{meme.topText}</h3>
            <h3 className="bottom-text">{meme.bottomText}</h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MemeGenerator;
