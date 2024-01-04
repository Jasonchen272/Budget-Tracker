'use client';
import React from 'react';
import { Box, Heading, Link, Flex, HStack, Select, NumberInput, NumberInputField, Button, Checkbox } from '@chakra-ui/react';
import Transactions from './Transactions';

function TransactionAdder() {
    const newTransaction = () => {
        console.log(5)
      };
  return (
    <Flex justify="space-between">
      <HStack mr = {50}>
        <Select id = "userCategory" placeholder='Select Category'>
          <option value='food'>food</option>
          <option value='entertainment'>entertainment</option>
          <option value='shopping'>shopping</option>
          <option value='other'>other</option>
        </Select>
        <NumberInput defaultValue={0}>
          <NumberInputField />
        </NumberInput>
        <button onClick = {newTransaction}>Add</button>
      </HStack>
      </Flex>
  );
}

export default TransactionAdder;
