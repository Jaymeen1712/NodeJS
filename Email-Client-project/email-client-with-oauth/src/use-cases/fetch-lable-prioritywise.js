module.exports = function createFetchLablePrioritywiseFunction({ dataAccessLableFunction }) {
    return async function fetchLablePrioritywiseFunction() {

      console.log("\n\n fetch-lable-prioritywise.js --usecase- was called\n\n");
      const lables = await dataAccessLableFunction.fetchLablePrioritywisedb();
      return lables;
    };
  };
  