const { Given, When, Then, After } = require("cucumber");
const expect = require("chai").expect;
const sinon = require("sinon");
const Joi = require("joi");
const deleteLableFunction = require("./delete-lable");
const sandbox = sinon.createSandbox();

const dataAccessLableFunction = {
    deleteLableDb: () => { },
};

const deleteLableDbStub = sandbox.stub(dataAccessLableFunction, "deleteLableDb");
deleteLableDbStub.callsFake((args) => {
    expect(args).deep.equal(
        this.id = args
    )
    if (this.id.id == 16) {
        throw "deleted"
    }
    else {
        throw "no lable exist"
    }
})

After(() => {
    this.id = undefined;
    this.result = undefined;
    this.error = undefined;
    sandbox.resetHistory();
});

// first
Given('Delete lable by lable id: {int}', (id) => {
    this.id = id
});

// second 
Given('Delete lable id: {string}', (id) => {
    this.id = id
});
// first
When('Try to delete lable', async () => {
    const deleteLable = deleteLableFunction({ dataAccessLableFunction, Joi });
    try {
        this.result = await deleteLable({ id: this.id });
    } catch (e) {
        this.error = {
            message: e,
        };
    }
});

// first
Then('It will throw error with message: "{string}" while deleting lable', (message) => {
    expect(this.error).deep.equal({
        message,
    });
});

// third
Then('It will send response with message: "{string}" while deleting lable', (message) => {
    expect(this.error).deep.equal({
        message
    })
});

Then('delete lable function will call {int} time while delete a lable',
    (dataAccessLableFunctionsCallCount) => {
        sinon.assert.callCount(dataAccessLableFunction.deleteLableDb, dataAccessLableFunctionsCallCount);
    },
);