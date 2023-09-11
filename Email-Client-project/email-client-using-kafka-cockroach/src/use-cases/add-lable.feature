Feature: Add Lables for User

    Scenario Outline: Try to create invalid lable with invalid user id
        Given use id: <id> to create lable
        When Try to create new lable
        Then It will throw error with message: "<message>" while creating lable
        And create lable function will call <dataAccessLableFunctionsCallCount> time while creating lable
        Examples:

            | id | dataAccessLableFunctionsCallCount | message           |
            | 20 | 1                                 | "invalid user id" |

    Scenario Outline: Try to create lable with not a number id
        Given use id: "<id>" to create lable
        When Try to create new lable
        Then It will throw error with message: "<message>" while creating lable
        And create lable function will call <dataAccessLableFunctionsCallCount> time while creating lable

        Examples:

            | id  | dataAccessLableFunctionsCallCount | message                 |
            | NaN | 0                                 | '"id" must be a number' |

    Scenario Outline: Try to create valid lable with valid user id
        Given use id: <id> to create lable
        When Try to create new lable
        Then It will send success message: "<message>" while creating lable
        And create lable function will call <dataAccessLableFunctionsCallCount> time while creating lable


        Examples:

            | id | dataAccessLableFunctionsCallCount | message   |
            | 1  | 1                                 | "success" |