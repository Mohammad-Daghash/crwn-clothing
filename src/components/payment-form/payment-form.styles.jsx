import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const PaymentFormContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FormContainer = styled.form`
    height: 100px;
    min-width: 500px;
`;

export const PaymentButton = styled(CustomButton)`
    margin-left: auto;
    margin-top: 30px;
`;
