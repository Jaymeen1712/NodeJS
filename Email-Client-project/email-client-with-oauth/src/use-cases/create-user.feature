Feature: Create New User

    Scenario Outline: Try to create new user with invalid details, then it will throw error.
        Given User details userName: "<userName>", userEmail: "<userEmail>", accessToken: "<accessToken>", refreshToken: "<refreshToken>", photo: "<photo>" to create new user
        When Try to create new user
        Then It will throw error with message: "<message>" while creating user
        And create user function will call <creatFunctionCallCount> time while creating user details
        And create user function will call <creatLableFunctionCallCount> time while creating user detail


        Examples:
            | userName | userEmail        | accessToken | refreshToken | photo | creatFunctionCallCount | creatLableFunctionCallCount | message                                                    |
            |          |                  |             |              |       | 0                      | 0                           | '"userName" is required'                                   |
            | Mu       |                  |             |              |       | 0                      | 0                           | '"userName" length must be at least 3 characters long'     |
            | Mugish   |                  |             |              |       | 0                      | 0                           | '"userEmail" is required'                                  |
            | Mugish   | mugish           |             |              |       | 0                      | 0                           | '"userEmail" must be a valid email'                        |
            | Mugish   | mugish@gmail.com |             |              |       | 0                      | 0                           | '"accessToken" is required'                                |
            | Mugish   | mugish@gmail.com | ab          |              |       | 0                      | 0                           | '"accessToken" length must be at least 3 characters long'  |
            | Mugish   | mugish@gmail.com | abcdw       | sc           |       | 0                      | 0                           | '"refreshToken" length must be at least 3 characters long' |
            | Mugish   | mugish@gmail.com | abcdef      |              |       | 0                      | 0                           | '"refreshToken" is required'                               |
            | Mugish   | mugish@gmail.com | abcdef      | abcdfghei    |       | 0                      | 0                           | '"photo" is required'                                      |


    Scenario Outline: Try to create new user with already regestered, then it will throw error.
        Given User detail userName: "<userName>", userEmail: "<userEmail>", accessToken: "<accessToken>", refreshToken: "<refreshToken>", photo: "<photo>" to create new user
        When Try to create new user which is alrady exist
        Then It will throw error  message: "<message>" while creating user
        And create user function will call <creatFunctionCallCount> time while creating user details
        And create user function will call <creatLableFunctionCallCount> time while creating user detail

        Examples:
            | userName | userEmail        | accessToken | refreshToken | photo     | creatFunctionCallCount | creatLableFunctionCallCount | message              |
            | Mugish   | mugish@gmail.com | mklmkl      | mklmkl       | abcde.png | 1                      | 0                           | "user already exist" |


    Scenario Outline: created new user with valid details.
        Given User detail userName: "<userName>", userEmail: "<userEmail>", accessToken: "<accessToken>", refreshToken: "<refreshToken>", photo: "<photo>" to create a new user
        When Try to create new user whit valid details
        Then It will throw  message: "<message>" while creating user
        And create user function will call <creatFunctionCallCount> time while creating user details
        And create user function will call <creatLableFunctionCallCount> time while creating user detail

        Examples:
            | userName | userEmail        | accessToken | refreshToken | photo      | creatFunctionCallCount | creatLableFunctionCallCount | message   |
            | Malhar   | malhar@gmail.com | mklmdf      | mklmsdf      | abcsde.png | 2                      | 0                           | "created" |