import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';

const ContactButton = styled.button `
background-color: ${(props) => (props.isPink ? "pink" : "#3c7f8b")};
border: 2px solid ${(props) => (props.isPink ? "pink" : "#3c7f8b")};
border-radius: 5px;
color: ${(props) => (props.isPink ? "black" : "white")};
padding: 10px;

&:hover {
    box-shadow: 5px 5px 5px 0px lightgray;
    
    }
`;

function ButtonContact() {
    const [isPink , setIsPink] = useState(false)
    return (
    <ContactButton isPink={isPink} onClick={() => setIsPink(!isPink)}>Button Contact</ContactButton>
)
}

export default ButtonContact