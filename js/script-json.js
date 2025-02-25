const users = [
  {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,

    //methods don't get to json object
    getFullInfo() {
      return `User ${this.name} is ${this.age} years old, loves ${
        this.hobby
      } and has ${this.premium ? 'premium' : 'no premium'}`;
    },
  },
  {
    name: 'Poly',
    age: 18,
    hobby: 'skydiving',
    premium: false,
  },
  {
    name: 'Ajax',
    age: 30,
    hobby: 'skydiving',
    premium: true,
  },
];

// const usersString = JSON.stringify(users);
// console.log(usersString);

// const usersObj = JSON.parse(usersString);
// console.log(usersObj);

// console.log('start')

// try {
//   const user = {}
//   user = 'test'
// } catch (error) {
//     console.log(error);
// }

// console.log('end')

// localStorage.setItem('users', JSON.stringify(users));

// const u = localStorage.getItem('users');
// const user = JSON.parse(u);
// console.log(user);

// localStorage.removeItem('users');
// localStorage.clear();

const refs = {
  form: document.querySelector('#form'),
};

let formData = {};

const fillForm = (form) => {
    const data = JSON.parse(localStorage.getItem('form-data-state'));

    if (!data) {
        return;
    }

    formData = data;

    const objectKeys = Object.keys(data);
    console.log(objectKeys)
    objectKeys.forEach(key =>{
        form.elements[key].value = data[key];
    })

    console.log(data)
}

fillForm(refs.form);

const onFieldChange = ({ target: formField }) => {
    try {
        const formFieldfValue = formField.value;
        const formFieldName = formField.name;
        console.log('formFieldfValue:', formFieldfValue);
        console.log('formFieldName:', formFieldName);
      
        formData[formFieldName] = formFieldfValue;
      
        localStorage.setItem('form-data-state', JSON.stringify(formData));
    } catch (error) {
       console.log(error);
    }
  
};

const onFieldSubmit = (event) => {
  event.preventDefault();
  event.target.reset();

  localStorage.removeItem('form-data-state');
};

refs.form.addEventListener('change', onFieldChange);
refs.form.addEventListener('submit', onFieldSubmit)
