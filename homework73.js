"use strickt"
function checkProbabilityTheory(count) {
    let evenNumbers = 0;
    let oddNumbers = 0;

    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

        if (randomNumber % 2 === 0) {
            evenNumbers++;
        } else {
            oddNumbers++;
        }
    }

    const generatedNumbers = evenNumbers + oddNumbers;
    const evenPercentage = (evenNumbers / generatedNumbers) * 100;
    const oddPercentage = (oddNumbers / generatedNumbers) * 100;

    console.log(`Кількість згенерованих чисел: ${generatedNumbers}`);
    console.log(`Парних чисел: ${evenNumbers}`);
    console.log(`Непарних чисел: ${oddNumbers}`);
    console.log(`Відсоток парних до непарних: ${evenPercentage.toFixed(2)}% : ${oddPercentage.toFixed(2)}%`);
}

checkProbabilityTheory(1000);