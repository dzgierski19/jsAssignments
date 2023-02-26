const areInputsTheSame = (input1, input2) => {
  if (typeof input1 === "object" && typeof input2 === "object") {
    return areObjectValuesTheSame(input1, input2);
  }
  return input1 === input2;
};

const areObjectValuesTheSame = (input1, input2) => {
  const sortedFirstObjectKeys = Object.keys(input1).sort();
  const sortedSecondObjectKeys = Object.keys(input2).sort();
  const firstObjectValues = Object.values(input1);
  const secondObjectValues = Object.values(input2);

  if (
    areObjectKeysTheSame(sortedFirstObjectKeys, sortedSecondObjectKeys) ===
    false
  ) {
    return false;
  }

  for (let i = 0; i < firstObjectValues.length; i++) {
    console.log(input1[sortedFirstObjectKeys[i]]);
    console.log(input2[sortedSecondObjectKeys[i]]);
    if (
      typeof input1[sortedFirstObjectKeys[i]] === "object" &&
      typeof input2[sortedSecondObjectKeys[i]] === "object"
    ) {
      return areObjectValuesTheSame(
        input1[sortedFirstObjectKeys[i]],
        input2[sortedSecondObjectKeys[i]]
      );
    } else if (
      input1[sortedFirstObjectKeys[i]] !== input2[sortedSecondObjectKeys[i]]
    ) {
      return false;
    }
  }
  return true;
};

const areObjectKeysTheSame = (input1, input2) => {
  if (areObjectKeysTheSameLength(input1, input2) === false) {
    return false;
  }

  for (let i = 0; i < input1.length; i++) {
    if (input1[i] !== input2[i]) {
      return false;
    }
  }
  return true;
};

const areObjectKeysTheSameLength = (input1, input2) => {
  if (input1.length !== input2.length) {
    return false;
  }
  return true;
};
const obj1 = {
  element: { a: "a", b: "b", c: { d: "e" } },
};
const obj2 = {
  element: { a: "a", b: "b", c: { d: "d" } },
};

let person = {
  name: "John",
  surname: "Doe",
  kids: { second: "Dorota" },
  element: { a: "a", b: "b", c: { d: "e" } },
};
let person2 = {
  name: "John",
  kids: { second: "Anna" },
  surname: "Doe",
  element: { a: "a", b: "b", c: { d: "d" } },
};

result2 = areInputsTheSame(person, person2);
console.log(result2);

let person3 = { name: "John", surname: "Doe", kid: { name: "Rafał", age: 12 } };
let person4 = { name: "John", surname: "Doe", kid: { name: "Rafał", age: 11 } };

const stringified = JSON.stringify(person3);

// console.log(stringified)

// skopiwoac zadania z poprawieniem readme file opis zadania ma byc w README, a pozniej zacommitowac. zrobic nowego brancha na ktorym rozwiazauje zadanie i commitowac na biezaco na brancha. push brancha na github, zrobic pull request, w polu reviewers dodac Michala (mwakulinski). pozniej Michal zrobi code review
