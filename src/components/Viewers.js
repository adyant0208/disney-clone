import React from 'react'
import styled from 'styled-components'

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="/disney/viewers-disney.png" />
            </Wrap>
            <Wrap>
                <img src="/disney/viewers-pixar.png" />
            </Wrap>
            <Wrap>
                <img src="/disney/viewers-marvel.png" />
            </Wrap>
            <Wrap>
                <img src="/disney/viewers-starwars.png" />
            </Wrap>
            <Wrap>
                <img src="/disney/viewers-national.png" />
            </Wrap>
        </Container>
    )
}

export default Viewers


const Container = styled.div`
    
    margin-top: 30px;
    display: grid;
    padding: 30px 0 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    

`
const Wrap = styled.div`
    
    
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border: 1px solid grey;
    border-radius: 4px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45,0.94) 0s;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        
    }
    &:hover{
        cursor: pointer;
        border: 2px solid white;
        transform: scaleX(1.05);
        
    }

`