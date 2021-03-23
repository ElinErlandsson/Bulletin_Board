import React, {useState} from 'react'
import PostLike from './PostLike';
import Pin from '../Assets/Bilder/pin.png'

export default function ReactPost(obj) {

    const [liked, setLike] = useState(false);


    return (
            <div className="faq-notes">
                <img className="pin-img" width="30px" src={Pin} alt="Pin"/>
                <h4 className="question">{obj.question}</h4>
                <ul>
                    {obj.answer.map((item, i) => {
                        return<li key={i}><h6>{item.description}</h6></li>
                    })}
                </ul>
                <button className={liked? "liked-heart" : ""} onClick={() => setLike(!liked)}><i className="far fa-heart"></i></button>
                {liked && <PostLike/>}
            </div>
    )
}
