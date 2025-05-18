import React, { useState } from 'react'

const FakeJokes = () => {
    const [isShown, setIsShown] = useState(false);
    const [unreadMessage, setUnreadMessage] = useState([]);

    function  getUnreadMessages()  {
        const unreadCount = unreadMessage.length;
        if (unreadCount === 0) {
            return <p>You are all caught up.</p>
        }else if (unreadCount === 1) {
            return <p>You have {unreadCount} unread message.</p>
        }else if (unreadCount >= 2) {
            return <p>You have {unreadCount} unread messages.</p>
        }
    }


  return (
    <div>
        {isShown && (
            <article>
                <h4>I love what you said but I hate what you did.</h4>
                <span>Oh did he just said that?</span>
            </article>
        )}
      <button onClick={() => setIsShown(!isShown)}> {isShown ? "Hide" : "Show"} Punchline</button>
      <br />
      <br />
        <div>
            {getUnreadMessages()}
        </div>
    </div>
  )
}

export default FakeJokes
