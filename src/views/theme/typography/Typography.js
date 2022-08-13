import React from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CFormLabel,
  CFormTextarea,
  CFormInput,
  CButton,
} from '@coreui/react'
//import { DocsLink } from 'src/components'
const Typography = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <div>
            <span>Tên</span>
            <div className="mb-3">
              <CFormTextarea id="exampleFormControlTextarea1" rows="1"></CFormTextarea>
            </div>
            <span>Loại</span>
            <div className="mb-3">
              <CFormTextarea id="exampleFormControlTextarea1" rows="1"></CFormTextarea>
            </div>
            <span>Số Lượng</span>
            <div className="mb-3">
              <CFormTextarea id="exampleFormControlTextarea1" rows="1"></CFormTextarea>
            </div>
          </div>
          <div className="col-auto">
            <CButton type="submit" className="mb-3">
              Tạo
            </CButton>
          </div>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Typography
