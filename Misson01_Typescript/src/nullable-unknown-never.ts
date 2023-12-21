//## Null Type
const searchName = (value: string | null) => {
  if (value == null) {
    console.log("There is nothing to search");
  } else {
    console.log("Serching ...");
  }
};
searchName(null);

//##
const getMyCareSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const convertedSpeed = (speed * 1000) / 3600;
    console.log(`My Spead is ${convertedSpeed}`);
  } else if (typeof speed === "string") {
    const [value, unit] = speed.split(" ");

    const convertedSpeed = (parseFloat(value) * 1000) / 3600;
    console.log(`My Spead is ${convertedSpeed}`);
  } else {
    console.log("There is wroing type");
  }
};

getMyCareSpeed(10);
getMyCareSpeed("10 kg");
getMyCareSpeed(true);
