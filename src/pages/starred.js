import React,{useState, useEffect} from 'react'
import MainPage from "../components/MainPage"
import { apiGet } from '../misc/config'
import { useShows } from '../misc/Custom-hooks'
import ShowGrid from "../components/Shows/ShowGrid"

function Starred () {
    const [starred] = useShows()
    const [shows, setShows] = useState(null)
    const [isLodaing, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        if(starred && starred.length > 0){
            const promises = starred.map(showId => apiGet(`/shows/${showId}`))
            Promise.all(promises)
            .then(apiData => apiData.map(show => ({show})))
            .then(results => {
                setShows(results)
                setIsLoading(false)
            }).catch(err => 
            {setError(err.message) 
             setIsLoading(false)})}
        else{
            setIsLoading(false)
        }}, [starred])
    return (
        <MainPage>
           {isLodaing && <div>Show is loading....</div>}
           { error && <div>{error}</div>}
           {!isLodaing && !shows && <div>No Shows added...</div>}
           {!isLodaing && shows && !error && <ShowGrid data = {shows}/>}
        </MainPage>
    )
}

export default Starred
