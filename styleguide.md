# Javascript

## ES6 Heavy

### Strings
- double quotes for strings (```''```)
- back ticks for string interpolation (string concatenation (joining strings together)) (```\`${}\````)

### CamelCase

### Let and Const (NO var)

### if statement should look like this
```
if() {

}
```
### Phat arrow functions
```
() =>{

}

function myfunc() {
  // When a 'this' is needed
}
```

### object keys to be called with dot syntax when a variable is not required
```
const myObj = {
  key: 'value',
  other: 'value'
}
myObj.key;
const key = 'other';
myObj[key];
```

### Destructuring
```
const user = {
  username: 'Ian',
  email: 'e@gmail.com', 
  age: 3
}

const username = this.state.user.username;
const email = this.state.user.email;
const age = this.state.user.age;

const {username, email, age} = this.state.user;

username;
```
# Sass

## class names
- hyphen-case

## selectors
```
name {

}
```

## files
- variables file
- mixins for multi browser
- extends

## Nesting
- no more than 3 layers deep

## Grid Framework
- skeletonCSS

# REST for Routes

## /users/:id

# Database
- plural for table names
- column names snake_case