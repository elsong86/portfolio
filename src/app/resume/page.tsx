'use client';

import React from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">My Resume</h1>
      <div className="flex justify-center">
        <Document file="/resume.pdf">
          <Page pageNumber={1} width={1000} />
        </Document>
      </div>
    </div>
  );
};

export default Resume;
