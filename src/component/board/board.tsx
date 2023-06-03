import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../pageTemplate';
import Container from '../container/Container';
const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const BoardTitle = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

// const BoardList = styled.ul`
//   width: 100%;
//   list-style-type: none;
//   padding: 0;
// `;


const BoardList = styled.div`
  width: 100%;
  list-style-type: none;
  padding: 0;
`;

const BoardListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  height: 50px;  /* 이 부분을 추가하거나 변경해보세요 */
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  background-color: white;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const BoardItemTitle = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: #333;
`;

const BoardItemDate = styled.span`
  font-size: 1.2rem;
color: #999;
`;

interface BoardItem {
  id?: number;
  title?: string;
  date?: string;
}

const data: BoardItem[] = [
  {
    id: 1,
    title: '게시물 제목 1',
    date: '2023-04-23', 
  },
  {
    id: 2,
    title: '게시물 제목 2',
    date: '2023-04-22',
  },
  {
    id: 3,
    title: '게시물 제목 3',
    date: '2023-04-21',
  },
];

const Board = ({ id, title , date }: BoardItem) => {
  return (
      <div >
        <BoardTitle>게시판 목록</BoardTitle>
        <BoardList>
          {data.map(({ id, title, date }) => (
            <BoardListItem key={id}>
              <BoardItemTitle>{title}</BoardItemTitle>
              <BoardItemDate>{date}</BoardItemDate>
            </BoardListItem>
          ))}
        </BoardList>
      </div>
  );
};
export default Board;
