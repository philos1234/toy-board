import React, { Children } from 'react';
import Board from '../../component/board/board';
import PageTemplate from '../../component/PageTemplate';
import Title from '../../component/Title/Title';

const Home = () => {
    return (<>
        <Title logo={""} text={"Toy Board"} onButtonClick={() => { }} />
        <PageTemplate>
        </PageTemplate >
    </>
    );
};

export default Home;