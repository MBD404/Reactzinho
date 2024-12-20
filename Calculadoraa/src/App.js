
import Input from './components/Input'
import Button from './components/Button';

import { Container,Content, Row} from "./style";
import { useState } from 'react'
import { useFormState } from 'react-dom';



const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState(" ")
  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation("");
  }
  const handleAppNumber = (number) => {
      console.log(number)
      setCurrentNumber(prev => `${prev  === '0' ? '' : prev}${number}`)
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0')
      setOperation("");
    }
  }
  const handleSubNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation("-");
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0')
      setOperation("");
    }
  }
  const handleDivNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation("/");
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0')
      setOperation("");
    }
  }
  const handleMulNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation("x");
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0')
      setOperation("");
    }
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== 0) {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleSubNumbers();
          break;
        case "/":
          handleDivNumbers();
          break;
        case "x":
          handleMulNumbers();
          break;
      
        default:
          break;
      }

    } 
  }
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
        <Button label={7}  onClick={() => handleAppNumber('7')}/>
        <Button label={8}  onClick={() => handleAppNumber('8')}/>
        <Button label={9}  onClick={() => handleAppNumber('9')}/>
        <Button label="C" onClick={handleOnClear}/>
        
        </Row>
        <Row>
        <Button label={4}  onClick={() => handleAppNumber('4')}/>
        <Button label={5}  onClick={() => handleAppNumber('5')}/>
        <Button label={6}  onClick={() => handleAppNumber('6')}/>
        <Button label={"+"} onClick={handleSumNumbers} />
        </Row>
        <Row>
        <Button label={1} onClick={() => handleAppNumber('1')}/>
        <Button label={2} onClick={() => handleAppNumber('2')}/>
        <Button label={3} onClick={() => handleAppNumber('3')}/>
        <Button label={"="} onClick={handleEquals}/>
        </Row>
        <Row>
        <Button label="x" onClick={handleMulNumbers}/>
        <Button label={0} onClick={() => handleAppNumber('0')}/>
        <Button label="÷" onClick={handleDivNumbers}/>
        <Button label={"-"} onClick={handleSubNumbers} />
        </Row>
       
      </Content> 
    </Container>
  );
}

export default App;
