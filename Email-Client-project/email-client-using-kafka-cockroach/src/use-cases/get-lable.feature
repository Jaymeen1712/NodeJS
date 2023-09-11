Feature: Get Lables for User

    Scenario Outline: Try to get lable with invalid user id
        Given use id: <id> to get lable
        When Try to get lable
        Then It will throw error with message: "<message>" while getting a lable
        And get lable function will call <dataAccessLableFunctionsCallCount> time while getting a lable

        Examples:

            | id | dataAccessLableFunctionsCallCount | message     |
            | 20 | 1                                 | "not found" |

Scenario Outline: Try to get lable with not a number id
    Given use id: "<id>" to get lable
    When Try to get lable
    Then It will throw error with message: "<message>" while getting a lable
    And get lable function will call <dataAccessLableFunctionsCallCount> time while getting a lable


    Examples:

        | id  | dataAccessLableFunctionsCallCount | message              |
        | NaN | 0                                 | '"id" must be a number' |

Scenario Outline: Try to get valid lable with valid user id
    Given use id: <id> to get lable
    When Try to get lable
    Then It will send success message: "<message>" while getting lable
    And get lable function will call <dataAccessLableFunctionsCallCount> time while getting a lable



    Examples:

        | id | dataAccessLableFunctionsCallCount | message   |
        | 1  | 1                                 | "success" |