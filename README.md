# List-Display

This project is a simple React application that displays a list of products fetched from the Fake Store API.

## Steps to Run

1. **Clone the repository:**

git clone [https://github.com/bini-man/List-Display.git](https://github.com/bini-man/List-Display.git)

2. **Navigate to the project directory:

cd List-Display

3. Install dependencies:

npm install

4. Start the development server:

npm start


This will start the development server and open 1  the application in your default browser.  If it doesn't open automatically, you can access it at http://localhost:3000.

## Environment Variables

This project uses environment variables to configure the API endpoint.

* **`REACT_APP_FAKESTORE_API`:** This variable holds the URL for the Fake Store API.  It's used to fetch product data.

### Setting the Environment Variable

You will need to create a `.env` file in the root of your project and define the `REACT_APP_FAKESTORE_API` variable.  Here's how:

1. **Create the `.env` file:** In the root directory of your project (the same directory that contains `package.json`), create a file named `.env`.

2. **Add the API URL:** Inside the `.env` file, add the following line, replacing `[YOUR_API_ENDPOINT]` with the actual URL of the Fake Store API (or any other API you want to use).  For example, to limit the results to 10 products:
REACT_APP_FAKESTORE_API=https://fakestoreapi.com/products?limit=10


**Important:** Ensure there are no spaces around the `=` sign.

3. **Restart the development server:** If the development server is already running, you *must* restart it for the changes in the `.env` file to take effect.  Stop the server (usually by pressing Ctrl+C) and then start it again (`npm start`).

**Example `.env` file:**
REACT_APP_FAKESTORE_API=https://fakestoreapi.com/products?limit=10

## Technologies Used
React
Material UI
Axios

## Contributing 

Contributions are welcome!
## Project Structure

This project is organized into several key directories within the `src` folder to promote maintainability and scalability. Here's a breakdown:

src/
├── components/
│   ├── container.js
│   ├── ListCard.js
│   ├── LoadingorError.js
│   ├── NavigationDrawer.js
│   └── NavigationHeader.js
├── hooks/
│   └── useFetchProduct.js
├── utils/
│   └── constants.js
├── App.js
└── index.js

**Key directories and files:**

* **`components/`:** This directory contains all the reusable React components that make up the user interface.

    * `container.js`: This component likely acts as the main container for the product list, fetching data and managing the overall layout.
    * `ListCard.js`: This component is responsible for displaying the details of a single product in a card format.
    * `LoadingorError.js`: This component handles the display of loading indicators while data is being fetched and error messages if the fetch fails.  It provides a user-friendly experience during these states.
    * `NavigationDrawer.js`: This component implements the navigation drawer, likely used for navigation within the app.
    * `NavigationHeader.js`: This component creates the header section of the app, possibly containing the app title or other navigation elements.

* **`hooks/`:** This directory contains custom React hooks.

    * `useFetchProduct.js`: This custom hook encapsulates the logic for fetching product data, making it reusable across different components.

* **`utils/`:** This directory holds utility functions and constants.

    * `constants.js`: This file stores constants used throughout the application, such as API endpoints, colors, or other configuration values.

* **`App.js`:** The main application component that orchestrates the rendering of the different parts of the application.

* **`index.js`:** The entry point of the React application. It renders the `App` component into the DOM.


This structure helps keep the codebase organized and makes it easier to understand the purpose of each file and directory.  It also promotes code reuse through the use of custom hooks and reusable components.

###### HAPPY CODEING!