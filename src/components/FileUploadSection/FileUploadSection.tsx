import React, { useRef, useState } from "react";
import * as S from "./Styles";

const FileUploadSection: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setUploadedFile(event.target.files[0]);
        }
    };

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); // 파일 선택 창 열기
        }
    };

    return (
        <S.FileUploadContainer>
            <S.UploadButton onClick={handleButtonClick}>파일 업로드</S.UploadButton>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }} // input 숨기기
            />
            {uploadedFile && (
                <S.FileDetails>
                    <S.FileName>{uploadedFile.name}</S.FileName>
                    <S.FileSize>{(uploadedFile.size / 1024).toFixed(2)} KB</S.FileSize>
                </S.FileDetails>
            )}
        </S.FileUploadContainer>
    );
};

export default FileUploadSection;
