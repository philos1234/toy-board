import React, { Children } from 'react';
import Board from '../../component/board/board';
import PageTemplate from '../../component/pageTemplate';
import Title from '../../component/Title/Title';
import Container from '../../component/container/Container';

const Home = () => {
    return (<>
        <Title logo={""} text={"Toy Board"} onButtonClick={() => { }} />
        <PageTemplate >
            <Container>
                <Board />
            </Container>
        </PageTemplate>
    </>
    );
};

export default Home;