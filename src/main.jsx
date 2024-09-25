import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Components/Root/Root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage/ErrorPage';
import HomePage from './Components/HomePage/HomePage';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import JobDetails from './Components/JobDetails/JobDetails';
import Chart from './Components/Rechart/Chart';



const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/listed',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/job_details/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/page_to_read',
        element: <Chart></Chart>,
        loader: () => fetch('/books.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
