# Shoe_E_Commerce

This React project showcases an interactive product display component that allows users to view detailed information about products by clicking on product cards. The detail view includes a transparent detail card with product features, technology descriptions, and clickable color thumbnails for viewing the product in different colors.

## Features

- **Interactive Product Cards**: Users can click on any product card to reveal a detailed view including the product's features, price, and available technologies.
- **Thumbnail Selection**: Users can click on thumbnails to change the main displayed image of the product to the selected colorway.
- **Semi-Transparent Detail Card**: The detail card uses a semi-transparent background with backdrop blur effects to enhance the visual appeal and focus on the content.
- **Animated Transitions**: Smooth CSS animations are applied for transitioning elements in and out of view, providing a refined user experience.
- **Responsive Design**: The layout adapts to different screen sizes, ensuring usability across devices.

## Technologies Used

- **React.js**: Utilized for building the user interface with interactive capabilities.
- **Styled-Components**: Used for styling individual components with encapsulated styles.
- **CSS3**: Leveraged for animations, responsive design, and implementing parallax effects.
- **react-parallax**: A React component library used to add engaging parallax effects to the project.
- **Material-UI**: Employed to provide ready-made, high-quality React components that adhere to the Material Design guidelines. Used for crafting a polished, coherent interface with elements like buttons, cards, and dialog boxes.

## Project Setup

To get this project up and running on your local machine, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kavyadharsini/Shoe_E_Commerce.git
   cd Shoe_E_Commerce
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the project:**

   ```bash
   npm start
   ```

   This command runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Component Structure

- `ProductSection`: This is the main component rendering the product cards and handling user interactions.
- `SectionContainer`: Styled component that serves as the main container for the component.
- `ProductCard`: Styled component used for displaying individual product cards.
- `DetailSection`: This component displays when a product card is clicked, showing detailed information and thumbnails.
- `ThumbnailContainer`: Manages the thumbnails shown next to the main product image in the detail view.
