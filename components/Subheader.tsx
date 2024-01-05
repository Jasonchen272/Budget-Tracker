import React, {useState} from 'react';
import { Box, Flex, Select } from '@chakra-ui/react';

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

      const [month, setMonth] = useState<string>('')

      const handleMonth = (e) => {
        e.preventDefault();
        setMonth(e.target.value)
    }
  return (
    <Flex>
      <Box>
        <Select 
            mt={30}
            placeholder="Month"
            borderColor='gray.700'
            color="gray.100" 
            fontSize={18} 
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
        <Box ml={30} mt={30} color="gray.100" fontSize={30} fontWeight={700} w="10%">
            {month}
        </Box>
      <Box mt={30} color="gray.100" fontSize={30} fontWeight={700}>
        ${total}
        </Box>
    </Flex>
  );
}

export default SubHeader;