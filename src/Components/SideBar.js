import { Sidebar, setVisibleCustomToolbar, visibleCustomToolbar , Button} from 'primereact/sidebar';
import React from 'react';

<Sidebar visible={visibleCustomToolbar} onHide={() => setVisibleCustomToolbar(false)} icons={() => (
    <React.Fragment>
        <button className="p-sidebar-close p-link">
            <span className="p-sidebar-close-icon pi pi-print"/>
        </button>
        <button className="p-sidebar-close p-link">
            <span className="p-sidebar-close-icon pi pi-arrow-right"/>
        </button>
    </React.Fragment>
)}>
    <h1 style={{fontWeight:'normal'}}>Sidebar with custom icons</h1>
    <Button type="button" onClick={(e) => setVisibleCustomToolbar(false)} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
    <Button type="button" onClick={(e) => setVisibleCustomToolbar(false)} label="Cancel" className="p-button-secondary"/>
</Sidebar>