// Test One Restrictions: Do not declare any new variable with the let keyword
let testOneMessage = 'test failing';

function testOne(testFourMessage) {
  let testOneMessage = testFourMessage; //changed
  return testOneMessage;
}


// Test Two Restrictions: Do not change any code in the body of testTwo
// (you can edit helperFunc though)
let testTwoMessage = 'test failing';

function testTwo() {
  helperFunc();
  return testTwoMessage;
}

function helperFunc(a) {
  a = 'test succeeding';
  testTwoMessage = a; //added;
  return a;
}




// Test Three Restrictions: Type only a single character in either testThree or getMessage
let testThreeMessage = 'test failing';

function testThree(testThreeMessage) {
  if (testThreeMessage) {
    testThreeMessage = 'test succeeding';
  }

  let msg = getMessage(1);//parameter added
  return msg;

  function getMessage(value) {
    if (value) {
      return testThreeMessage;
    }

    return 'test failing';
  }
}


// Test Four Restrictions: Delete only a single character from any function.
let testFourMessage = 'test succeeding';

function testFour(msg) { // msg = "test failing"
  function innerFunc(msg) { // msg = "test succeeding"
    msg = msg

    function doubleInner(ms) { // msg ="test failing"
      testFourMessage = msg;  //testFourMessage = "test failing"
      return testFourMessage;
    }

    testFourMessage = doubleInner('test failing') //test failing
  }

  innerFunc(testFourMessage);

  msg = testFourMessage; 
  return testFourMessage;
}
