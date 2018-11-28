import React from 'react'
import { Link } from 'gatsby' 
import styled, { keyframes } from "styled-components"
import Layout from '../components/layout'
import Hero from "../components/hero"
import Button from "../components/button"

const FadeIn = keyframes`
  0% {
    transform: translateX(-15%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

const HeroText = styled.h1`
  color: white;
  font-size: 5rem;
  padding-left: 2rem;
  opacity: 0;
  transition: transform 300ms ease, opacity 300ms ease;
  animation: ${FadeIn} 1.2s ease forwards;
  div {
    color: ${props => props.theme.darkblack};
    font-size: 5rem;
    text-align: right;
    background-color: white;
    padding: 10px 10px 5px 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }
  .oct {
    height: 0px;
    opacity: 0;
    transition: height 400ms ease, opacity 400ms 300ms ease, transform 300ms 300ms ease;
    color: ${props => props.theme.teal};
    font-size: 5rem;
    transform: translateX(100%)

  }
  div:hover .oct {
    height: 100px;
    opacity: 1;
    transform: translateX(0);
  }
`

const IndexPage = (props) => (
  <Layout>
    <Hero page={props.location.pathname}/>
    <div style={{ 
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100vh",
    }}
    >
    {/* </div>
    <div style={{ 
      flex: '1', 
      display: "flex", 
      flexDirection: 'column',
      margin: '0 auto', 
      width: "100%", 
      height: "100vh", 
      alignItems: "center", 
      justifyContent: "center" 
    }}
    > */}
      <HeroText>Hi, my <br /> name is <div>Matthew <span className="oct">October</span></div></HeroText>
      <Link 
        to={"/about"}
        style={{ textDecoration: "none" }}
      >
        <Button text='About me' />
      </Link>
    </div>
  </Layout>
)

export default IndexPage
