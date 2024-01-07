'use client';
import React, {useState} from 'react';
import Header from '@/components/Header';
import SubHeader from '@/components/Subheader'
import Transactions from '@/components/Transactions';
import TransactionAdder from '@/components/TransactionAdder';
import TransactionList from '@/components/TransactionList';
import TrasactionAdder from '@/components/TransactionAdder'
import { PieChart, Pie, Cell} from 'recharts';

import {
  Box,
  Flex,
  Heading,
  Button,
  Link,
  Text,
  VStack,
  HStack,
  Container,
  Select,
  NumberInput,
  NumberInputField,
  Tooltip,
} from '@chakra-ui/react';

interface Transaction {
  category: string;
  amount: number;
  date: string;
}

interface Chart {
  name: string;
  value: number;
}

function HomePage() {
  const data = [{name: "Food", value: 0, fill: '#8884d8' }, {name:"Shopping", value: 0, fill: '#83a6ed'}, {name: "Entertainment", value: 0, fill: '#8dd1e1' }, {name:"Other", value: 0, fill: '#82ca9d'}];

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [pieData, setPieData] = useState<Chart[]>(data);

  const addTransaction = (newTransaction: Transaction) => { // add transaction to the list of transactions
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (index: number) => {
    const updatedTransactions = [...transactions];
    setTotal(total - transactions[index].amount) // subtract from the total when deleting a transaction
    updatePieData(-updatedTransactions[index].amount, updatedTransactions[index].category)
    updatedTransactions.splice(index, 1);
    setTransactions(updatedTransactions); // deletes the selected transaction
  };

  const changeTotal = (amount: number) => { // add to the total when adding a transaction
    const formattedValue = (total + amount).toFixed(2)
    setTotal(parseFloat(formattedValue));
  }
  const sort = (sortBy:string) =>{
    const sorted  = [...transactions];
    switch(sortBy){
      case 'Time':
        console.log(2)
        break;
      case 'Category':
        console.log(2)
        break;
      case 'Amount' :
        let i, key, j, amount;  
        for (i = 1; i < sorted.length; i++) 
        {  
            key = sorted[i];  
            amount = key.amount
            j = i - 1;  
            while (j >= 0 && sorted[j].amount > amount) 
            {  
                sorted[j + 1] = sorted[j];  
                j = j - 1;  
            }  
            sorted[j + 1] = key;  
        }  
        break;
    } 
    console.log(sorted)
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
      background: 'linear-gradient(135deg, #f8f8f8, #e0e0e0)', 
      height: '100vh',
    }}>
      <Header/>
      <SubHeader curr_month={currentMonth} total={total}/>
      <Box textAlign={"center"}>
        <TransactionAdder addTransaction={addTransaction} changeTotal={changeTotal} updatePieData={updatePieData}/>
        <HStack>
        <Text fontSize={30} m={10} p={2} color = "black">Transactions</Text>
        <Text>Sort by:</Text>
        <Box>
        <Select 
          placeholder="Select one"
          defaultValue={'Time'}
          onChange = {()=>sort('Amount')}>
            <option value='Time'>Time</option>
            <option value='Category'>Category</option> 
            <option value='Amount'>Amount</option> 
        </Select>
        </Box>
        
        </HStack>        
        <Flex >
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
      </Box>
    </Box>
  );
} 

export default HomePage;