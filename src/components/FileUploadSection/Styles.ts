import styled from "styled-components";

export const FileUploadContainer = styled.div`
    width: 90%;
    margin: 20px auto;
    text-align: center;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #f9f9f9;
`;

export const UploadButton = styled.button`
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

export const FileDetails = styled.div`
    margin-top: 15px;
    text-align: left;
`;

export const FileName = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: #333;
`;

export const FileSize = styled.div`
    font-size: 12px;
    color: #666;
`;
