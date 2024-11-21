# Product Data API

This project serves static product data via an Express server for various product categories (e.g., laptops, headphones, jewelry). This is not connected to any external API, but the server acts as an API endpoint serving predefined data.

## Getting Started

To run the project locally, follow these steps:

### Prerequisites

- **Node.js** installed on your machine.
- **npm** (Node Package Manager) for managing dependencies.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Wasims0663/Product-Finder-using-dataset.git
Navigate into the project directory:

bash
Copy code
cd <project-directory>
Install the required dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
npm start
The server will run on http://localhost:3000.

Deployed URL
You can access the live version of the project here:

Product Finder using Dataset

Endpoints
The server exposes the following routes to get product data:

1. GET /products/laptops
Returns a list of laptops with details like name, price, store, and URL.

Example Response:

json
Copy code
[
  {
    "name": "HP Pavilion 15",
    "price": 55000,
    "store": "Amazon",
    "url": "https://amazon.com/hp-pavilion-15"
  },
  {
    "name": "Dell Inspiron 14",
    "price": 58000,
    "store": "Flipkart",
    "url": "https://flipkart.com/dell-inspiron-14"
  }
]
2. GET /products/headphones
Returns a list of headphones with details.

3. GET /products/earphones
Returns a list of earphones with details.

4. GET /products/jewelry
Returns a list of jewelry items like rings and bracelets.

5. GET /products/gymEquipment
Returns a list of gym equipment.

Notes
This is a static product data API.
The data is hardcoded in the server, and there's no external database or API integration in this project yet.
You can enhance the project by connecting it to external APIs in the future to pull real-time data.

Copy code

Make sure to replace `<project-directory>` with the actual name of your project folder if needed. 
