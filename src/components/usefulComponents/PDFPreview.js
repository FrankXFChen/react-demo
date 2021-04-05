import React from 'react';
import { PDFViewer, Document, Text, Page, View } from '@react-pdf/renderer';
import pdfstyles from "./pdfStyles";

const PDFPreview = ({title})=>{
  return <React.Fragment>
    <PDFViewer className="viewer" style={pdfstyles.viewer}>
    <Document>
      <Page size="A4" style={pdfstyles.page}>
        <View style={pdfstyles.section}>
          <Text style={pdfstyles.title}>{title}</Text>
          <Text>This is a text in a generated PDF file.</Text>
        </View>
      </Page>
    </Document>
  </PDFViewer>
  </React.Fragment>
}

export default PDFPreview;