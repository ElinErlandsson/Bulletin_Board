import React from 'react'
import ReactPost from './ReactPost';

export default function BulletinBoard() {

    let faqList = [
        {
            id: 0,
            question: "Vad är tre fördelar med att använda React?",
            answer: [
                {
                    description: "Det växer idag snabbare än konkurrerande verktyg."
                },
                {
                    description: "Jsx(Javascript XML) Gör att du kan skriva html och javascript i samma fil och då kunna implementera Javascript variabler in i HTML-koden."
                },
                {
                    description: "Biblioteket är stort och dokumentationen omfattande och detaljerad. Vilket gör att du snabbare och med mindre kod kan bygga upp en hemsida."
                }
            ] 
        },
        {
            id: 1,
            question: "Vad är tre nackdelar med att använda React?",
            answer: [
                {
                    description: "Den snabba utvecklingen. React är fortfarande en helt ny teknik och utvecklas snabbt. Därför kan det vara svårt för vissa att hålla takten på grund av att nya funktioner kommer ut och gamla glömmas bort."
                },
                {
                    description: "Brist på ordentlig dokumentation. Majoriteten tycker att React-dokumentationen har för lite innerhåll och är allmänt dålig."
                },
                {
                    description: "Det finns ingen fördefinierad struktur. Vilket kan leda till svårläslig och ineffektiv kod."
                }
            ] 
        },
        {
            id: 2,
            question: "Vad är tre skillnader mellan React och Angular?",
            answer: [
                {
                    description: "React är väldigt flexibelt och bör kombineras med många andra bibliotek medan Angular kommer med ett flertal verktyg som är optimerade för varandra."
                },
                {
                    description: "React är inte ett ramverk medans Angular är ett ramverk."
                },
                {
                    description: "Angular använder webbläsarens DOM, medan React använder en virtuell DOM. En virtuell DOM är en förenklad version av DOM. Genom att använda en virtuell DOM så kan du ändra vilket element som helst väldigt snabbt och utan att behöva rendera hela DOMen. Det förändrar prestandan drastiskt från bra till utmärkt."
                }
            ]
        },
        {
            id: 3,
            question: "Vad är tre bibliotek man kan använda med React?",
            answer: [
                {
                    description: "Create React App är ett command line interface som gör att du enkelt kan skapa ett React.js-projekt. Den bygger strukturer och innehåller verktyg som behövs i början."
                },
                {
                    description: "Material UI är en uppsättning komponenter som skapats av Google, som implementerar deras berömda Material Design."
                },
                {
                    description: "React-spring är ett fysikbaserat animationsbibliotek som ska täcka de flesta av dina UI-relaterade animationsbehov. Det ger dig verktyg som är tillräckligt flexibla för att du säkert kan kasta dina idéer till rörliga gränssnitt."
                }
            ]
        }
    ];

    return (
        <div className="faq-container">
            {faqList.map((obj, i) => {
                return(
                    <ReactPost {...obj} key={i}/>
                )
            })}
        </div>
    )
}
