Feature: Delete User

    Scenario Outline: Try to Delete user with invalid details, then it will throw error.
        Given Delete user details by id:"<id>"
        When Try to delete user details by invalid details
        Then It will throw error with message: "<message>" while deleting user details


        Examples:
            | id | deleteFunctionCallCount | message         |
            | 1  | 0                       | "no user exist" |


    Scenario Outline: Try to Delete user with valid details, then it will throw error.
        Given Delete user details by id:<id>
        When Try to delete user details by valid details
        Then It will throw success with message: "<message>" while deleting user details

        Examples:
            | id | deleteFunctionCallCount | message   |
            | 1  | 0                       | "deleted" |

