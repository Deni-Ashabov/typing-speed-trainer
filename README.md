# Typing Speed Trainer

**Typing Speed Trainer** is a React-based application designed to help users improve their typing speed and accuracy. The app provides a typing test with real-time feedback, tracking errors, and calculating typing speed in words per minute (WPM).

## Features

- **Typing Test**: Users type a provided text and receive real-time feedback on their typing accuracy.
- **Error Highlighting**: Correct and incorrect characters are highlighted with different colors.
- **Typing Speed Calculation**: Words per minute (WPM) and number of errors are calculated and displayed.
- **Caps Lock Warning**: Notifies users when Caps Lock is active.
- **Language Warning**: Alerts users if they are typing in a different language than the provided text.
- **Cursor Animation**: A blinking cursor that moves along with the text as users type.
- **Responsive Design**: Works well on both desktop and mobile devices.
- **Restart Test**: Ability to restart the test at any time.

## Technologies

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management for handling application state.
- **Styled Components**: For styling components with CSS-in-JS.
- **TypeScript**: Provides type safety and enhances code quality.

## Installation

To get started with Typing Speed Trainer, follow these steps:

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/Deni-Ashabov/typing-speed-trainer.git
    ```

2. **Navigate to the Project Directory**:

    ```bash
    cd typing-speed-trainer
    ```

3. **Install Dependencies**:

    ```bash
    npm install
    ```

4. **Run the Development Server**:

    ```bash
    npm start
    ```

    Open `http://localhost:3000` in your browser to view the application.

## Usage

1. **Start Typing**: Begin typing the provided text. The app will highlight characters in real-time and provide feedback on your typing accuracy.
2. **View Results**: After completing the typing test, the application will display your WPM and number of errors.
3. **Restart the Test**: Click the "Reset train" button to start a new typing test.

## Testing

To run the tests, use:

```bash
npm test
