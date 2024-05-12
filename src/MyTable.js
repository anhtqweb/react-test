
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { Button } from 'primereact/button';


export default function MyTable() {
    const [products, setProducts] = useState([
        {"code": "hello", "name": "world", "category": "bye", "quantity": 4},
        {"code": "bla", "name": "qwer", "category": "sfdg", "quantity": 43},
        {"code": "qewr", "name": "jytj", "category": "123", "quantity": 65},
        {"code": "dfg", "name": "jytj", "category": "zxcv", "quantity": 44},
    ]);

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" 
                // onClick={() => editProduct(rowData)} 
                />
                <Button icon="pi pi-trash" rounded outlined severity="danger" 
                // onClick={() => confirmDeleteProduct(rowData)} 
                />
            </React.Fragment>
        );
    };

    return (
        <div className="card">
            <DataTable value={products} showGridlines tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
                <Column body={actionBodyTemplate}></Column>
            </DataTable>
        </div>
    );
}
        