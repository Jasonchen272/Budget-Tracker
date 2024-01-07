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
    updatePieData(-updatedTransactions[index].amount, updatedTransactions[index].category)
  };

  const changeTotal = (amount: number) => { // add to the total when adding a transaction
    setTotal(total + amount)
  }

  const updatePieData = (amount: number, category: string) => {
    const categories = ['Food', 'Shopping', 'Entertainment', 'Other'];
    console.log(category);
    if (categories.includes(category)) {
      const newData: Chart[] = pieData.map((item) => {
        if (category === item.name) {
          return { ...item, value: item.value + amount };
        }
        return item;
      });
      setPieData(newData);
    }else{
      console.log("Enter A Category");
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