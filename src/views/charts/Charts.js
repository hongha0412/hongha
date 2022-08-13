import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { DocsCallout } from 'src/components'

const Charts = () => {
  const random = () => Math.round(Math.random() * 100)
  return (
    <CCard className="mb-4">
      <div>
        <table border="1">
          <tr>
            <td>Họ Tên</td>
            <td>Năm Sinh</td>
            <td>Giới Tính</td>
            <td>Số Điện Thoại</td>
          </tr>
          <tr>
            <td>Ngọc Thảo</td>
            <td>2001</td>
            <td>Nữ</td>
            <td>0123456789</td>
          </tr>
          <tr>
            <td>Minh Thư</td>
            <td>2001</td>
            <td>Nữ</td>
            <td>4577521211</td>
          </tr>
          <tr>
            <td>Hồng Hà</td>
            <td>2001</td>
            <td>Nữ</td>
            <td>02354652255</td>
          </tr>
          <tr>
            <td>Hồng Đức</td>
            <td>2001</td>
            <td>Nam</td>
            <td>58545212121</td>
          </tr>
        </table>
      </div>
    </CCard>
  )
}

export default Charts
