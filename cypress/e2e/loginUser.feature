Feature: login user
    As AQA I want to test that login user functionality is working fine as expected

    Scenario Outline:  login user
        Given I have para soft test website
        When I enter login details '<userName>' and '<password>'
        And I click on login button
        Then I verify user logged in successfully


        Examples:
            | userName          | password   |
            | testpara847282247 | automation |
            | testpara84728224  | automation |