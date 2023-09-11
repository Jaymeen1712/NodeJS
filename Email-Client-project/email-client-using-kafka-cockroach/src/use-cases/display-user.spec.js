const { Given, When, Then } = require("cucumber");
const expect = require("chai").expect;
const sinon = require("sinon");
const fetchAllUserDataFunc = require("./display-user");
const sandbox = sinon.createSandbox();

const usersDb = {
  read: () => {},
};

const readStub = sandbox.stub(usersDb, "read");
readStub.callsFake(function (args) {
  expect(args).deep.equal(
    this.id = "NaN"
  );
  return {status:"no user exist"};
});

const lablesDb = {
  getLable: () => {}
}

const lablesDbStub = sandbox.stub(lablesDb, "getLable");
lablesDbStub.callsFake(function (args) {
  expect(args).deep.equal(
  this.id = "NaN"
  )
  return {status:"no user exist"}
})

Given("Get user details by id:{string}", function (id) {
  this.id = id;
});

When("Try to get user details by invalid details", async function () {
  const fetchAllUserData = fetchAllUserDataFunc({ read : readStub, getLable: lablesDbStub });
  try {
    this.result = await fetchAllUserData(this.id);
  } catch (e) {
    this.error = {
      message: e,
    };
  }
});

Then(
  'It will throw error with message: "{string}" while fetching user details',
  function (message) {
    expect(this.error).deep.equal({
      message,
    });
  }
);

Then('display user function will call {int} time while fetching user details',
    (readFunctionCallCount) => {
      sinon.assert.callCount(readStub, readFunctionCallCount);
    },
);

Then('display user function will call {int} time while fetching lable details',
    (getLableFunctionCallCount) => {
      sinon.assert.callCount(lablesDbStub, getLableFunctionCallCount);
    },
);


