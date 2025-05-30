import { Button, SimpleGrid, Box, Flex, Input } from '@chakra-ui/react';
import { useState } from 'react';

const Calculator = ({ btns }) => {
  const [value, setValue] = useState('');

  const operators = ['+', '-', '*', '/'];

  const handleClick = (btnValue) => {
    if (btnValue === 'C') {
      setValue('');
      return;
    }

    if (btnValue === '=') {
      try {
        // Prevent eval if empty or ends with operator
        if (value === '' || operators.includes(value.slice(-1))) {
          return;
        }
        // Prevent divison by 0
        if (value.includes('/0')) {
          setValue('Undefined');
          return;
        }

        const result = eval(value);
        setValue(result.toString());
      } catch {
        setValue('Error');
      }
      return;
    }

    // Prevent starting with operator or adding two operators in a row
    if (
      operators.includes(btnValue) &&
      (value === '' || operators.includes(value.slice(-1)))
    ) {
      return;
    }

    setValue(prev => prev + btnValue.toString());
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Box
        p={4}
        minW="300px"
        maxW="400px"
        bg="white"
        boxShadow="md"
        borderRadius="lg"
      >
        <Input mb={4} value={value} border={'2px'} readOnly />
        <SimpleGrid columns={4} spacing={3}>
          {btns.map((btn, index) => (
            <Button
                  key={index}
                  colorScheme={
                      ['+', '-', '*', '/', 'C', '='].includes(btn) ? 'orange' : 'teal'
          }
          onClick={() => handleClick(btn)}
>
  {btn}
</Button>

          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Calculator;
