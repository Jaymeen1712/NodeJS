const { Given, When, Then, After } = require("cucumber");
const expect = require("chai").expect;
const sinon = require("sinon");
const Joi = require("joi");
const getLableFunction = require("./get-lable");
const sandbox = sinon.createSandbox();

const dataAccessLableFunction = {
    getLableDb: () => { },
};

const getLablesStub = sandbox.stub(dataAccessLableFunction, "getLableDb");
getLablesStub.callsFake((args) => {
    console.log(args);
    expect(args).deep.equal(
        this.id = args
    );
    if (this.id.id == 1) throw "success";
    if (isNaN(this.id.id) == true) {
        throw "id must be a number";
    }
    throw ("not found");
});

After(() => {
    this.id = undefined;
    this.result = undefined;
    this.error = undefined;
    sandbox.resetHistory();
});

// first and third
Given('use id: {int} to get lable', (id) => {
    this.id = id;
});

// second
Given("use id: {string} to get lable", (id) => {
    this.id = id;
});

// first, second and third
When('Try to get lable', async () => {
    const getLable = getLableFunction({ dataAccessLableFunction, Joi });
    try {
        this.result = await getLable({ id: this.id });
    } catch (e) {
        console.log(e)
        this.error = {
            message: e,
        };
    }
})

// first, second
Then('It will throw error with message: "{string}" while getting a lable', (message) => {
    // console.log(message);
    // console.log(this.error);
    expect(this.error).deep.equal({
        message,
    });
})

// third
Then('It will send success message: "{string}" while getting lable', (message) => {
    console.log("-------------------------", message);
    console.log(this.error);
    expect(this.error).deep.equal({
        message,
    });
});

Then('get lable function will call {int} time while getting a lable',
    (dataAccessLableFunctionsCallCount) => {
        sinon.assert.callCount(dataAccessLableFunction.getLableDb, dataAccessLableFunctionsCallCount);
    },
);
