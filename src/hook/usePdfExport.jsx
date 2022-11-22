
import { useContext } from 'react'
import PdfExportContext from '../context/PdfExportProvider'

const usePdfExport = () => {
  return useContext(PdfExportContext)
}

export default usePdfExport 