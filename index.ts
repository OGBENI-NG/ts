const container = document.querySelector('.container');
import { studentEnums, DogsInfo } from './src/studentData';

//add to Dog by omit and add new id to new object
function addDog(dogObj: Omit<DogsInfo, 'id'>): DogsInfo | undefined{
  const newObj: DogsInfo = {
    id: studentEnums.length + 1,
    ...dogObj
  }
  studentEnums.push(newObj)
  return  newObj
}
addDog({
  name: 'Rocky Go',
  schoolName: 'Ts coding school inc.',
  image: './img/dog-1.png',
  position: 'New',
  grade: 90,
  isPass: true,
  books: ['ts book-1', 'ts book-2', 'ts book-3'],
  about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aut consequuntur non ullam consectetur voluptates assumenda iusto sapiente.`
})

//genetic type add new array using generic type
function addToArr<T>(array: T[], item:T): T[] | undefined {
  array.push(item)
  return array
}

addToArr(studentEnums, {
  id: studentEnums.length + 1,
  name: 'Aja Go',
  schoolName: 'Ts coding school inc.',
  image: './img/dog-3.png',
  position: 'New',
  grade: 70,
  isPass: false,
  books: ['ts book-1', 'ts book-2', 'ts book-3'],
  about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aut consequuntur non ullam consectetur voluptates assumenda iusto sapiente.`

})

function renderStudentResult():DogsInfo | undefined {
  if (!container) {
    console.error('Container element not found');
    return;
  }

  container.innerHTML = '';

  for (let studentCard of studentEnums) {
    let starRating = ''

    //get each student star base on student grade
    if(studentCard.grade > 88) {
      starRating = '⭐⭐⭐⭐⭐'
    } else if (studentCard.grade > 78) {
      starRating = '⭐️⭐⭐⭐'
    } else  if (studentCard.grade > 68) {
      starRating = '⭐⭐⭐'
    } else  {
      starRating = '⭐️⭐️'
    }


    const studentBookArr = studentCard.books.map(book => (
      `<span class='book'>${book}</span>`
    )).join(' ') 

    const passDog = studentCard.isPass ? "✅" : "❌"
   
    const studentCardHTML = `
      <div class="card">
        <div class='lg-inner-card'>
          <div class='img-container'>
            <img src="${studentCard.image}" />
          </div>
          <div class='name-container'>
            <div class='nameStar'>
              <h2 class='student-name'>${studentCard.name} <span>${passDog}</span></h2>
              <p class='grade'>Grade: ${studentCard.grade}</p>
            </div>
            <p class='school-name'>${studentCard.schoolName}</p>
          </div>
        </div>
        <div class='grade-section'>
          <p class='position'>Position: ${studentCard.position}</p>
          <span>Ratings ${starRating}</span>
          <p class='about'>About: ${studentCard.about}</p>
        </div>
        <div class="book-container">
          <p class='book-title'>Dogs books:</p>
          ${studentBookArr}
        </div>
      </div>
    `;
    container.innerHTML += studentCardHTML;
  }
}

// Call the function to render the student results
renderStudentResult();
