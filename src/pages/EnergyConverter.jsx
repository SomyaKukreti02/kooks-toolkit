import React, { useState } from "react";
import ConverterBox from "../components/ConverterBox";
import useConversion from "../hooks/energy.conversion";
function EnergyConverter() {
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
        title="Energy"
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
export default EnergyConverter;
