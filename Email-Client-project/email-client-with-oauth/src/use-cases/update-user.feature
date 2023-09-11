Feature: Update User

     Scenario Outline: Try to Update user with invalid details, then it will throw error.
        Given Update user details by id: "<id>"
        When Try to Update user details
        Then It will throw error with message: "<message>" while updating user details
        # And display user function will call <readFunctionCallCount> time while creating new user

        Examples:
            | id  | readFunctionCallCount | message         |
            | NaN | 0                     | "No user exist" |

    Scenario Outline: Try to Update user with valid details.
        Given Update user details by id: <id>
        When Try to Update valid user details
        Then It will throw valid message: "<message>" with updating user details
        # And display user function will call <readFunctionCallCount> time while creating new user

        Examples:
            | id | readFunctionCallCount | message   |
            | 1  | 0                     | "updated" |