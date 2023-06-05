# Finance Tracker

## About
Finance Tracker is a web application that helps you keep track of your finances. It allows you to add your
income and expenses and then visualizes the data in a chart. It also allows you to see your total income and expenses.

It also provides features to do CRUD operations on the data(Expenses and Income).


## Tech stack used
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
<br/>
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

### FrontEnd
- **React.js**
    - Used for creating the UI
- **Bootstrap**
    - Used for styling
- **Chart.js**
    - Used for creating charts
- HTML/CSS/JS
    - Used for creating the UI
### BackEnd
- **NodeJS**
    - Used for interacting with the database, viuslizing the data and handling the data/requests
- Firebase
    - Used for storing the data
### Tools
- **Vercel**
    - Used for hosting the website
- **Git**
    - Used for version control
- **GitHub**
    - Used for hosting the repository
- **GitHub CoPilot**
    - Used for generating code snippets


## How to use
- Go to the website: [Finance Tracker](https://finance-tracker-psi.vercel.app/)
### Home Page
- Click on the `Add Income` button to add your income
    - You can add the amount, title and mode of income
- It'll be displayed in the `Income` section
- Click on the `Add Expense` button to add your expense
    - You can add the amount, title, category and mode of expense, along with the date
- Expenses will be displayed in the `Expenses` section
- Overall details will be displayed in the `Finances` section
- As you add the expenses, it will be visualized in the chart
- To see expenses in detail, you can click on `Expenses` in the navbar
### Expenses Dashboard Page
- The Expenses Dashboard page contains a table with all the expenses and filters to filter the expenses
- you can filter based on expense category, mode of expense 
    - You need to keep the appropriate checkbox checked to filter based on that

## Local Deployment

Clone the repository
```
git clone https://github.com/snehalibiswas/FinanceTracker.git
```
Install the dependencies
```
npm install
```
Run the app
```
npm start
```

## Usage of GitHub CoPilot
- It was used to generate the filters for the `Expenses Dashboard` page
- Used to generate this README.md file
- In `home ` page, it was used to generate the code we used to fetch data from the database and update the state variables
- Helped in generating media queries for the `home` page which we used to make the website responsive
- Helped in proper usage of `useState` and `useEffect` hooks