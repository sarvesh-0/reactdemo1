import styled from 'styled-components';
import React from 'react'

const Box = styled.div`background:turquoise; border:5px black; width:500px;`;
const Content = styled.p`font-size:16px; text-align: center; color:red;`;
const MyButton = styled.button`color:green; font-size:1em; margin:1em; border: 2px solid blue; border=radius:3px;`;

//A new component based on button , but with some override styles
const TomatoButton = styled(MyButton)`color: tomato; border-color: tomato;`;

export default function StyledFC(){
    return(
        <>
        <Box>
            <Content>Style applied using Styled-Component library</Content>
        </Box>
        <MyButton>Click Me</MyButton>
        <TomatoButton>Tomato Button</TomatoButton>
        </>
    )
}