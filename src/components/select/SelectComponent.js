import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  HintOfItem,
  WordNameOfItem,
  EachSelectViewLine,
  SelectViewWrapper,
  MainWrapper,
  EachSelectViewItem,
} from './style';

const SelectComponent = () => {
  const nickname = '11t518s';
  const [offset, setOffset] = useState(0);
  const [wordList, setWordList] = useState([[], [], [], []]);
  const [selectedList, setSelectedList] = useState([]);

  const backgroundGradientList = [
    'linear-gradient(to top, #bf5ae0, #a811da)',
    'linear-gradient(to top, #ff0016, #ff7a00)',
    'linear-gradient(to top, #2ce375, #0098ac)',
    'linear-gradient(to top, #ed4264, #fedc7f)',
    'linear-gradient(to top, #00b562, #b7e306)',
    'linear-gradient(to top, #0533da, #05c1da)',
    'linear-gradient(to top, #8e2de2, #4a00e0)',
    'linear-gradient(to top, #8e2de2, #ff004d)',
    'linear-gradient(to top, #ff512f, #dd2476)',
    'linear-gradient(to top, #ef5600, #ffc837)',
  ];

  const ROW = 4;

  useEffect(() => {
    getWord();
  }, []);

  const onGetMoreWordList = () => {
    getWord();
  };

  //axios사용해서 데이터 받아오기

  const getWord = async () => {
    const response = await axios.get('http://3.37.42.147/api/v1/alacard/wordlist', { params: { nickname, offset } });
    const setData = await response.data.data;
    const newWordList = setData.map((i) => ({ ...i, clicked: false }));

    if (wordList.length > 2) {
      setWordList([
        [...wordList[0], ...newWordList.slice(0, ROW)],
        [...wordList[1], ...newWordList.slice(ROW - 1, ROW * 2 - 1)],
        [...wordList[2], ...newWordList.slice(ROW * 2 - 1, ROW * 3 - 1)],
        [...wordList[3], ...newWordList.slice(ROW * 3 - 1, -1)],
      ]);
    } else {
      setWordList([
        [...newWordList.slice(0, ROW)],
        [...newWordList.slice(ROW - 1, ROW * 2 - 1)],
        [...newWordList.slice(ROW * 2 - 1, ROW * 3 - 1)],
        [...newWordList.slice(ROW * 3 - 1, -1)],
      ]);
    }
    setOffset(offset + newWordList.length);
  };

  // click했을 때 일어나는 상황 1. clicked엘리먼트에 속성 변경 시키기 2. selectedList에 추가

  const onWordClickedHandler = (props) => {
    const clickedItem = props.item;
    const randomNumber = Math.floor(Math.random() * 10);

    // clicked 요소 값 변화
    setWordList([
      ...wordList.map((word) =>
        word.map((item) =>
          item === clickedItem
            ? clickedItem.clicked
              ? { ...item, clicked: false }
              : { ...item, clicked: backgroundGradientList[randomNumber] }
            : { ...item },
        ),
      ),
    ]);

    // selectedList에 추가
    setSelectedList(
      clickedItem.clicked !== false
        ? selectedList.filter((item) => item !== [{ ...clickedItem, clicked: false }])
        : [...selectedList, clickedItem],
      // ...wordList[0].filter((item) => item.clicked !== false),
      // ...wordList[1].filter((item) => item.clicked !== false),
      // ...wordList[2].filter((item) => item.clicked !== false),
      // ...wordList[3].filter((item) => item.clicked !== false),
    );
    console.log([{ ...clickedItem, clicked: false }]);
    console.log(
      selectedList.filter(
        (item) =>
          item !==
          {
            bigCategory: '게임',
            clicked: false,
            hint: '배그 플레이',
            middleCategory: '배틀그라운드',
            wordName: '치킨매니아',
          },
      ),
    );
  };

  const onSubmitHandler = () => {
    setSelectedList([
      ...wordList[0].filter((item) => item.clicked !== false),
      ...wordList[1].filter((item) => item.clicked !== false),
      ...wordList[2].filter((item) => item.clicked !== false),
      ...wordList[3].filter((item) => item.clicked !== false),
    ]);
  };
  return (
    <MainWrapper>
      <header>
        <img src="" alt="lala" />
        <img src="" alt="x" />
      </header>
      <div>nickname과 관련된 키워드를 모두 골라봥</div>
      <div style={{ color: 'white' }}>{selectedList.length}개의 키워드를 골랐어!</div>
      <SelectViewWrapper>
        {wordList.map((word, index) => (
          <div key={index}>
            {word.map((item, index) => (
              <EachSelectViewItem
                key={index}
                onClick={(event) => onWordClickedHandler({ event, item })}
                style={{
                  background: item.clicked ? item.clicked : 'rgba(255, 255, 255, 0.1)',
                }}>
                <HintOfItem>{item.hint}</HintOfItem>
                <WordNameOfItem>{item.wordName}</WordNameOfItem>
              </EachSelectViewItem>
            ))}
          </div>
        ))}
      </SelectViewWrapper>
      <button onClick={onGetMoreWordList}>누르면 더 나와라 얍</button>
      <button onClick={onSubmitHandler}>누르면 보내져라 얍</button>
    </MainWrapper>
  );
};

export default SelectComponent;
