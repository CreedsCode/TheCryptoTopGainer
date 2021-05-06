import React, {FC} from "react";
import styled from "styled-components";
import {ValueText} from "./ValueText";

const Inner = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Base = styled.div`
    display: flex;
    flex-direction: row;
    background-color: whitesmoke;
    border: 7px solid whitesmoke;
    border-radius: 40px;
    box-shadow: -4px 4px 11px 0px rgba(0,0,0,0.6);
    -webkit-box-shadow: -4px 4px 11px 0px rgba(0,0,0,0.6);
    -moz-box-shadow: -4px 4px 11px 0px rgba(0,0,0,0.6);
`;

const NameText = styled.div`
    font-size: 2rem;
    margin: 20px;
`;

const At = styled.div`
font-size: 2rem;
    margin: 20px;
    margin-left: 0px;
    margin-right: 18px;
    font-weight:bold;
`;
export const Card: FC = () => (
    <Inner>
        <Base>
            <NameText>Bitcoin Cash</NameText>
            <At>With</At>
            <ValueText value={187}/>
        </Base>
    </Inner>
)


