const { Given, When, Then, After } = require("cucumber");
const expect = require("chai").expect;
const sinon = require("sinon");
const Joi = require("joi");
const addLableFunction = require("./add-lable");
const sandbox = sinon.createSandbox();

const dataAccessLableFunction = {
    createLableDb: () => { },
};

const createLablesStub = sandbox.stub(dataAccessLableFunction, "createLableDb");
createLablesStub.callsFake((args) => {
    expect(args).deep.equal(
        this.id = args
    );
    if (this.id == 1) throw "success";
    if (isNaN(this.id) == true) {
        throw "id must be a number";
    }
    throw ("invalid user id");

});

After(() => {
    this.id = undefined;
    this.result = undefined;
    this.error = undefined;

    sandbox.resetHistory();
});

// first and third
Given("use id: {int} to create lable", (id) => {
    this.id = id;
});

//second
Given("use id: {string} to create lable", (id) => {
    this.id = id;
});

// first, second and third
When("Try to create new lable", async () => {
    const createLable = addLableFunction({ dataAccessLableFunction, Joi });
    try {
        this.result = await createLable(this.id);
    } catch (e) {
        this.error = {
            message: e,
        };
    }
})

// first, second
Then('It will throw error with message: "{string}" while creating lable', (message) => {
    expect(this.error).deep.equal({
        message,
    });
})

// third
Then('It will send success message: "{string}" while creating lable', (message) => {
    expect(this.error).deep.equal({
        message,
    });
});

Then('create lable function will call {int} time while creating lable',
    (dataAccessLableFunctionsCallCount) => {
        sinon.assert.callCount(dataAccessLableFunction.createLableDb, dataAccessLableFunctionsCallCount);
    },
);
