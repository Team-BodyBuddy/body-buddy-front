import styled from "styled-components";

export const HeaderGroup = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center; 
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  margin-left: 5px;
  color: #979797 !important;
`;

export const CloseButton = styled.button`
  background-color: #4caf50;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  border-radius: 50%; 
  display: flex;
  align-items: center;
  margin-right: -12px;
  margin-top: -4px;
  justify-content: center;
`;

export const FormContainer = styled.form`
  background-color: #fff;
  border-radius: 11px;
  border: 1px solid #C5C5C5;
  padding: 20px; 
  max-width: 400px; 
  width: 100%; 
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 11px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: space-between;
  width: 100%;
  text-align: left; 

  & > label {
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }
`;

export const Select = styled.select`
  flex: 1;
  height: 40px;
  padding: 0 12px;
  font-size: 14px;
  border: none; 
  border-radius: 12px; 
  background-color: #ffffff;
  color: #979797;
  border: 1px solid #C5C5C5;
  appearance: none; 
  cursor: pointer;

  &:focus {
    outline: none;
    background-color: #f1f1f1; 
  }
`;

export const Input = styled.input`
  width: 80%;
  height: 46px; 
  border: 1px solid #c5c5c5; 
  border-radius: 12px; 
  padding: 0 12px; 
  font-size: 14px; 
  background-color: #fff; 
  color: #555;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
    border: 1px solid #4caf50; 
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 12px; 
  justify-content: flex-start;
  align-items: center; 
`;

