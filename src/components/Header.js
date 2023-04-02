import React from 'react'
import styled from 'styled-components'

function header() {
    return (
        <Nav>
            <Logo src="/disney/logo.svg" />
            <NavMenu>
                <a>
                    <img src="/disney/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/disney/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/disney/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/disney/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/disney/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/disney/series-icon.svg" />
                    <span>SERIES</span>
                </a>

                
            </NavMenu>
            <UserImg src= "https://yt3.ggpht.com/yti/APfAmoGxIk2y2FD-XNYJZdrS9YHaS19jeW_dWHPJ5w=s88-c-k-c0x00ffffff-no-rj-mo" />
        </Nav>
    )
}

export default header

const Nav = styled.nav`
    height: 60px;
    overflow-X: hidden;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`
const Logo = styled.img`
width: 80px;
`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a{
        display: flex;
        cursor: pointer;
        align-items: center;
        padding: 0 12px;
        img {
            height: 20px;   
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -2px;
                opacity: 0;
                transform-origin: center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45,0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
const UserImg = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
    
`