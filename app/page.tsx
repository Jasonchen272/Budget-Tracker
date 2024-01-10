'use client';
import React, {use, useState } from 'react';
import Header from '@/components/Header';
import SubHeader from '@/components/Subheader'
import TransactionAdder from '@/components/TransactionAdder';
import TransactionList from '@/components/TransactionList';
import { PieChart, Pie, Cell} from 'recharts';
import IncomeAdder from '@/components/IncomeAdder';
import '@/components/components.css';
import { v4 as uuidv4 } from 'uuid';

import {
  Box,
  Flex,
  Button,
  Text,
  VStack,
  HStack,
  Container,
  Select,
  NumberInput,
  NumberInputField,
  Center,
} from '@chakra-ui/react';

interface Transaction {
  category: string;
  amount: number;
  date: string;
  key: string
}


interface Chart {
  name: string;
  value: number;
  fill: string;
}

interface MonthData {
  monthPieInfo: Chart[];
  monthExpenseTotal: number;
  monthTransactionsList: Transaction[];
  monthIncomeTotal: number;
  monthIncomeList: Transaction[];
}



function HomePage() {
  const data = [{name: "Food", value: 0, fill: '#8884d8' }, {name:"Shopping", value: 0, fill: '#83a6ed'}, {name: "Entertainment", value: 0, fill: '#8dd1e1' }, {name:"Other", value: 0, fill: '#82ca9d'}];//pie data initialized

  const MonthsData = new Map<string, MonthData>([ //piechart data for all the
    ['January', {monthPieInfo:[{name: "Food", value: 50, fill: '#8884d8' }, {name:"Shopping", value: 0, fill: '#83a6ed'}, {name: "Entertainment", value: 0, fill: '#8dd1e1' }, {name:"Other", value: 0, fill: '#82ca9d'}],monthExpenseTotal: 0, monthTransactionsList:[], monthIncomeTotal: 0,monthIncomeList:[]}],
    ['February', {monthPieInfo:[{name: "Food", value: 0, fill: '#8884d8' }, {name:"Shopping", value: 0, fill: '#83a6ed'}, {name: "Entertainment", value: 0, fill: '#8dd1e1' }, {name:"Other", value: 0, fill: '#82ca9d'}],monthExpenseTotal: 0, monthTransactionsList:[], monthIncomeTotal: 0,monthIncomeList:[]}],
    ['March', {monthPieInfo:[{name: "Food", value: 0, fill: '#8884d8' }, {name:"Shopping", value: 0, fill: '#83a6ed'}, {name: "Entertainment", value: 0, fill: '#8dd1e1' }, {name:"Other", value: 0, fill: '#82ca9d'}],monthExpenseTotal: 0, monthTransactionsList:[], monthIncomeTotal: 0,monthIncomeList:[]}],
    ['April', {monthPieInfo:[{name: "Food", value: 0, fill: '#8884d8' }, {name:"Shopping", value: 0, fill: '#83a6ed'}, {name: "Entertainment", value: 0, fill: '#8dd1e1' }, {name:"Other", value: 0, fill: '#82ca9d'}],monthExpenseTotal: 0, monthTransactionsList:[], monthIncomeTotal: 0,monthIncomeList:[]}],
    ['May', {monthPieInfo:[{name: "Food", value: 0, fill: '#8884d8' }, {name:"Shopping", value: 0, fill: '#83a6ed'}, {name: "Entertainment", value: 0, fill: '#8dd1e1' }, {name:"Other", value: 0, fill: '#82ca9d'}],monthExpenseTotal: 0, monthTransactionsList:[], monthIncomeTotal: 0,monthIncomeList:[]}],
    ['June', {monthPieInfo:[{name: "Food", value: 0, fill: '#8884d8' }, {name:"Shopping", value: 0, fill: '#83a6ed'}, {name: "Entertainment", value: 0, fill: '#8dd1e1' }, {name:"Other", value: 0, fill: '#82ca9d'}],monthExpenseTotal: 0, monthTransactionsList:[], monthIncomeTotal: 0,monthIncomeList:[]}],
    ['July', {monthPieInfo:[{name: "Food", value: 0, fill: '#8884d8' }, {name:"Shopping", value: 0, fill: '#83a6ed'}, {name: "Entertainment", value: 0, fill: '#8dd1e1' }, {name:"Other", value: 0, fill: '#82ca9d'}],monthExpenseTotal: 0, monthTransactionsList:[], monthIncomeTotal: 0,monthIncomeList:[]}],
    ['August', {monthPieInfo:[{name: "Food", value: 0, fill: '#8884d8' }, {name:"Shopping", value: 0, fill: '#83a6ed'}, {name: "Entertainment", value: 0, fill: '#8dd1e1' }, {name:"Other", value: 0, fill: '#82ca9d'}],monthExpenseTotal: 0, monthTransactionsList:[], monthIncomeTotal: 0,monthIncomeList:[]}],
    ['September', {monthPieInfo:[{name: "Food", value: 0, fill: '#8884d8' }, {name:"Shopping", value: 0, fill: '#83a6ed'}, {name: "Entertainment", value: 0, fill: '#8dd1e1' }, {name:"Other", value: 0, fill: '#82ca9d'}],monthExpenseTotal: 0, monthTransactionsList:[], monthIncomeTotal: 0,monthIncomeList:[]}],
    ['October', {monthPieInfo:[{name: "Food", value: 0, fill: '#8884d8' }, {name:"Shopping", value: 0, fill: '#83a6ed'}, {name: "Entertainment", value: 0, fill: '#8dd1e1' }, {name:"Other", value: 0, fill: '#82ca9d'}],monthExpenseTotal: 0, monthTransactionsList:[], monthIncomeTotal: 0,monthIncomeList:[]}],
    ['November', {monthPieInfo:[{name: "Food", value: 0, fill: '#8884d8' }, {name:"Shopping", value: 0, fill: '#83a6ed'}, {name: "Entertainment", value: 0, fill: '#8dd1e1' }, {name:"Other", value: 0, fill: '#82ca9d'}],monthExpenseTotal: 0, monthTransactionsList:[], monthIncomeTotal: 0,monthIncomeList:[]}],
    ['December', {monthPieInfo:[{name: "Food", value: 0, fill: '#8884d8' }, {name:"Shopping", value: 0, fill: '#83a6ed'}, {name: "Entertainment", value: 0, fill: '#8dd1e1' }, {name:"Other", value: 0, fill: '#82ca9d'}],monthExpenseTotal: 0, monthTransactionsList:[], monthIncomeTotal: 0,monthIncomeList:[]}],


  ]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [pieData, setPieData] = useState<Chart[]>(data);
  const [incomeData, setIncomeData] = useState<Transaction[]>([]);
  const [incomeTotal, setIncomeTotal] = useState<number> (0);
  const [tab, setTab] = useState<boolean> (true); //true for expenses and false for income

  const addTransaction = (newTransaction: Transaction) => { // add transaction to the list of transactions
    setTransactions([...transactions, newTransaction]);
  };

  const addIncome = (newIncome:Transaction) =>{
    setIncomeData([...incomeData, newIncome])
  }

  const deleteTransaction = (index: number) => {
    const updatedTransactions = [...transactions];
    changeTotal(- transactions[index].amount) // subtract from the total when deleting a transaction
    updatePieData(-updatedTransactions[index].amount.toFixed(2), updatedTransactions[index].category)
    updatedTransactions.splice(index, 1);
    setTransactions(updatedTransactions); // deletes the selected transaction
  };

  const deleteIncome = (index:number) => {
    const updatedIncome = [...incomeData];
    changeIncomeTotal(- incomeData[index].amount) // subtract from the total when deleting a transaction
    updatedIncome.splice(index, 1);
    setIncomeData(updatedIncome); // deletes the selected transaction
  }

  const changeTotal = (amount: number) => { // add to the total when adding a transaction
    const formattedValue = (total + amount).toFixed(2)
    setTotal(parseFloat(formattedValue));
  }
  const changeIncomeTotal = (amount: number) => { // add to the total when adding a transaction
    const formattedValue = (incomeTotal + amount).toFixed(2)
    setIncomeTotal(parseFloat(formattedValue));
  }

  const handleSortType = (e:React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    sort(e.target.value)
  }

  const handleTab = (e, whichTab:string) =>{
    var  tabLinks = document.getElementsByClassName("tab-links");
    for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove("active-link");
    }
    e.currentTarget.classList.add("active-link");
    setTab((whichTab == 'Income') ? false: true)
  }
  const sort = (sortBy:string) =>{
    let sorted  = [...transactions];
    let i, key, j;
    switch(sortBy){
      case 'Time':
        const yearFirstFormat = sorted.map((item)=>{
          const oldFormatYear = item.date.slice(-4);
          const oldFormatMD = item.date.slice(0,5);
          const newDateFormat = (oldFormatYear + oldFormatMD).replace(/[-_]/g, '');;
          return {...item, date: newDateFormat}//YYYYMMDD
        });
        sorted = yearFirstFormat;
        let date;
        for (i = 1; i < sorted.length; i++){
          key = sorted[i];
          date = key.date;
          j = i - 1;
          while (j >= 0 && sorted[j].date > date) {
              sorted[j + 1] = sorted[j];
              j -= 1;;
          }
          sorted[j + 1] = key;
        }
        const MDYFormat = sorted.map((item)=>{
          const oldFormatDay = item.date.slice(6,8);
          const oldFormatMonth = item.date.slice(4,6);
          const oldFormatYear = item.date.slice(0,4);
          const newDateFormat = (oldFormatMonth + '-' + oldFormatDay + '-' + oldFormatYear);

          return {...item, date: newDateFormat}//MM-DD-YYYY
        });
        sorted = MDYFormat;
        
        break;
      case 'Category':
        let category;  
        for (i = 1; i < sorted.length; i++){  
            key = sorted[i];  
            category = key.category
            j = i - 1;  
            while (j >= 0 && sorted[j].category > category) {  
                sorted[j + 1] = sorted[j];  
                j = j - 1;  
            }  
            sorted[j + 1] = key;  
        }  
        break;
      case 'Amount' :
        let amount;  
        for (i = 1; i < sorted.length; i++){  
            key = sorted[i];  
            amount = key.amount
            j = i - 1;  
            while (j >= 0 && sorted[j].amount > amount){  
                sorted[j + 1] = sorted[j];  
                j = j - 1;  
            }  
            sorted[j + 1] = key;  
        }  
        break;
    } 
    setTransactions(sorted)
  }

  const updatePieData = (amount: number, category: string) => {
    const categories = ['Food', 'Shopping', 'Entertainment', 'Other'];

    if (!categories.includes(category)) {
      category = "Other";
    }
    const newData: Chart[] = pieData.map((item) => {
      if (category === item.name) {

        return { ...item, value: item.value + amount };
      }
      return item;
    });
    setPieData(newData);
  };
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  
  return (
    <Box textAlign={"center"} style={{
      background: 'linear-gradient(to top, #F7FAFC, #EDF2F7, #A0AEC0)', 
      minHeight: '100vh',
    }}>
      <Header/>
      <SubHeader curr_month={currentMonth} expense={tab} total={(tab) ? total: incomeTotal} allMonths={MonthsData} setPieData={setPieData}/>
      <Box textAlign={"center"}>
        <TransactionAdder addTransaction={addTransaction} changeTotal={changeTotal} updatePieData={updatePieData} display = {tab}/>
        <IncomeAdder addTransaction={addIncome} changeTotal={changeIncomeTotal} display={!tab}></IncomeAdder>
        <VStack>
          <div className="tab-titles">
            <p className="tab-links active-link" onClick = {(e) => handleTab(e,'Expenses')}>Expenses</p>
            <p className="tab-links" onClick = {(e) => handleTab(e,"Income")}>Income</p>
          </div>
          <Text>Sort by:</Text>
          <Box>
          <Select 
            bgColor = "white"
            placeholder="Select one"
            defaultValue={'Time'}
            onChange = {(e)=>handleSortType(e)}>
              <option value='Time'>Time</option>
              <option value='Category'>Category</option> 
              <option value='Amount'>Amount</option> 
          </Select>
          </Box>       
          <Flex display={(tab) ? 'flex': 'none'}>
            <TransactionList transactions={transactions} deleteTransaction={deleteTransaction}/>
            <PieChart width={400} height={400}>
              <Pie 
              dataKey={"value"}
              data={pieData}
              cx={200}
              cy={200}
              labelLine={false}
              label={({ value }) => (value !== 0 ? `$${value}` : '')}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
              </Pie>
            </PieChart> 
          </Flex>
          <Flex display={(!tab) ? 'flex': 'none'}>
            <TransactionList transactions={incomeData} deleteTransaction={deleteIncome}/>
          </Flex>
        </VStack> 
      </Box>
    </Box>
  );
} 

export default HomePage;