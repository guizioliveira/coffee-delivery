# Coffee Delivery App ☕

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)


**Coffee Delivery App** is a responsive web application developed with **React** and **TypeScript**, designed to streamline the selection and delivery of coffees to users. Created as a **simulation for fun and to deepen my knowledge**, this project features a user-friendly interface (UI/UX by [@Rocketseat](https://rocketseat.com.br)) and robust functionalities, allowing users to browse various types of coffees, add items to the cart, input delivery details, choose payment methods, and efficiently confirm their orders.

## 📦 Features

- **Product Catalog**: Explore a variety of coffees with detailed descriptions and appealing images.
- **Cart Management**: Add, remove, and adjust the quantity of coffees in the cart, with real-time price calculations.
- **Checkout Form**: Enter delivery information and select payment methods with robust validation using React Hook Form and Zod.
- **Order Confirmation**: View a comprehensive summary of the order with delivery and payment details.
- **Responsive Design**: Interface optimized for mobile devices, tablets, and desktops using Styled Components and media queries.
- **Global State Management**: Utilize React Context and `useReducer` with Immer for efficient state management.
- **User Notifications**: Real-time feedback with notifications via `react-toastify`.

## 🛠 Technologies Used

- **Frontend**: React, TypeScript
- **Styling**: Styled Components
- **Routing**: React Router v6
- **State Management**: React Context, `useReducer`, Immer
- **Form Handling and Validation**: React Hook Form, Zod
- **Notifications**: `react-toastify`
- **Icons**: Phosphor Icons for vector icons
- **Other Dependencies**: `react-toastify` for user-friendly notifications

## 📸 Screenshots

![Home Page](https://github.com/user-attachments/assets/af5500ca-009a-458c-8342-dbe72f1afbbf)
*Home page displaying the coffee catalog.*

![Checkout Page](https://github.com/user-attachments/assets/7531e1a4-a5d1-4a5f-a883-9b6d6ac7f799)
*Checkout form for entering delivery and payment details.*

![Confirmation Page](https://github.com/user-attachments/assets/e7784e88-66d1-44b2-a4f5-6eec829c51a0)
*Order confirmation page with detailed summary.*


## 🚀 How to Run the Project

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** or **yarn**

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/coffee-delivery-app.git
   cd coffee-delivery-app
   ```
   
2. Install Dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the Development Server

   ```bash
    npm start
    # or
    yarn start
   ```
   
4. Access the Application

    Open your browser and navigate to `localhost:5173` to view the application in action.

## 📚 Documentation

### Coffee Store Context

- Manages the global state related to selected coffees and shipping fees.
- Stores the order details after form submission, ensuring that the confirmation page displays accurate information.

### Checkout Form

- Uses React Hook Form and Zod to manage and validate delivery and payment data.

### Main Pages

- **home**: Home page with the coffee catalog.
- **checkout**: Checkout page for entering delivery details and selecting payment methods.
- **confirmation**: Confirmation page displaying a summary of the order.

## 📋 To do

### Testing

- **In development.** Planning to implement unit and integration tests to ensure the quality and reliability of the application.

### Internationalization (i18n)

- **Planned.** Intending to integrate an internationalization (i18n) library, such as `react-i18next`, to support multiple languages and enhance accessibility for a broader user base.

## 📝 Contributing

Contributions are welcome! Feel free to open issues or pull requests to improve this project.

## 📝 License

This project is licensed under the [MIT License](LICENSE).

