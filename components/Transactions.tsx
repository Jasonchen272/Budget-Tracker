import React from 'react';
import { Box, Heading,Text, Link, Flex, HStack, Button } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faFilm, faQuestionCircle, faCartShopping} from '@fortawesome/free-solid-svg-icons';

type Transactions = {
    amount: number;
    category: string;
  };
  
interface TransactionProps {
  category: string;
  amount: number;
  deleteTransaction: React.MouseEventHandler<HTMLButtonElement>;
}

function Transactions( {category, amount, deleteTransaction }: TransactionProps) {// actual transaction that is displayed on screen
  let icon;
  let bgColor;
  switch (category) {
    case "Food":
      icon = <FontAwesomeIcon icon={faUtensils} style={{ color: 'white' }} />;
      bgColor = '#8884d8';
      break;
    case "Entertainment":
      icon = <FontAwesomeIcon icon={faFilm} style={{ color: 'white' }} />;
      bgColor = '#8dd1e1';
      break;
    case "Shopping":
      icon = <FontAwesomeIcon icon={faCartShopping} style={{ color: 'white' }}/>
      bgColor='#83a6ed';
      break;
    default:
      icon = <FontAwesomeIcon icon={faQuestionCircle} style={{ color: 'white' }} />;
      bgColor = '#82ca9d';
  }

  const circleContainerStyle = {
    backgroundColor: bgColor,
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '50%',
    width: '50px', 
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Flex alignContent={"center"}>
      <HStack width={"100%"} color="black" mr={10}>
        <div style={circleContainerStyle}>
          {icon}
        </div>
        <Text>{category} ${amount}</Text>
      </HStack>
      <Button margin={'auto'} ml={0} onClick={deleteTransaction}>Delete</Button>
    </Flex>
  );
}

export default Transactions;
