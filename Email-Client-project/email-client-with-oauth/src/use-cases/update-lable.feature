Feature: Update Lables for User

    Scenario Outline: Try to update lable with invalid user id
        Given user name: "<name>" id: <id> to updated lable
        When Try to update lable
        Then It will throw error with message: "<message>" while updating a lable
        And update lable function will call <dataAccessLableFunctionsCallCount> time while updating a lable

        Examples:

            | name | id | dataAccessLableFunctionsCallCount | message          |
            | SEND | 20 | 1                                 | 'user not exist' |

    Scenario Outline: Try to update lable with not a number id
        Given user name: "<name>" id: "<id>" to updated lable
        When Try to update lable
        Then It will throw error with message: "<message>" while updating a lable
        And update lable function will call <dataAccessLableFunctionsCallCount> time while updating a lable


        Examples:

            | name | id  | dataAccessLableFunctionsCallCount | message                                            |
            |      | 7   | 0                                 | '"name" is not allowed to be empty'                |
            | SE   | 7   | 0                                 | '"name" length must be at least 3 characters long' |
            | SEND | 8ab | 0                                 | '"id" must be a number'                            |
            | SEND |     | 0                                 | '"id" must be a number'                            |

    Scenario Outline: Try to update valid lable with valid lable id
        Given user name: "<name>" id: <id> to updated lable
        When Try to update lable
        Then It will throw error with message: "<message>" while updating a lable
        And update lable function will call <dataAccessLableFunctionsCallCount> time while updating a lable


        Examples:

            | name   | id | dataAccessLableFunctionsCallCount | message   |
            | DELETE | 10 | 1                                 | "updated" |