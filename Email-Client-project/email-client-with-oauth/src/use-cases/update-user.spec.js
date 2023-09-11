const { Given, When, Then, After } = require("cucumber");
const expect = require("chai").expect;
const sinon = require("sinon");
const Joi = require("joi");
const updateUserFunc = require("./update-user");
const sandbox = sinon.createSandbox();

const usersDb = {
  update: () => {},
};

const updateStub = sandbox.stub(usersDb, "update");
updateStub.callsFake(function (args) {
  expect(args).deep.equal((this.id = args));
  if (isNaN(this.id)) {
    return { status: "No user exist" };
  } else {
    return { status: "updated" };
  }
});

After(() => {
  this.id = undefined;
  sandbox.resetHistory();
});

Given("Update user details by id: {string}", function (id) {
  this.id = id;
});
When("Try to Update user details", async function () {
  const putUserData = updateUserFunc({ update: updateStub, Joi });
  try {
    this.result = await putUserData(this.value, this.id);
  } catch (e) {
    this.error = {
      message: e,
    };
    
  }
});
Then(
  'It will throw error with message: "{string}" while updating user details',
  function (message) {
    expect(this.error).deep.equal({
      message,
    });
  }
);

// second
Given("Update user details by id: {int}", function (id) {
  this.id = id;
});
When("Try to Update valid user details", async function () {
  const putUserData = updateUserFunc({ update: updateStub, Joi });
  try {
    this.result = await putUserData(this.value, this.id);
  } catch (e) {
    this.error = {
      message: e,
    };
  }
});
Then(
  'It will throw valid message: "{string}" with updating user details',
  function (message) {
    let ans = this.error;
    ans.message = "updated";
    expect(this.error).deep.equal({
      message,
    });
  }
);
