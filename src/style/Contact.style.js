import styled from "styled-components";

export const ContactWrapper = styled.div`
    width: 100%;
    height: 1000px;
    background: #5cd0fd;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContactInput = styled.input`
    
`;

export const ContactTextArea = styled.textarea`
    
`;

export const ContactSubmitButton = styled.button`
    
`;

export const ContactForm = styled.form`
    background: #f9f9f9;
    display: flex;
    flex-direction: column;
    padding: 2vw 4vw;
    width: 90%;
    max-width: 600px;
    border-radius: 12px;

    h2 {
        color: #0a1115;
        font-weight: 700;
        margin-bottom: 24px;
        text-align: center;
    }

    ${ContactInput}, ${ContactTextArea} {
        border: 0;
        margin: 12px;
        padding: 24px;
        outline: none;
        background: #dee0e1;
        font-size: 16px;
    }

    ${ContactSubmitButton} {
        padding: 16px;
        background: #131c21;
        color: #f9f9f9;
        font-size: 16px;
        border: 0;
        outline: none;
        cursor: pointer;
        width: 160px;
        margin: 24px auto 0;
        border-radius: 32px;
    }
`;