import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Shop from './Shop.jsx'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { router } from './routes.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider  router={router}>
       <Shop />
    </RouterProvider> 
  </StrictMode>,
)
