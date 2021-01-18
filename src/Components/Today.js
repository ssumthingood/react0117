import styled from "styled-components"

const date = new Date();
let yyyy = date.getFullYear();
let mm = date.getMonth()+1;
let dd=date.getDate();
let yyyymmdd = yyyy+"/"+(mm<10 ? "0"+mm :mm) +"/" + (dd<10 ? "0"+dd:dd);

const Day = styled.div`
    font-size:30px;
`;

const Today =()=>(
    <Day>{yyyymmdd}</Day>
);

export default Today;