import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%; 
  height: 75px;
  background-color:rgb(114, 58, 218);  
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 24px;
  font-family: Arial, sans-serif;
 

  input {
    width: 100%;
    height: 75px;
    background-color:rgb(143, 120, 206); 
    border: 0;
    flex-direction: column;
    align-items: flex-end;
    padding: 0 16px;

     &::placeholder {
      color: #fff;
    }
    

    font-size: 24px;
    font-family: Arial, sans-serif;
    color: #fff;
}
`;
