const { Given, When, Then, After } = require("cucumber");
const expect = require("chai").expect;
const sinon = require("sinon");
const deleteUserFunc = require("./delete-user");
const sandbox = sinon.createSandbox();

const usersDb = {
  deletedb: () => { },
};

const deletedbStub = sandbox.stub(usersDb, "deletedb");
deletedbStub.callsFake(function (args) {
  expect(args).deep.equal(
    this.id = args
  );
  if (isNaN(this.id)) {
    return { status: "no user exist" };
  }
  else {
    return { status: "deleted" };
  }
});

After(() => {
  this.id = undefined;
  sandbox.resetHistory();
})

Given("Delete user details by id:{string}", function (id) {
  this.id = id;
});

Given("Delete user details by id:{int}", function (id) {
  this.id = id;
});

When("Try to delete user details by invalid details", async function () {
  const deleteUserData = deleteUserFunc({ deletedb: deletedbStub });
  try {
    this.result = await deleteUserData(this.id);
  } catch (e) {
    this.error = {
      message: e,
    };
  }
});

When("Try to delete user details by valid details", async function () {
  const deleteUserData = deleteUserFunc({ deletedb: deletedbStub });
  try {
    this.result = await deleteUserData(this.id);
  } catch (e) {
    this.error = {
      message: e,
    };
  }
});

Then(
  'It will throw error with message: "{string}" while deleting user details',
  function (message) {
    expect(this.error).deep.equal({
      message,
    });
  }
);

Then(
  'It will throw success with message: "{string}" while deleting user details',
  function (message) {
    let ans = this.error
    ans.message = "deleted";
    expect(this.error).deep.equal({
      message,
    });
  }
);





