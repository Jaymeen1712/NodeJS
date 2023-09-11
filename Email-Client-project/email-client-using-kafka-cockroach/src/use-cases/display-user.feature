Feature: Display User

    Scenario Outline: Try to Display user with invalid details, then it will throw error.
        Given Get user details by id:"<id>"
        When Try to get user details by invalid details
        Then It will throw error with message: "<message>" while fetching user details
        And display user function will call <readFunctionCallCount> time while fetching user details
        And display user function will call <getLableFunctionCallCount> time while fetching lable details

        Examples:
            | id  | readFunctionCallCount | getLableFunctionCallCount | message         |
            | NaN | 1                     | 1                         | "no user exist" |
