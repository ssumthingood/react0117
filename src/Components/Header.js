import { Component } from "react";
import styled from "styled-components";

const HeadWrapper = styled.div`
    width:100%;
`;

const Heading = styled.div`
    margin:0 auto;
    width:1400px;
    height:75px;
    line-height:75px;
    text-align:center;
    background-color:grey;
    font-size:50px;
`;

const Header=()=>(
    <HeadWrapper>
        <Heading>
        Welcome
        </Heading>
    </HeadWrapper>
);

export default Header;