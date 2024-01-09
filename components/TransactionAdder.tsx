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
  updatePieData: (amount: number, category: string) => void;
  display:boolean
}
  

function TransactionAdder({ addTransaction, changeTotal, updatePieData, display }: TransactionFormProps) {
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
        addTransaction({ category:cat, amount: amount, date: date}); // update the transaction list in page.tsx
        const updatedTransactions = [...transactions, { category: cat, amount: amount || 0, date: date}];
        setTransactions(updatedTransactions); // update the transaction list
        changeTotal(amount); // updates the total spent
        updatePieData(amount, cat);
    }

    const handleCat = (e: React.ChangeEvent<HTMLSelectElement>) => { // set category
        e.preventDefault();
        setCat(e.target.value)
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
          <Select placeholder = {"Select Catagory"} defaultValue={"other"} id = "userCategory"  onChange={(e) => handleCat(e)} value = {cat} bgColor = "white">
            <option value='Food'>Food</option>
            <option value='Entertainment'>Entertainment</option> 
            <option value='Shopping'>Shopping</option>
            <option value='Other'>Other</option>
          </Select>
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

export default TransactionAdder;
