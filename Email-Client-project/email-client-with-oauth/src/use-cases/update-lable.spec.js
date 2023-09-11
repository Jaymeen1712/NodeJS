const { Given, When, Then, After } = require("cucumber");
const expect = require("chai").expect;
const sinon = require("sinon");
const Joi = require("joi");
const  updateLableFunction = require("./update-lable");
const sandbox = sinon.createSandbox();

const dataAccessLableFunction = {
    updateLableDb: () => { },
};

const updateLableDbStub = sandbox.stub(dataAccessLableFunction, "updateLableDb");
updateLableDbStub.callsFake((args)=>{
    expect(args).deep.equal(
        this.id = args
    )
    if(this.id == "8ab"){
        console.log("this.id is here" , this.id)
        throw "id must be a number"
    }
    if (this.name == "DELETE") {
        throw "updated";
    }
    throw "user not exist"
})


// first, third
Given('user name: {string} id: {float} to updated lable', (name,id) => {
    this.name = name;
    this.id = id;
});

After(() => {
    this.id = undefined;
    this.name = undefined;
    this.result = undefined;
    this.error = undefined;
    sandbox.resetHistory();
});

// second
Given('user name: {string} id: {string} to updated lable', (name, id) => {
    this.name = name;
    this.id = id;
});

// first, second, third
When('Try to update lable', async () => {
    const updateLable = updateLableFunction({ dataAccessLableFunction , Joi});
    try {
        console.log("kdmkdmdkmd",this.name);
        this.result = await updateLable({name:this.name,id:this.id});
    } catch (e) {
        this.error = {
            message: e,
        };
        console.log(this.error.message);
    }
})

// first, second, third
Then('It will throw error with message: "{string}" while updating a lable', (message) => {
    expect(this.error).deep.equal({
        message,
    });
})

Then('update lable function will call {int} time while updating a lable',
    (dataAccessLableFunctionsCallCount) => {
        sinon.assert.callCount(dataAccessLableFunction.updateLableDb, dataAccessLableFunctionsCallCount);
    },
);


