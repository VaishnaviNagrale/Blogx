import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthLayout} from './components/index.js'

import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage.jsx'
import AddPostPage from "./pages/AddPostPage.jsx";
import EditPostPage from "./pages/EditPostPage.jsx";
import PostPage from "./pages/PostPage.jsx";
import AllPostsPage from "./pages/AllPostsPage.jsx";
import SignupPage from './pages/SignupPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <LoginPage />
                </AuthLayout>
            ),
        },
        {
          path: "/signup",
          element: (
            <AuthLayout authentication={false}>
              <SignupPage />
            </AuthLayout>
          ),
        },        
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPostsPage />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPostPage />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPostPage />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <PostPage />,
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)