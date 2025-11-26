import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { UnderConstructionPage } from '../Pages/UnderConstruction/UnderConstructionPage'

import '../Shared/Styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UnderConstructionPage/>
  </StrictMode>,
)
