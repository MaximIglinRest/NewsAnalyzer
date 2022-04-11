import React, { useState, useEffect } from 'react';
import './PopularWords.css';
import axios from 'axios';
import DoughnutChart from '../../components/Charts/DoughnutChart/DoughnutChart';
import VerticalBarCharts from '../../components/Charts/VerticalBarChart/VerticalBarChart';
// import LineChart from '../../components/Charts/LineChart/LineChart';
//Ui components
import Select from '../../components/UI/Select/Select';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import CheckBox from '../../components/UI/CheckBox/CheckBox';


const url = 'http://127.0.0.1:8000/';

const PopularWords = () => {

  const [state, setState] = useState({
    Source: 1,
    AnalyzeBy: 'by_titles',
    WordsCount: 20,
    NewsCount: 20,
    Nouns: false,
    Verbs: false,
    Percent: false
  })

  const [chartSetting, setChartSettings] = useState()

  useEffect(() => {
    console.log(loader.loader && chartSetting)
  })

  const [loader, setLoader] = useState({loader: false})

//        4) Создать анимацию загрузки.
//        5) Обработать ошибки запросов.

  const AnalyzeSettings = JSON.stringify(state)

  const FetchAnalyzeSettings = async () => {
    setLoader({loader: true})
    try {
      const response = await axios.post(`${url}get-top-words`, AnalyzeSettings, {'headers': {'accept': 'application/json', 'Content-Type': 'application/json'}});
      setChartSettings(response.data)
      setLoader({loader: false})
    } catch (e) {
      setLoader({loader: false})
      console.error(e);
    }
  }



  // try {
  //   const response = await axios.get(url)
  //   setLoader(!loader.loader)
  // } catch (e) {
  //
  // }

  const analyzeSelectorChangeHandler = event => {
    let chose = '';
    if(+event.target.value == 1) {
      chose = 'by_titles'
    } else if(+event.target.value == 2) {
      chose = 'by_texts'
    }

    setState(state => ({
      ...state,
      AnalyzeBy: chose
    }))
  }

  const sourceSelectorChangeHandler = event => {
    setState(state => ({
      ...state,
      Source: +event.target.value
    }))
  }

  const WordsCountChangeHandler = event => {
    setState(state => ({
      ...state,
      WordsCount: event.target.value,
    }))
  }

  const NewsCountChangeHandler = event => {
    setState(state => ({
      ...state,
      NewsCount: event.target.value,
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

  const WordCount = <Input
    index={'count' + 1}
    label='Слова:'
    type='number'
    step={1}
    min={2}
    max={30}
    onChange={event => WordsCountChangeHandler(event)}
  />

  const NewsCount = <Input
    index={'count' + 1}
    label='Количество новостей:'
    type='number'
    step={20}
    min={20}
    max={1000}
    onChange={event => NewsCountChangeHandler(event)}
  />

  const checkBox = <CheckBox checkValues={[
    {label: 'Nouns', text: 'Существительные'},
    {label: 'Verbs', text: 'Глаголы'},
    {label: 'Percent', text: 'Отобразить в процентах'},
  ]}
     checkBoxChangeHandler={checkBoxChangeHandler}
  >Выберите нужные графики:</CheckBox>

  return (
    <div className='PopularWords'>
      <div className="ToolBar">
        { sourceSelector }
        { analyzeSelector }
        { NewsCount }
        { WordCount }
        { checkBox }
        <Button onClick={FetchAnalyzeSettings}>Анализ</Button>
      </div>

      <div className='Charts'>
        { !loader.loader && chartSetting ? (
          <>
            <DoughnutChart chartSetting={chartSetting}/>
            <VerticalBarCharts chartSetting={chartSetting}/>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default PopularWords;