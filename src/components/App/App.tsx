import { useState } from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis, Text } from 'recharts';
import Button from '../Button/Button';
import DatePicker from 'react-datepicker'

import classes from './App.module.scss'
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { House } from '@/types/character';
import { useHPCharacters } from '@/hooks/useHPCharacters';
import { splitByHouse } from '@/utils/splitByHouse/splitByHouse';
import { getByDate } from '@/utils/getByDate/getByDate';


export const App = () => {
  const [fromDate, setFromDate] = useState(new Date('1975-01-30'));
  const [toDate, setToDate] = useState(new Date());

  const [chartData, setChartData] = useState<Array<{ name: House, count: number }>>([
    { name: 'Gryffindor', count: 0 },
    { name: 'Slytherin', count: 0 },
    { name: 'Ravenclaw', count: 0 },
    { name: 'Hufflepuff', count: 0 },
  ])

  const characters = useHPCharacters()

  const handleConfirm = () => {
    const correctCharacters = getByDate(characters, fromDate, toDate)

    const splittedCharacters = splitByHouse(correctCharacters)

    setChartData([
      { name: 'Gryffindor', count: splittedCharacters.Gryffindor.length },
      { name: 'Slytherin', count: splittedCharacters.Slytherin.length },
      { name: 'Ravenclaw', count: splittedCharacters.Ravenclaw.length },
      { name: 'Hufflepuff', count: splittedCharacters.Hufflepuff.length },
    ])
  }

  return (
    <div>
      <div className={classes.title}>Harry Potter</div>

      <div className={classes.description}>Количество студентов</div>

      <BarChart width={730} height={250} data={chartData} className={classes.barChart} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#82ca9d" label={{ position: 'top' }} />
      </BarChart>

      <div className={classes.description}>Выберите диапазон дат рождения</div>

      <div className={classes.form}>
        <div className={classes.formItem}>
          <div className={classes.description}>c</div>
          <DatePicker selected={fromDate} onChange={(value) => { setFromDate(value) }} />
        </div>

        <div className={classes.formItem}>
          <div className={classes.description}>по</div>
          <DatePicker selected={toDate} onChange={(value) => { setToDate(value) }} />
        </div>

        <Button onClick={handleConfirm}>Подтвердить</Button>
      </div>
    </div >


  );
};
