Feature: Delete lable

    Scenario Outline: Try to Delete lable with invalid lable id, then it will throw error.
        Given Delete lable by lable id: <id>
        When Try to delete lable
        Then It will throw error with message: "<message>" while deleting lable
        And delete lable function will call <dataAccessLableFunctionsCallCount> time while delete a lable


        Examples:
            | id | dataAccessLableFunctionsCallCount | message          |
            | 1  | 1                                 | "no lable exist" |


    Scenario Outline: Try to update lable with not a number id
        Given Delete lable id: "<id>"
        When Try to delete lable
        Then It will throw error with message: "<message>" while deleting lable
        And delete lable function will call <dataAccessLableFunctionsCallCount> time while delete a lable

        Examples:
            | id  | dataAccessLableFunctionsCallCount | message                 |
            | 1as | 0                                 | '"id" must be a number' |

    Scenario Outline: Try to update lable with valid id
        Given Delete lable by lable id: <id>
        When Try to delete lable
        Then It will send response with message: "<message>" while deleting lable
        And delete lable function will call <dataAccessLableFunctionsCallCount> time while delete a lable

        Examples:
            | id | dataAccessLableFunctionsCallCount | message   |
            | 16 | 1                                 | "deleted" |

