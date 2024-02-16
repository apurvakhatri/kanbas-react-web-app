import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import BooleanVariables from "./variables/BooleanVariables";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ES5Functions from "./functions/ES5Functions"
import ArrowFunctions from "./functions/ArrowFunctions"
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters"
import WorkingWithArrays from "./arrays/WorkingWithArrays"
import ArrayIndexAndLength from "./arrays/ArrayIndexAndLength"
import AddingAndRemovingDataToFromArrays from "./arrays/AddingAndRemovingDataToFromArrays"
import ForLoops from "./arrays/ForLoops"
import MapFunction from "./arrays/MapFunction"
import JsonStringify from "./arrays/JsonStringify"
import FindFunction from "./arrays/FindFunction"
import FindIndex from "./arrays/FindIndex"
import FilterFunction from "./arrays/FilterFunction"

function JavaScript() {
    console.log('Hello World!');
    return(
    <div>
        <h1>JavaScript</h1>
        <VariablesAndConstants />
        <VariableTypes />
        <BooleanVariables />
        <IfElse />
        <TernaryOperator />
        <ES5Functions />
        <ArrowFunctions />
        <FunctionParenthesisAndParameters />
        <WorkingWithArrays />
        <ArrayIndexAndLength />
        <AddingAndRemovingDataToFromArrays />
        <ForLoops />
        <MapFunction />
        <JsonStringify />
        <FindFunction />
        <FindIndex />
        <FilterFunction />
    </div>
   );
}
export default JavaScript