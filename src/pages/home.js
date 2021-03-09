import React,{useState} from 'react'
import ShowGrid from '../components/Shows/ShowGrid';
import ActorGrid from '../components/Actors/ActorGrid';

import MainPage from "../components/MainPage"

import {apiGet} from "../misc/config";
import { SearchInput, RadioInputsWrapper,SearchButtonWrapper } from './Home.styled';
import CustomRadio from '../components/CustomRadio';


function Home  () {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const [searchOption, setSearchOption] = useState("shows")
    const isSearchOption = searchOption === "shows"
    const onInputChange = (ev) => {
        setInput(ev.target.value)
    }
    const searchInput = () => {
        apiGet(`/search/${searchOption}?q=${input}`)
        .then((results) => setResult(results))
    }
    const whenEnter = (ev) => {
        if (ev.keyCode === 13){
            searchInput();
        }
    }
    const display = () => {if (result && result.length === 0) {
        return (<div>No Results</div>)}
        if(result && result.length>0){
            return(result[0].show ? <ShowGrid data= {result}/> : <ActorGrid data = {result} />)
        }
        return null

}
const onRadioChange = (ev) => {
    setSearchOption(ev.target.value)
}
console.log(searchOption)
    return (
        <MainPage>
            <SearchInput type="text" onChange={onInputChange} value={input} onKeyDown = {whenEnter} />
            <RadioInputsWrapper>
                <div>
                    <CustomRadio
                    label = "Shows"
                    id="shows-search" 
                    value="shows" 
                    checked = {isSearchOption}
                    onChange = {onRadioChange}
                    />
                </div>
                <div>
                    <CustomRadio
                    label = "Actor"
                    id="actor-search"
                    onChange = {onRadioChange} 
                    value= "people" 
                    checked = {!isSearchOption}
                    />
                </div>
            </RadioInputsWrapper>
            <SearchButtonWrapper>
            <button type="button" onClick={searchInput}> Search </button>
            </SearchButtonWrapper>
            {display()}
        </MainPage>
    )
}

export default Home
