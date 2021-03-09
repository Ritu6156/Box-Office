import React from 'react'
import Nav from "./Nav"
import Title from "./Title"

function MainPage ({children}) {
    return (
        <div>
        <Title title = "BOX OFFICE" subtitle = "You wanna search a movie or an starred actor?"/>
        <Nav />
        {children}
        </div>
    )
}

export default MainPage
