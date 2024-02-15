function FunctionParenthesisAndParameters(){
    const square = (a: number) => a*a;
    const plusOne = (a: number) => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);
    return (
        <div>
            <h1>FunctionParenthesisAndParameters</h1>
            <p>Two squared: {twoSquared}</p>
            <p>Three plus one: {threePlusOne}</p>
        </div>
    );
}
export default FunctionParenthesisAndParameters