const { Given, When, Then } = require("cucumber");
const expect = require("chai").expect;
const sinon = require("sinon");
const Joi = require("joi");
const createUserFunc = require("./create-user");
const sandbox = sinon.createSandbox();

const usersDb = {
  createdb: () => {},
};

const create = sandbox.stub(usersDb, "createdb");
create.callsFake(function (args) {
  // expect(args).deep.equal({
  //   userName: this.userName,
  //   userEmail: this.userEmail,
  //   accessToken: this.accessToken,
  //   refreshToken: this.refreshToken,
  //   photo: this.photo,
  // });
  if (args.userName == "Mugish") {
    return { affectedRows: 0 };
  }
  return { affectedRows: 1 };
});

const createLableDb = {
  lableCreate: () => {},
};
const createLable = sandbox.stub(createLableDb, "lableCreate");
createLable.callsFake(function (args) {
  // expect(args).deep.equal({
  //   userName: this.userName,
  //   userEmail: this.userEmail,
  //   accessToken: this.accessToken,
  //   refreshToken: this.refreshToken,
  //   photo: this.photo,
  // });
  if (args.userName == "Mugish") {
    return { affectedRows: 0 };
  }
  if(args.userName == "Malhar"){
    throw {status:"created"};
  }
  return { affectedRows: 1 };
});

Given(
  "User details userName: {string}, userEmail: {string}, accessToken: {string}, refreshToken: {string}, photo: {string} to create new user",
  function (userName, userEmail, accessToken, refreshToken, photo) {
    this.userName = userName || undefined;
    this.userEmail = userEmail || undefined;
    this.accessToken = accessToken || undefined;
    this.refreshToken = refreshToken || undefined;
    this.photo = photo || undefined;
  }
);

When("Try to create new user", async function () {
  const createUser = createUserFunc({
    create: create,
    lableCreate: createLable,
    Joi,
  });
  try {
    this.result = await createUser({
      userName: this.userName,
      userEmail: this.userEmail,
      accessToken: this.accessToken,
      refreshToken: this.refreshToken,
      photo: this.photo,
    });
  } catch (e) {
    this.error = {
      message: e,
    };
    console.log(this.error);
  }
});

Then(
  'It will throw error with message: "{string}" while creating user',
  function (message) {
    expect(this.error).deep.equal({
      message,
    });
  }
);

Given(
  "User detail userName: {string}, userEmail: {string}, accessToken: {string}, refreshToken: {string}, photo: {string} to create new user",
  function (userName, userEmail, accessToken, refreshToken, photo) {
    this.userName = userName || undefined;
    this.userEmail = userEmail || undefined;
    this.accessToken = accessToken || undefined;
    this.refreshToken = refreshToken || undefined;
    this.photo = photo || undefined;
  }
);

When("Try to create new user which is alrady exist", async function () {
  const createUser = createUserFunc({
    create: create,
    lableCreate: createLable,
    Joi,
  });
  try {
    this.result = await createUser({
      userName: this.userName,
      userEmail: this.userEmail,
      accessToken: this.accessToken,
      refreshToken: this.refreshToken,
      photo: this.photo,
    });
  } catch (e) {
    console.log(e);
    this.error = {
      userExistMessage: e,
    };
  }
});

Then(
  'It will throw error  message: "{string}" while creating user',
  function (userExistMessage) {
    expect(this.error).deep.equal({
      userExistMessage,
    });
  }
);

Given(
  'User detail userName: {string}, userEmail: {string}, accessToken: {string}, refreshToken: {string}, photo: {string} to create a new user',
  function (userName, userEmail, accessToken, refreshToken, photo) {
    this.userName = userName || undefined;
    this.userEmail = userEmail || undefined;
    this.accessToken = accessToken || undefined;
    this.refreshToken = refreshToken || undefined;
    this.photo = photo || undefined;
  }
);

When('Try to create new user whit valid details', async function () {
  const createUser = createUserFunc({
    create: create,
    lableCreate: createLable,
    Joi,
  });
  try {
    this.result = await createUser({
      userName: this.userName,
      userEmail: this.userEmail,
      accessToken: this.accessToken,
      refreshToken: this.refreshToken,
      photo: this.photo,
    });
  } catch (e) {
    this.error = {
      userCreateMessage: e,
    };
  }
});

Then('It will throw  message: "{string}" while creating user', function(userCreateMessage){
  let ans = this.error;
  ans.userCreateMessage = "created"
  expect(this.error).deep.equal({
    userCreateMessage,
  });
})

Then(
  "create user function will call {int} time while creating user details",
  (creatFunctionCallCount) => {
    sinon.assert.callCount(create, creatFunctionCallCount);
  }
);

Then(
  "create user function will call {int} time while creating user detail",
  (creatLableFunctionCallCount) => {
    sinon.assert.callCount(createLable, creatLableFunctionCallCount);
  }
);
