
export type DogsInfo = {
  name: string;
  id: number;
  image: string;
  position: string;
  schoolName: string;
  grade: number;
  isPass: boolean
  books: string[];
  about: string; 
}

let dogId = 1

export const studentEnums: DogsInfo[] = [
  {
    name: 'Smite Paw',
    id: dogId++,
    schoolName: 'Ts coding school inc.',
    image: './img/dog-2.png',
    position: 'First',
    grade: 80,
    isPass: true,
    books: ['ts book-1', 'ts book-2', 'ts book-3'],
    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aut consequuntur non ullam consectetur voluptates assumenda iusto sapiente.`
  },
];
