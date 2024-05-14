const ratio = 9.0 / 5.0;

function toFarenheit(input: number) :number {
  return (input * ratio) + 32.0;
}

function toCelcius(input: number) : number {
  return (input - 32.0) / ratio;
}
