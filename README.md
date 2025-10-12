# Secure Share

**Secure Share** is a file-sharing application built with Next.js 14, providing a secure and easy way to share files with password authentication. It integrates Clerk for user authentication and Firebase for storage.

---

## Features

- **Password Protected Sharing**: Share files securely with a password.
- **User Authentication**: Clerk integration ensures secure login and authentication.
- **Easy File Upload and Share**: Simple user interface for uploading and sharing files.
- **Real-Time Storage**: Firebase ensures fast and reliable file storage.
- **Responsive UI**: Designed with Tailwind CSS for a smooth, responsive experience on all devices.
---

## Technologies Used

- **Next.js 14**: Framework for server-side rendering and static site generation.
- **Clerk**: Secure user authentication and management.
- **Firebase**: Backend for file storage.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Email**: For email-related components.
- **Axios**: For making HTTP requests.
- **Resend**: For email sending capabilities.

---

## Installation

### 1. Clone the repository:

```
git clone https://github.com/yourusername/Secure-Share.git
cd secure-share
```

### 2. Install dependencies:
```
npm install
```
### 3. Configure Firebase and Clerk:
Set up Firebase and Clerk by creating .env.local in the root directory of the project and add your credentials:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-firebase-project-id
NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-frontend-api
NEXT_PUBLIC_CLERK_API_KEY=your-clerk-api-key
```
### 4. Run the application locally:
```
npm run dev
Visit http://localhost:3000 to view the app.
```
Deployment
The application is deployed and accessible here: https://secure-share-one.vercel.app/

---

### 🙋 Author

**Rakesh Das**  

🔗 [GitHub: @RakeshDas18](https://github.com/RakeshDas18)  
🔗 [LeetCode: @RakeshDas18](https://leetcode.com/RakeshDas18)  
🔗 [X (Twitter): @RakeshDas_18](https://twitter.com/RakeshDas_18)

Contributing
If you'd like to contribute to the project, feel free to fork the repository and submit a pull request. We welcome contributions, suggestions, and improvements!
