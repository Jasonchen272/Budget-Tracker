import React from 'react';
import { Box, Heading, Link, Flex, HStack, Select, NumberInput, NumberInputField, Button } from '@chakra-ui/react';

function TransactionAdder() {
  return (
    <Flex justify="space-between">
      <HStack mr = {50}>
        <Select placeholder='Select option'>
          <option value='food'>food</option>
          <option value='entertainment'>entertainment</option>
          <option value='shopping'>shopping</option>
          <option value='other'>other</option>
        </Select>
        <NumberInput defaultValue={0}>
          <NumberInputField />
        </NumberInput>
        <Button>Add</Button>
      </HStack>
      </Flex>
  );
}

export default TransactionAdder;
