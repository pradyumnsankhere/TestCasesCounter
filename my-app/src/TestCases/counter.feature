Feature: Incrementing a counter

Scenario: Increment the counter value
  Given a Counter component
  When I click the increment button
  Then the count should increase by 1

Scenario: Decrement the counter value
  Given a Counter component
  When I click the Decrement button
  Then the count should Decrement by 1

Scenario: Reset the counter value
  Given a Counter component
  When I click the Reset button
  Then the count should  0
 
 