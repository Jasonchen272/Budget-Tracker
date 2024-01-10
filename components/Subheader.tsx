import React, {useState,SetStateAction} from 'react';
import { Box, Flex, HStack, Select, VStack } from '@chakra-ui/react';
import Transactions from './Transactions';

interface SubHeaderProps {
  curr_month: string;
  total: number;
  expense:boolean
  allMonths: Map<string, Chart[]>
  setPieData:React.Dispatch<React.SetStateAction<Chart[]>>
}
interface Chart {
  name: string;
  value: number;
  fill: string;
}

function SubHeader({ curr_month, total, expense, allMonths, setPieData}: SubHeaderProps) {
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December',
    ];

  const [month, setMonth] = useState<string>(curr_month)

  const handleMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setMonth(e.target.value)
    setPieData(allMonths.get(e.target.value) as SetStateAction<Chart[]>)
  }
  return (
    <Flex alignItems={'center'} justifyContent={'center'}>
      <VStack alignItems={'center'} justifyContent={'center'}>
        <HStack>
          <Box color="gray.500" fontSize={40} fontWeight={600}>
              {month}
          </Box>
          <Box ml={30} color="gray.500" fontSize={40} fontWeight={600}>
          {(expense) ? " Expense:": " Income:"}
          </Box>
          <Box ml={30} color="gray.500" fontSize={40} fontWeight={600}>
            ${total}
          </Box>
        </HStack>
        <Box>
          <Select 
            placeholder="Month"
            color="black" 
            fontSize={18} 
            bg={'white'}
            textAlign="center"
            py="2" 
            onChange={(e) => handleMonth(e)}>
              {months.map((month, index) => (
              <option key={index} value={month}>
                  {month}
              </option>
              ))}
          </Select>
        </Box>
      </VStack>
    </Flex>
  );
}

export default SubHeader;