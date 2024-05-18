import { useEffect, useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import { IconXboxX, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import type { PDFDocumentProxy } from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

interface Props {
  pdf: string
  isOpen: boolean
  closeModal: () => void
}

export default function Modal({ pdf, isOpen, closeModal }: Props) {
  const [widthPdf, setWithPdf] = useState<number>(620);
  const [inPage, setInPage] = useState<number>(1);
  const [numPages, setNumPages] = useState<number>(1);

  
  function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }
  function updateInPage(page: number): void {
    if (page >= 1 && page <= numPages){
      setInPage(page);
    }
  }
  function handleResize() {
    let width = window.innerWidth;
    if (width <= 640){
      setWithPdf(width - 40);
    } else {
      setWithPdf(600);
    }
  }
  useEffect(()=> {
    window.addEventListener('resize', handleResize);
  })
  if (!isOpen) return null;

  return (
    <div id="pdfModal" className="fixed top-0 left-0 w-full h-full bg-stone-600 bg-opacity-50">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5">
        <span className="absolute top-1 right-1 cursor-pointer text-gray-500 hover:text-black" onClick={closeModal} title="Close">
          <IconXboxX size={16} stroke={3}/>
        </span>
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} className={"group/parent border border-solid"}>
          <Page pageNumber={inPage} key={1} width={widthPdf} className={"pointer-events-none"}/>
          <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 flex justify-between items-center w-36 shadow-stone-300 shadow-md rounded-lg transition duration-500 opacity-0 group-hover/parent:opacity-100">
            <button className="hover:text-black" type="button" onClick={() => updateInPage(inPage - 1)}><IconChevronLeft size={18} stroke={4}/></button>
            <span>{inPage} of {numPages}</span>
            <button className="hover:text-black" type="button" onClick={() => updateInPage(inPage + 1)}><IconChevronRight size={18} stroke={4}/></button>
          </div>
        </Document>
      </div>
    </div>
  );
}