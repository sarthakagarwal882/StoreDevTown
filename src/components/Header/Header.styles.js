import styled from "styled-components";

export const HeaderWrapperDiv=styled.div `
width: 100%;
display: flex;
flex-direction: column;
`
export const HeaderDiv=styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const HeaderH1=styled.h1`
font-size: 2.5rem;
color: #be47df;
margin: 0;
`

export const HeaderHr=styled.hr`
background-color: #333333;
border: none;
height: 1px;
width: 100%;
margin: 0;

`
export const FilterDiv=styled.div`
position: relative;
`

export const FilterSpan=styled.span`
padding: 0.5rem;
border: 1px solid #be47df;
border-radius: 4px;
cursor: pointer;
`

export const FilterDropdownDiv=styled.div`
display: none;
right: 0;
border-radius: 4px;
position: absolute;
top: 30px;
background: rgba(227, 213, 231, 0.3);
border-radius: 6px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(7.4px);
-webkit-backdrop-filter: blur(7.4px);
border: 2px solid rgba(227, 213, 231, 1);
${FilterDiv}:hover & {
    display: initial;
    right: 0;
}
&:hover{
    display: initial;
}
`
export const FilterDropdownUl=styled.ul`
z-index: 100;
padding:0 0.5rem;
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
`

export const FilterDropdownLi=styled.li`
padding: 0.6rem 1rem;
list-style: none;
margin: auto;
cursor: pointer;
color: #222222;
transition: 0.1s ease-in-out;
&:hover{
    transform: scale(1.1);
    color: #000000;
}
`