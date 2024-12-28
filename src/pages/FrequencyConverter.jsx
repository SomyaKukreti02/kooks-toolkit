import ConverterBox from "../components/ConverterBox";
import useConversion from "../hooks/frequency.conversion";
function FrequencyConverter() {
  const [
    inputList,
    inputValue,
    setInputValue,
    fromUnit,
    setFromUnit,
    toUnit,
    setToUnit,
    convertedValue,
    handleConvert,
  ] = useConversion();
  return (
    <div className="flex items-center justify-center">
      <ConverterBox
        title="Frequency"
        inputValue={inputValue}
        setInputValue={setInputValue}
        fromUnit={fromUnit}
        setFromUnit={setFromUnit}
        toUnit={toUnit}
        setToUnit={setToUnit}
        convertedValue={convertedValue}
        handleConvert={handleConvert}
        inputList={inputList}
      />
    </div>
  );
}

export default FrequencyConverter;
