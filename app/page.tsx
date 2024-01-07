'use client';
import React, {useState} from 'react';
import Header from '@/components/Header';
import SubHeader from '@/components/Subheader'
import Transactions from '@/components/Transactions';
import TransactionAdder from '@/components/TransactionAdder';
import TransactionList from '@/components/TransactionList';
import TrasactionAdder from '@/components/TransactionAdder'
import { PieChart, Pie } from 'recharts';

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
}

interface Chart {
  name: string;
  value: number;
}

function HomePage() {
  const data = [{name: "Food", value: 0}, {name:"Shopping", value: 0}, {name: "Entertainment", value: 0}, {name:"Other", value: 0}];

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [pieData, setPieData] = useState<Chart[]>(data);

  const addTransaction = (newTransaction: Transaction) => { // add transaction to the list of transactions
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (index: number) => {
    const updatedTransactions = [...transactions];
    setTotal(total - transactions[index].amount) // subtract from the total when deleting a transaction
    updatedTransactions.splice(index, 1);
    setTransactions(updatedTransactions); // deletes the selected transaction
  };

  const changeTotal = (amount: number) => { // add to the total when adding a transaction
    setTotal(total + amount)
  }

  const updatePieData = (index: number, amount: number, transactionList: Transaction[]) => {
    if(transactionList[index].category == 'Food'){
      const newData: Chart[] = [
        {name: "Food", value: pieData[0].value + amount}, 
        {name:"Shopping", value: pieData[1].value}, 
        {name: "Entertainment", value: pieData[2].value}, 
        {name:"Other", value: pieData[3].value}
      ];
      setPieData(newData);
    }
    else if(transactionList[index].category == 'Shopping'){
      const newData: Chart[] = [
        {name: "Food", value: pieData[0].value}, 
        {name:"Shopping", value: pieData[1].value + amount}, 
        {name: "Entertainment", value: pieData[2].value}, 
        {name:"Other", value: pieData[3].value}
      ];
      setPieData(newData);
    }
    else if(transactionList[index].category == 'Entertainment'){
      const newData: Chart[] = [
        {name: "Food", value: pieData[0].value}, 
        {name:"Shopping", value: pieData[1].value}, 
        {name: "Entertainment", value: pieData[2].value + amount}, 
        {name:"Other", value: pieData[3].value}
      ];
      setPieData(newData);
    }else {
      const newData: Chart[] = [
        {name: "Food", value: pieData[0].value}, 
        {name:"Shopping", value: pieData[1].value}, 
        {name: "Entertainment", value: pieData[2].value}, 
        {name:"Other", value: pieData[3].value + amount}
      ];
      setPieData(newData);
    }   
  }

  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  
  return (
    <Box textAlign={"center"} bg="white">
      <Header/>
      <SubHeader curr_month={currentMonth} total={total}/>
      <Box textAlign={"center"}>
        <TransactionAdder addTransaction={addTransaction} changeTotal={changeTotal} updatePieData={updatePieData}/>
        <Text fontSize={30}mb={10} mt={30} color = "black">Transactions</Text>
        <Flex>
          <TransactionList transactions={transactions} deleteTransaction={deleteTransaction}/>
          <PieChart width={400} height={400}>
            <Pie 
            dataKey={"value"}
            data={pieData}
            cx={200}
            cy={200}
            label>
            </Pie>
          </PieChart> 
        </Flex>
      </Box>
    </Box>
  );
} 

export default HomePage;