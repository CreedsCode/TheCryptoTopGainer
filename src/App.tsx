import React, {FC} from "react";
import styled, { createGlobalStyle } from 'styled-components';
import { Card } from "./card/Card";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        font-family: Articulat,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
        letter-spacing: 0;
        background-image: url("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/274/rocket_1f680.png")
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    :root {
        font-size: 10px;
    }
`;
export const App: FC = () => {
    return (
        <Container>
            <GlobalStyles/>
            <PageContainer>
                <Card/>
            </PageContainer>
        </Container>
    );
}

