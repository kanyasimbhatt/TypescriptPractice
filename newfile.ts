type Shape =
  | { kind: "circle"; radius: number; width?:number }
  | { kind: "rectangle"; width: number; height: number };
 
function getArea(shape: Shape): number {
  if(shape.kind === "circle"){
    return Math.PI * shape.radius * shape.radius;
  }
  return (shape.width * shape.height);
}

getArea({kind:'circle', radius: 10, width: 10})


//-------------------------------------------------------

type ExtractString<T> = T extends string ? T : never;

type New = ExtractString<'hello' | 42 | 32 | "new">;