
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function MyTable() {
    const [products, setProducts] = useState([
        {"code": "hello", "name": "world", "category": "bye", "quantity": 4},
        {"code": "bla", "name": "qwer", "category": "sfdg", "quantity": 43},
        {"code": "qewr", "name": "jytj", "category": "123", "quantity": 65},
        {"code": "dfg", "name": "jytj", "category": "zxcv", "quantity": 44},
    ]);

    return (
        <div className="card">
            <DataTable value={products} showGridlines tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        