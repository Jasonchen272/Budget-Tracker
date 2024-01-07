import React, {useState} from 'react';
import { Box, Flex, HStack, Select, VStack } from '@chakra-ui/react';

interface SubHeaderProps {
  curr_month: string;
  total: number;
}

function SubHeader({ curr_month, total}: SubHeaderProps) {
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December',
    ];

  const [month, setMonth] = useState<string>(curr_month)


  const handleMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setMonth(e.target.value)
  }
  return (
    <Flex alignItems={'center'} justifyContent={'center'}>
      <VStack alignItems={'center'} justifyContent={'center'}>
        <HStack>
          <Box color="black" fontSize={40} fontWeight={700}>
            {month}
          </Box>
          <Box ml={30} color="black" fontSize={40} fontWeight={700}>
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