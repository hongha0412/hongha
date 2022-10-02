import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CRow,
  CDropdownItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import {
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifUs,
  cilLibraryAdd,
  cilPenAlt,
  cilPeople,
  cilTrash,
  cilUser,
  cilCommentSquare,
} from '@coreui/icons';
import { DocsExample } from 'src/components'
import './showusers.css';
//import Example from './Example'
const Modals = () => {

  return (
    <CRow>  
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <CRow>
              <CCol>
                <CIcon icon={cilPeople} />
                <strong>Thông tin thành viên nhóm</strong>
              </CCol>
              <CCol></CCol>
              <CCol>
                <div className="input-group">
                  <div>
                    <CButton className="sua">
                      <CDropdownItem href="http://localhost:3000/#/notifications/alerts">
                        <CIcon icon={cilLibraryAdd} />
                      </CDropdownItem>
                    </CButton>
                  </div>
                  &nbsp; &nbsp;
                  <input type="text" className="search" placeholder="Search item name" />
                  &nbsp; &nbsp;
                  <div className="clear">
                  <span>
                    <CButton 
                      className="xoa" 
                    >
                      Tìm
                    </CButton>
                  </span>
                  </div>
                </div>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            <table className="table">
              <thead>
                <tr className="head">
                  <td>
                    <p>Họ và tên</p>
                  </td>
                  <td>
                    <p>Giới tính</p>
                  </td>
                  <td>
                    <p>Email</p>
                  </td>
                  <td>
                    <p>Địa chỉ</p>
                  </td>
                  <td>
                    <p>Khác</p>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>Lê Thị Hồng Hà</p>
                  </td>
                  <td>
                    <p>Nữ</p>
                  </td>
                  <td>lthongha0412@gmail.com</td>
                  <td>Đăk Lăk</td>
                  <td>
                    <CButton className="xoa"><CIcon icon={cilPenAlt} /></CButton>
                    <CButton className="xoa"><CIcon icon={cilTrash} /></CButton>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Nguyễn Thị Ngọc Thảo</p>
                  </td>
                  <td>
                    <p>Nữ</p>
                  </td>
                  <td>nguyenthingocthao@gmail.com</td>
                  <td>
                    Bến tre
                  </td>
                  <td>
                  <CButton className="xoa"><CIcon icon={cilPenAlt} /></CButton>
                    <CButton className="xoa"><CIcon icon={cilTrash} /></CButton>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Phạm Hồng Đức</p>
                  </td>
                  <td>
                    <p>Nam</p>
                  </td>
                  <td>phamhongduc123@gmail.com</td>
                  <td>TP Hồ Chí Minh</td>
                  <td>
                  <CButton className="xoa"><CIcon icon={cilPenAlt} /></CButton>
                    <CButton className="xoa"><CIcon icon={cilTrash} /></CButton>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Phạm Thị Anh Thư</p>
                  </td>
                  <td>
                    <p>Nữ</p>
                  </td>
                  <td>anhthup111@gmail.com</td>
                  <td>Bình Dương</td>
                  <td>
                  <CButton className="xoa"><CIcon icon={cilPenAlt} /></CButton>
                    <CButton className="xoa"><CIcon icon={cilTrash} /></CButton>
                  </td>
                </tr>
              </tbody>
            </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Modals
