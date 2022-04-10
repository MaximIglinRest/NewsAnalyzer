import React, { useState, useEffect } from 'react';
import './PopularWords.css';
import DoughnutChart from '../../components/Charts/DoughnutChart/DoughnutChart';
import VerticalBarCharts from '../../components/Charts/VerticalBarChart/VerticalBarChart';
import LineChart from '../../components/Charts/LineChart/LineChart';
//Ui components
import Select from '../../components/UI/Select/Select';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import CheckBox from '../../components/UI/CheckBox/CheckBox';

const url = '';

const PopularWords = () => {

  const [state, setState] = useState({
    source: 1,
    analyzeBy: 'byTitle',
    wordsCount: 100,
    newsCount: 100,
    nouns: false,
    verbs: false,
    percent: false
  })

  useEffect(() => {
    console.log(JSON.stringify(state))
  })

  const [loader, setLoader] = useState({loader: false})

//  TODO: 1) Сформировать функцию запроса и поставки.
//        2) Создать стейт.
//        3) Передать и обработать параметры в каждом элементе,
//        для каждой страницы.
//        4) Создать анимацию загрузки.
//        5) Обработать ошибки запросов.

  const AnalyzeSettings = JSON.stringify(state)

  const fetchAnalyzeSettings = () => {
    // const response = await axios.post(url, AnalyzeSettings)
    //setLoader(!loader.loader)
  }


  // try {
  //   const response = await axios.get(url)
  //   setLoader(!loader.loader)
  // } catch (e) {
  //
  // }

  const analyzeChoses = {
    1: 'byTitle',
    2: 'byText'
  }


  const analyzeSelectorChangeHandler = event => {
    let chose = '';
    if(+event.target.value == 1) {
      chose = 'byTitle'
    } else if(+event.target.value == 2) {
      chose = 'byText'
    }

    setState(state => ({
      ...state,
      analyzeBy: chose
    }))
  }

  const sourceSelectorChangeHandler = event => {
    setState(state => ({
      ...state,
      source: +event.target.value
    }))
  }

  const WordsCountChangeHandler = event => {
    setState(state => ({
      ...state,
      wordsCount: event.target.value,
    }))
  }

  const NewsCountChangeHandler = event => {
    setState(state => ({
      ...state,
      newsCount: event.target.value,
    }))
  }

  const checkBoxChangeHandler = (label) => {
    setState(state => ({
      ...state,
      [label]: !state[label]
    }))
  }

  const sourceSelector = <Select
    label='Источник'
    value={state.category}
    onChange={sourceSelectorChangeHandler}
    options={[
      {text: 'Риа новости', value: 1},
      {text: 'ТАСС', value: 2},
      {text: 'Lenta.ru', value: 3},
      {text: 'Комсомольская правда', value: 4}
    ]}
  />

  const analyzeSelector = <Select
    label='Анализ по:'
    value={state.category}
    onChange={analyzeSelectorChangeHandler}
    options={[
      {text: 'По заголовку', value: 1},
      {text: 'По тексту', value: 2},
    ]}
  />

  const Wordcount = <Input
    index={'count' + 1}
    label='Слова:'
    type='number'
    onChange={event => WordsCountChangeHandler(event)}
  />

  const NewsCount = <Input
    index={'count' + 1}
    label='Количество новостей:'
    type='number'
    onChange={event => NewsCountChangeHandler(event)}
  />

  const checkBox = <CheckBox checkValues={[
    {label: 'nouns', text: 'Существительные'},
    {label: 'verbs', text: 'Глаголы'},
    {label: 'percent', text: 'Отобразить в процентах'},
  ]}
     checkBoxChangeHandler={checkBoxChangeHandler}
  >Выберите нужные графики:</CheckBox>

  return (
    <div className='PopularWords'>
      <div className="ToolBar">
        { sourceSelector }
        { analyzeSelector }
        { NewsCount }
        { Wordcount }
        { checkBox }
        <Button>Анализ</Button>
      </div>
    </div>
  );
};

export default PopularWords;