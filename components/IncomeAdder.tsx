'use client';
import React, {useState} from 'react';
import { Box, Link, Flex, HStack, Select, NumberInput, NumberInputField, Button, VStack } from '@chakra-ui/react';

interface Transaction {
  category: string;
  amount: number;
  date: string;
}
interface TransactionFormProps {
  addTransaction: (transaction: Transaction) => void;
  changeTotal:(amount:number) => void;
  display:boolean;
}
  

function IncomeAdder({ addTransaction, changeTotal, display}: TransactionFormProps) {
    const currentDate = new Date();
    const formattedDate = new Date(currentDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).replace(/\//g, '-');
    const [cat, setCat] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [date, setDate] = useState<string>(formattedDate);
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const newTransaction = () => { 
        addTransaction({ category:'Income', amount: amount, date: date}); // update the transaction list in page.tsx
        const updatedTransactions = [...transactions, { category: cat, amount: amount || 0, date: date}];
        setTransactions(updatedTransactions); // update the transaction list
        changeTotal(amount); // updates the total spent
        console.log(transactions)
    }

    const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => { 
        e.preventDefault();
        if(e.target.value == ''){
          setAmount(0);
        }
        else{
          setAmount(parseFloat(e.target.value))
        }
        e.target.value = '';
    }

    const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const dateFormatRegex = /^\d{2}-\d{2}-\d{4}$/;
      if (e.target.value == ''){
        setDate(formattedDate);
      }else{
        if (dateFormatRegex.test(e.target.value)) {
          setDate(e.target.value);
        }else{
          setDate(formattedDate);
        }
      }
    }

    return (
      <Flex alignItems={'center'} justifyContent={'center'} display = {(display) ? 'flex':'none'}>
        <HStack mt={30}>
          <NumberInput onBlur={(e) => handleAmount(e)}  >
            <NumberInputField placeholder='Cost' style={{ backgroundColor: 'white' }} ></NumberInputField>
          </NumberInput>
          <NumberInput onBlur={(e) => handleDate(e)}  >
            <NumberInputField width={'fit-content'} placeholder='MM-DD-YYYY' style={{ backgroundColor: 'white' }} ></NumberInputField>
          </NumberInput>
          <Button bg="white" onClick = {newTransaction}>Add</Button>
       </HStack>
      </Flex>
    );
}

export default IncomeAdder;
