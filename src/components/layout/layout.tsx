import { Header } from "./header"

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout:React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
      <Header/>
      <div className='layout-body'> 
        { children }
      </div>
    </div>
  )
}