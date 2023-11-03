import styled from "styled-components";

export const App_container = styled.div`
  //div 엘리먼트에 대한 스타일 정의  
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Movie_container = styled.div`
  width: 250px;
  margin: 15px;
  background-color: #373B69;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0,0,0,0.1);
  color: white;
`;

export const Img = styled.img`
    width: 100%;
`;

export const Movie_info = styled.div`
     display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const H4 = styled.h4`
    margin: 0;
`;

export const Span = styled.span`
    margin-left: 3px;
`;