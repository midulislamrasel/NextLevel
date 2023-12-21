// ####Union Type
type NoobDeveloper = {
  name: string;
};

type JuniorDeveloper = {
  name: string;
  expertise: string;
  experience: number;
};

//## Intersection Type
// type JuniorDeveloper = NoobDeveloper & {
//     expertise: string;
//     experience: number;
// }

// ## Union Type
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "Moznu mia",
};
