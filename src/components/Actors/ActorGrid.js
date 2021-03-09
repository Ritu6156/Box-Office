import React from 'react'
import ActorCard from './ActorCard'
import imageNotFound from "../../images/not-found.png"
import { FlexGrid } from '../Styled'

function ActorGrid ({data}) {
    return (
            <FlexGrid>
                {
                data.map(({person}) => (<ActorCard key= {person.id}
                 id={person.id}
                 name = {person.name}
                 country = {person.country? person.country.name : null}
                 birthday = {person.birthday}
                 gender = {person.gender}
                 image = {person.image? person.image.medium: imageNotFound} 
                 />))
                }
            </FlexGrid>
        )
}

export default ActorGrid
