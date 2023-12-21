// Type Alis

type CourseName = string;
const courseName: CourseName = "Next Level Web Development";

type MarriedType = boolean;
const isMarried: MarriedType = false;

type CrushType = {
  name: string;
  age: number;
  profession: string;
  address: string;
};

const crush1: CrushType = {
  name: "Moina pakhi",
  age: 22,
  profession: "Web developer",
  address: "mirpur1",
};

// ###Function

type OpetationType = (x: number, y: number) => number;

const calculate = (
  number1: number,
  number2: number,
  operation: OpetationType
) => {
  console.log("result :", operation(number1, number2));
};

calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);
calculate(10, 20, (x, y) => x / y);
