import logo from './logo.svg';
import './App.css';
import MyTable from './MyTable';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { Button } from 'primereact/button';
        
        
const items = [
  {
      label: 'Home',
      icon: 'pi pi-home'
  },
  {
      label: 'Features',
      icon: 'pi pi-star'
  },
  {
      label: 'Projects',
      icon: 'pi pi-search',
      items: [
          {
              label: 'Components',
              icon: 'pi pi-bolt'
          },
          {
              label: 'Blocks',
              icon: 'pi pi-server'
          },
          {
              label: 'UI Kit',
              icon: 'pi pi-pencil'
          },
          {
              label: 'Templates',
              icon: 'pi pi-palette',
              items: [
                  {
                      label: 'Apollo',
                      icon: 'pi pi-palette'
                  },
                  {
                      label: 'Ultima',
                      icon: 'pi pi-palette'
                  }
              ]
          }
      ]
  },
  {
      label: 'Contact',
      icon: 'pi pi-envelope'
  }
];

function App() {
  return (
    <div>
      <Button label="Thêm" />
      {/* <Menubar model={items} /> */}
      <MyTable></MyTable>
    </div>
    
  );
}

export default App;
