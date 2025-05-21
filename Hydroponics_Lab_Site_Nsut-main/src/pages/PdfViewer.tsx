import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PdfViewer() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', justifyContent: 'center', background: '#f5f5f5' }}>
      <h2 style={{ marginBottom: 20 }}>PDF Viewer Demo</h2>
      <div style={{ border: '1px solid #ccc', background: '#fff', padding: 16 }}>
        <Document
          file="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <div style={{ marginTop: 10 }}>
          <button onClick={() => setPageNumber(p => Math.max(1, p - 1))} disabled={pageNumber <= 1}>Previous</button>
          <span style={{ margin: '0 10px' }}>Page {pageNumber} of {numPages}</span>
          <button onClick={() => setPageNumber(p => Math.min(numPages || 1, p + 1))} disabled={pageNumber >= (numPages || 1)}>Next</button>
        </div>
      </div>
    </div>
  );
} 