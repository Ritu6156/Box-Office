/* eslint-disable no-underscore-dangle */
import React,{useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import Detail from '../components/Shows/Detail';
import Seasons from '../components/Shows/Seasons';
import Cast from '../components/Shows/Cast';
import ShowMainDetail from '../components/Shows/ShowMainDetail';
import { apiGet } from '../misc/config';
import { ShowPageWrapper, InfoBlock } from './Show.styled';

function Show () {
    const {id} = useParams();
    const [show, setShow] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results => 
              { 
                  setShow(results)
                   setIsLoading(false)           
            }).catch(err => {
                setError(err.message)
                setIsLoading(false)
            })
    }, [id])
    console.log("show",show);
    if(isLoading){
        return(<div>Its loading....</div>)
    }
    if(error){
        return(<div>{error}</div>)
    }
    
    return (
        <ShowPageWrapper>
            <ShowMainDetail  
            image = {show.image}
            name = {show.name}
            rating = {show.rating}
            summary = {show.summary}
            tags = {show.genres}
            />
            <InfoBlock>
            <h1>Details</h1>
                <Detail 
                status = {show.status}
                network = {show.network}
                premiered = {show.premiered}
                />
            </InfoBlock>
            <InfoBlock>
                <h1>Seasons</h1>
                <Seasons seasons = {show._embedded.seasons}/>
            </InfoBlock>
            <InfoBlock>
                <h1>Cast</h1>
                <Cast cast = {show._embedded.cast}/>
            </InfoBlock>
        </ShowPageWrapper>
    )
}

export default Show