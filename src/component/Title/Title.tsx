import React, { FC } from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';

interface TitleProps {
    logo?: React.ReactNode;
    text: string;
    onButtonClick: () => void;
}

const Header = styled('header')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: '#FFD54F'
});

const LogoContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
});

const TitleText = styled('h1')({
    color: 'white',
    marginLeft: '8px',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase'
});

const StyledButton = styled(Button)({
    backgroundColor: "#222229",
    color: "#FFFFFF",
    "&:hover": {
        backgroundColor: "#1A1A1D"
    },
});


const Title: FC<TitleProps> = ({ logo, text, onButtonClick }) => {
    return (
        <Header>
            <LogoContainer>
                {logo}
                <TitleText>{text}</TitleText>
            </LogoContainer>
            <StyledButton variant="contained" onClick={onButtonClick}>
                Log Out
            </StyledButton>
        </Header>
    );
};

export default Title;