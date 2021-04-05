import React, { useState , Suspense} from 'react';
const LazyPDFDocument = React.lazy(()=>import('./usefulComponents/PDFPreview'));

const ListPDFViewer = ()=>{
    const [showPDF, setShowPDF] = useState(false);
    const [title, setTitle] = useState('');

    // const handleNameChange = (val)=>{
    //     setTitle(val)
    // }

    return (<div>
        <input type='text'
            placeholder='Enter PDF name'
            value={title}
            onChange={(e) => { setTitle(e.target.value) }} />
        <button onClick={() => { setShowPDF(true) }}>Generate PDF</button>
        {showPDF && (
            <Suspense fallback={<div>Loading...</div>}>
                <LazyPDFDocument title={title} />
            </Suspense>
        )}
    </div>)

}

export default ListPDFViewer;