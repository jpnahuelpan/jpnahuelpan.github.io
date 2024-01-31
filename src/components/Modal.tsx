import { useEffect, useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import { IconXboxX } from '@tabler/icons-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

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
        <Document file={pdf} className={"border border-solid"}>
          <Page pageNumber={1} width={widthPdf}/>
        </Document>
      </div>
    </div>
  );
}