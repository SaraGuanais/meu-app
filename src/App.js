import { useState } from "react";
import Button from "../src/components/Button";
import Input from "./components/Input";
import { Container, Content, Row } from "./styles";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("");
    setOperation("");
  };

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => (prev === "0" ? number : prev + number));
  };

  const handleOperation = (op) => {
    if (currentNumber === "") return;
    setFirstNumber(currentNumber);
    setOperation(op);
    setCurrentNumber("0");
  };

  const handleEquals = () => {
    if (firstNumber === "" || operation === "" || currentNumber === "") return;

    const num1 = Number(firstNumber);
    const num2 = Number(currentNumber);
    let result = 0;

    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num2 !== 0 ? num1 / num2 : "Erro";
        break;
      default:
        return;
    }

    setCurrentNumber(String(result));
    setFirstNumber("");
    setOperation("");
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />

        <Row>
          <Button label="C" onClick={handleOnClear} />
          <Button label="/" onClick={() => handleOperation("/")} />
          <Button label="*" onClick={() => handleOperation("*")} />
          <Button label="-" onClick={() => handleOperation("-")} />
        </Row>

        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="+" onClick={() => handleOperation("+")} />
        </Row>

        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="=" onClick={handleEquals} />
        </Row>

        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="0" onClick={() => handleAddNumber("0")} />
        </Row>

        <Row>
          <Button label="." onClick={() => handleAddNumber(".")} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
