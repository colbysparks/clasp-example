
const ratio = 9.0 / 5.0;

export function toFarenheit(input: number) :number {
  console.log("this is some other side effect");
  return (input * ratio) + 32.0;
}

export function toCelsius(input: number) : number {
  return (input - 32.0) / ratio;
}
