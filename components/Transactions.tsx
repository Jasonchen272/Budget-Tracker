import React from 'react';
import { Box,Text, Link, Flex, HStack, Button } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faFilm, faQuestionCircle, faCartShopping} from '@fortawesome/free-solid-svg-icons';

type Transactions = {
  amount: number;
  category: string;
  date: string;
};
  
interface TransactionProps {
  category: string;
  amount: number;
  date: string;
  deleteTransaction: React.MouseEventHandler<HTMLButtonElement>;
}

function Transactions( {category, amount, date, deleteTransaction }: TransactionProps) {// actual transaction that is displayed on screen
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
    case "Income":
      icon = <FontAwesomeIcon icon={faQuestionCircle} style={{ color: 'white' }} />;
      bgColor = '#82ca9d';
      break;
    default:
      category='Other'
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
    <HStack>
      <HStack width={"400px"} color="black" mr={10}>
        <div style={circleContainerStyle}>
          {icon}
        </div>
        <HStack><Text fontWeight="bold">{category}</Text><Text> ${amount}</Text><Text> &nbsp;{date}</Text></HStack>
        
      </HStack>
      <Button margin={'auto'} ml={0} onClick={deleteTransaction}>Delete</Button>
    </HStack>
  );
}

export default Transactions;
