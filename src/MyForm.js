import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

import { Panel } from 'primereact/panel';
        

export default function MyForm() {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return (
        <div className="card flex justify-content-center">
            <Panel header="Header">
                <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />
            </Panel>
        </div>
    )
}
