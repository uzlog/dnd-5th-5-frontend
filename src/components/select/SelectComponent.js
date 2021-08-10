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
import emoji1 from '@assets/img/emoji/emoji1.svg';
import emoji2 from '@assets/img/emoji/emoji2.svg';
import emoji3 from '@assets/img/emoji/emoji3.svg';
import emoji4 from '@assets/img/emoji/emoji4.svg';
import emoji5 from '@assets/img/emoji/emoji5.svg';
import emoji6 from '@assets/img/emoji/emoji6.svg';
import emoji7 from '@assets/img/emoji/emoji7.svg';
import emoji8 from '@assets/img/emoji/emoji8.svg';
import emoji9 from '@assets/img/emoji/emoji9.svg';
import emoji10 from '@assets/img/emoji/emoji10.svg';
import emoji11 from '@assets/img/emoji/emoji11.svg';

const SelectComponent = () => {
  // 주소창에서 가져오기
  const nickname = '11t518s';
  const [offset, setOffset] = useState(0);
  const [wordList, setWordList] = useState([[], [], [], []]);
  const [idList, setIdList] = useState([]);
  const COLUMN = 4;
  const ROW = 4;
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
  const emojiList = [emoji1, emoji2, emoji3, emoji4, emoji5, emoji6, emoji7, emoji8, emoji9, emoji10, emoji11];

  useEffect(() => {
    getWord();
  }, []);

  //axios사용해서 데이터 받아오기
  const getWord = async () => {
    const response = await axios.get('http://3.37.42.147/api/v1/alacard/wordlist', { params: { nickname, offset } });
    const setData = await response.data.data;
    const newWordList = setData.map((i) => ({ ...i, clicked: false }));

    // 여기부터 리펙토링 필요
    const numberArray = [];
    const emojiListNumber = [];
    for (let i = 0; i < 4; i++) {
      let [num1, num2] = [Math.floor(Math.random() * 4 + i * 4), Math.floor(Math.random() * 4 + i * 4)];
      let [num3, num4] = [Math.floor(Math.random() * 11), Math.floor(Math.random() * 11)];
      while (num1 === num2) {
        num2 = Math.floor(Math.random() * 4 + i * 4);
      }
      numberArray.push(num1, num2);
      emojiListNumber.push(num3, num4);
    }
    const emojiIndexList = numberArray.sort((a, b) => a - b);
    //

    if (wordList.length > 2) {
      setWordList([
        [
          ...wordList[0],
          ...newWordList.slice(0, emojiIndexList[0]),
          { url: emojiList[0] },
          ...newWordList.slice(emojiIndexList[0], emojiIndexList[1]),
          { url: emojiList[1] },
          ...newWordList.slice(emojiIndexList[1], COLUMN),
        ],
        [
          ...wordList[1],
          ...newWordList.slice(COLUMN, emojiIndexList[2]),
          { url: emojiList[2] },
          ...newWordList.slice(emojiIndexList[2], emojiIndexList[3]),
          { url: emojiList[3] },
          ...newWordList.slice(emojiIndexList[3], COLUMN * 2),
        ],
        [
          ...wordList[2],
          ...newWordList.slice(COLUMN * 2, emojiIndexList[4]),
          { url: emojiList[4] },
          ...newWordList.slice(emojiIndexList[4], emojiIndexList[5]),
          { url: emojiList[5] },
          ...newWordList.slice(emojiIndexList[5], COLUMN * 3),
        ],
        [
          ...wordList[3],
          ...newWordList.slice(COLUMN * 3, emojiIndexList[6]),
          { url: emojiList[6] },
          ...newWordList.slice(emojiIndexList[6], emojiIndexList[7]),
          { url: emojiList[7] },
          ...newWordList.slice(emojiIndexList[7]),
        ],
      ]);
    } else {
      setWordList([
        [
          ...newWordList.slice(0, emojiIndexList[0]),
          { url: emojiList[0] },
          ...newWordList.slice(emojiIndexList[0], emojiIndexList[1]),
          { url: emojiList[1] },
          ...newWordList.slice(emojiIndexList[1], COLUMN),
        ],
        [
          ...newWordList.slice(COLUMN, emojiIndexList[2]),
          { url: emojiList[2] },
          ...newWordList.slice(emojiIndexList[2], emojiIndexList[3]),
          { url: emojiList[3] },
          ...newWordList.slice(emojiIndexList[3], COLUMN * 2),
        ],
        [
          ...newWordList.slice(COLUMN * 2, emojiIndexList[4]),
          { url: emojiList[4] },
          ...newWordList.slice(emojiIndexList[4], emojiIndexList[5]),
          { url: emojiList[5] },
          ...newWordList.slice(emojiIndexList[5], COLUMN * 3),
        ],
        [
          ...newWordList.slice(COLUMN * 3, emojiIndexList[6]),
          { url: emojiList[6] },
          ...newWordList.slice(emojiIndexList[6], emojiIndexList[7]),
          { url: emojiList[7] },
          ...newWordList.slice(emojiIndexList[7]),
        ],
      ]);
    }

    setOffset(offset + newWordList.length);
  };

  // click했을 때 일어나는 상황 1. clicked엘리먼트에 속성 변경 시키기 2. selectedList에 추가

  const onWordClickedHandler = (props) => {
    const clickedItem = props.item;
    const randomNumber = Math.floor(Math.random() * backgroundGradientList.length);

    // clicked 요소 값 변화
    setWordList([
      ...wordList.map((word) =>
        word.map((item) =>
          item.id === clickedItem.id
            ? clickedItem.clicked
              ? { ...item, clicked: false }
              : { ...item, clicked: backgroundGradientList[randomNumber] }
            : { ...item },
        ),
      ),
    ]);

    // selectedList에 추가
    setIdList(
      clickedItem.clicked !== false ? idList.filter((item) => item !== clickedItem.id) : [...idList, clickedItem.id],
    );
  };
  console.log(wordList);
  const onSubmitHandler = async () => {
    console.log(idList);
    const response = await axios.patch(
      'http://3.37.42.147/api/v1/alacard/wordlist',
      {
        params: { nickname },
      },
      { data: { idList } },
    );
    console.log(response);
  };
  return (
    <MainWrapper>
      <header>
        <img src="" alt="lala" />
        <img src="" alt="x" />
      </header>
      <div>nickname과 관련된 키워드를 모두 골라봥</div>
      <div style={{ color: 'white' }}>{idList.length}개의 키워드를 골랐어!</div>

      <SelectViewWrapper>
        {wordList.map((word, index) => (
          <div key={index}>
            {word.map((item, index) =>
              item.id ? (
                <EachSelectViewItem
                  key={index}
                  onClick={(event) => onWordClickedHandler({ event, item })}
                  style={{
                    background: item.clicked ? item.clicked : 'rgba(255, 255, 255, 0.1)',
                  }}>
                  <HintOfItem>{item.hint}</HintOfItem>
                  <WordNameOfItem>{item.wordName}</WordNameOfItem>
                </EachSelectViewItem>
              ) : (
                <img src={item.url} />
              ),
            )}
          </div>
        ))}
      </SelectViewWrapper>
      <img src="emoji10.svg" />
      <button onClick={getWord}>누르면 더 나와라 얍</button>
      <button onClick={onSubmitHandler}>누르면 보내져라 얍</button>
    </MainWrapper>
  );
};

export default SelectComponent;
