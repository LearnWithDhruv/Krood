
# Item List Manager

A simple React application that allows users to manage a list of items. Users can add items to the list through an input field, and the application dynamically updates the list.

## Features
- Add items to the list via an input field.
- Automatically clears the input field after adding an item.
- Handles empty input gracefully (does not add empty items to the list).
- Displays all added items in an unordered list.

## Requirements
- Node.js (https://nodejs.org/)
- npm (comes with Node.js)

## Installation and Usage
1. Clone this repository or download the files.
2. Open a terminal and navigate to the project folder.
3. Run the following commands:
   ```bash
   npm install
   npm start
   ```
4. The application will run on `http://localhost:3000` in your browser.

## Folder Structure
```
item-list-manager/
├── public/
├── src/
│   ├── App.css
│   ├── App.js
│   ├── index.js
├── package.json
```

## How to Use
1. Start the application using `npm start`.
2. Enter an item in the input field.
3. Click the "Add Item" button to add it to the list.
4. The item will be displayed in the list, and the input field will be cleared.
5. If the input field is empty, clicking the button does nothing.

## Sample Interaction
- **Initial State**:
  - The list is empty.
  - The input field is empty.
- **User Action 1**:
  - The user types "First Item" in the input field and clicks "Add Item".
  - The list displays: `First Item`.
- **User Action 2**:
  - The user types "Second Item" in the input field and clicks "Add Item".
  - The list displays:
    - `First Item`
    - `Second Item`

## Styling
Custom styling is provided in `App.css`. Feel free to modify it to suit your preferences.

## Future Enhancements
- Add a feature to remove items from the list.
- Persist the list using `localStorage`.
- Display the total count of items in the list.

## License
This project is licensed under the MIT License.
