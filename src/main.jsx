import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import './index.css';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <QueryClientProvider client={queryClient}>
   <div>
   <RouterProvider router={router} />
   </div>
   </QueryClientProvider>
   
  </React.StrictMode>,
)