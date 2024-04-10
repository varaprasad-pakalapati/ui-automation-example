Feature: login user with dynmic data
    As AQA I want to test that login user functionality is working fine as expected

    Background:
        Given I create new user using api

    Scenario Outline:  login user with dynmic data
        Given I have para soft test website
        When I enter login details
        And I click on login button
        Then I verify user logged in successfully
