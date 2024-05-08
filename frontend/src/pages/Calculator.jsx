import Aside from "../components/Aside/Aside";
import CalculatorForm from "../components/CalculatorForm/CalculatorForm";
import Header from "../components/Header";

const Calculator = () => {
  return (
    <div className="container-home">
      <Header />
      <div className="container-main">
        <CalculatorForm />
      </div>

      <Aside />
    </div>
  );
};

export default Calculator;
