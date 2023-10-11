import React from 'react';
import './AddNewModal.scss';


export default function AddNewModal(props) {

    const {slug, columns, setOpen} = props;

    let handleSubmit = (e)=>{
        e.preventDefault();
        // Send item to Backend
        // axios.post(`api/${slug}s`, data)
    }

  return (
    <div className='add-new-modal'>
        <div className="custom-modal">
            <span className="close" onClick={()=>setOpen(false)}><i className="bi bi-x-circle"></i></span>
            <h1>Add New {slug}</h1>
            <form onSubmit={handleSubmit}>
                {columns
                .filter(item=>item.field !== 'id' && item.field !== 'img')
                .map(column =>  (
                    <div className='item' key={column.headerName}>
                        <label>{column.headerName}</label>
                        <input type={column.type} placeholder={column.field} />
                    </div>
                ))}
                <button className='btn btn-success'>Add</button>
            </form>
        </div>
    </div>
  )
}




















// import React from 'react'
// import { Button, Modal } from 'react-bootstrap'
// import { Form, RouterProvider } from 'react-router-dom'
// import { createBrowserRouter } from 'react-router-dom';

// export default function AddNewModal(props) {

//     let { open, setOpen, slug, columns } = props;
//     // const router = createBrowserRouter();

//     const handleClose = () => setOpen(false);
//     // const handleShow = () => setOpen(true);

//     return (
//         <>
//             <Modal show={open} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Add New {slug}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     {/* <RouterProvider router={router}>
//                     <Form>
//                         {columns.map((column) => (<Form.Group className="mb-3" controlId={column}>
//                             <Form.Label>{column}</Form.Label>
//                             <Form.Control
//                                 type="text"
//                             />
//                         </Form.Group>))}
//                     </Form>
//                     </RouterProvider> */}
                    
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Cancel
//                     </Button>
//                     <Button variant="success" onClick={handleClose}>
//                         Add New {slug}
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     )
// }
