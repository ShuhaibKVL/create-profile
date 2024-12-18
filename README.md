
## Profile Creator

A Next.js application for creating user profiles with client-side validation.

## Overview
## Overview
The Profile Creator application allows users to fill out a form to create their profile. It features client-side validation, user-friendly error messages, and a confirmation message upon successful submission. The project is built with Next.js and React.

The project focous on client-side validation.The validation and form done without depending on any libraries.

## Features
- Form validation for fields like Name, Email, Phone, and Password.
-The password validation strictly monitoring.
- User-friendly error messages for invalid inputs.
- Submit button disabled until the form is valid.
- Confirmation message upon successful submission.
- Unit tests for validation logic.



## Installation

#1
Extract the zip file.

#2 Navigate to the project directory

cd profile-creator

#3 Install dependencies
npm install

#4
Start the development server

#5 Open the application in your browser at

http://localhost:3000



## Testing
Unit tests have been implemented for the validation logic by jest and react-Library.

 To run the tests:

1. Run the following command:
   ```bash
   npm test


## Technologies Used
- **Next.js**: Framework for building React applications.
- **React**: Library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Jest**: Testing framework.
- **@testing-library/react**: For testing React components.


## Folder Structure

profile-creator/
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   ├── hooks/        # Custom hooks
│   ├── pages/        # Next.js pages
├── tests/            # Unit tests
├── package.json      # Project dependencies
└── README.md         # Documentation



First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More


npm install @testing-library/react @testing-library/jest-dom @testing-library/user-event --save-dev --legacy-peer-deps

npm install --save-dev ts-jest @types/jest @testing-library/react@^14 @testing-library/react-hooks@^8 --legacy-peer-deps



npm install --save-dev @testing-library/react@14 @testing-library/user-event@14 @testing-library/jest-dom@6 --legacy-peer-deps