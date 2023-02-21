import styled from "styled-components";

export const PageContainer = styled.div`
  display: block;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 25px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px auto;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 0 5px 0;
`;

export const Message = styled.textarea`
  padding: 10px;
  margin: 0 25px 0;
`;

export const Button = styled.button`
  background-color: #0070f3;
  border: 0;
  color: white;
  padding: 10px 50px;

  :hover {
    background-color: #0054b4;
  }
`;
