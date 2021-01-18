import styled from "styled-components";
import Today from "./Today";
import Weather from "./Weather";

const Wrapper = styled.div`
    width:1190px;
    min-width:1190px;
    margin: 0 auto;
    border-left:5px solid gainsboro;
    border-right:5px solid gainsboro;
    font-size:25px;
`;

const Section = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fill, 33.32%);
    grid-gap: 4.5px 0%;
`;
const Content1 = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    text-align:center;
    line-height:150px;
    background-color:lightgrey;
    border:3px solid rgba(20,20,20,0.3);
`;

const Sub = styled.div`
    text-align:center;
    line-height:100px;
    background-color:whitesmoke;
    display : ${props =>props.show ? "block": "none"};
`;

const Content2 = styled.div`
    grid-column-start: 1;
    grid-column-end:3;
    text-align:center;
    line-height:100px;
    background-color:lightgrey;
    border:3px solid rgba(20,20,20,0.3);
    border-right:none;
    &:hover{
        ${Sub}{
            display:block;
        }
        background-color:gray;
    }
`;

const Content2_1 = styled.div`
    text-align:center;
    line-height:100px;
    background-color:lightgrey;
    border:3px solid rgba(20,20,20,0.3);
    border-left:none;
    &:hover{
        ${Sub}{
            display:block;
        }
        background-color:gray;
    }
`;

const Content = styled.div`
    text-align:center;
    line-height:250px;
    background-color:lightgrey;
    border:3px solid rgba(20,20,20,0.3);
`;

const Lin = styled.a`
    display:block;
    width:100%;
    height:100%;
`;

const Home =() =>(
    <Wrapper>
        <Section>
    <Content1><Lin href="#">Link 1</Lin></Content1>
    <Content1><Lin href="#">Link 1.5</Lin></Content1>
    <Content2>Today<Sub show={false}><Today/></Sub></Content2>
    <Content2_1>Weather<Sub show={false}>sub 2</Sub></Content2_1>
    <Content><Lin href="#">Youtube</Lin></Content>
    <Content><Lin href="#">Facebook</Lin></Content>
    <Content><Lin href="#">Instagram</Lin></Content>
        </Section>
    </Wrapper>
);

export default Home;