import React, { useState } from 'react';
import './PopularWords.css';
import DoughnutChart from '../../components/Charts/DoughnutChart/DoughnutChart';
import VerticalBarCharts from '../../components/Charts/VerticalBarChart/VerticalBarChart';
import LineChart from '../../components/Charts/LineChart/LineChart';
import BubbleChart from '../../components/Charts/BubbleChart/BubbleChart';
//Ui components
import Select from '../../components/UI/Select/Select';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import CheckBox from '../../components/UI/CheckBox/CheckBox';

const url = '';

const PopularWords = () => {

  const [state, setState] = useState({
    source: 1,
    wordsCount: 100,
    nouns: 'false',
    verbs: 'false',
    percent: 'false'
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

  const selectChangeHandler = event => {
    setState(state => ({
      ...state,
      source: +event.target.value
    }))
    console.log('source: ',state.source)
    console.log(JSON.stringify(state))
  }

  const inputChangeHandler = event => {
    setState(state => ({
      ...state,
      wordsCount: event.target.value,
    }))
    console.log('wordsCount: ',state.wordsCount)
  }

  const checkBoxChangeHandler = (label) => {
    setState(state => ({
      ...state,
      [label]: !state[label]
    }))
    console.log(label,': ',state[label])
  }

  const select = <Select
    label='Источник'
    value={state.category}
    onChange={selectChangeHandler}
    options={[
      {text: 'Риа новости', value: 1},
      {text: 'ТАСС', value: 2},
      {text: 'Lenta.ru', value: 3},
      {text: 'Комсомольская правда', value: 4}
    ]}
  />

  const input = <Input
    index={'count' + 1}
    label='Слова'
    type='number'
    onChange={event => inputChangeHandler(event)}
  />

  const checkBox = <CheckBox checkValues={[
    {label: 'nouns', text: 'Существительные'},
    {label: 'verbs', text: 'Глаголы'},
    {label: 'percent', text: 'Проценты'},
  ]}
     checkBoxChangeHandler={checkBoxChangeHandler}
  >Выберите нужные графики:</CheckBox>

  return (
    <div className='PopularWords'>
      <div className="ToolBar">
        { select }
        { input }
        { checkBox }
        <Button>Анализ</Button>
      </div>
    </div>
  );
};

export default PopularWords;