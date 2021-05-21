This is an App that asks for employee information using inquirer and generates a Html File with employee information:

It begins by asking:

* What is your Name ?
* What is your Email ?
* What's Your Position At The Company?

Then it gives three options to the employee type :

            1) Manager
            2) Engineeer
            3) Intern

If the employee is a Manager, ask the following questions:

* What is your employee ID ?
* What is your  office number ?

If the employee is an Engineer, ask the following questions:
 
* What is your employee ID ? 
* what is your github username ?

If the employee is an Intern, ask the following questions:

* Whats your employee ID ?
* witch school did you attend ?

Finally the app asks if the user wants to agrregate another employee, if answer is yes then it runs the questions again, if answer is no it generates the employees.html file in the ./dist folder.

The app also has validation test for each type of employees, it runs using jest.