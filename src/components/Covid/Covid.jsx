import React from 'react';
import { Col, Row } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';


const openNotification = () => {
  notification.open({
    message: 'Government travel restrictions',
    description:
      'With the continuing global impact of COVID-19, non-essential travel may not be allowed or otherwise restricted in different parts of the world. You are therefore strongly encouraged to check any applicable travel restrictions before booking an accommodation (or other travel-related service).',
    icon: (
      <SmileOutlined
        style={{
          color: '#108ee9',
        }}
      />
    ),
  });
};

export default function Covid() {
  return (
    <>
      <Row>
        <Col className='text-center pt-2 pb-2 text-dark bg-info ' span={24}>
              Traveling internationally? Get updated information on COVID-19 travel guidance and restrictions.
          <Button type="primary" onClick={openNotification} className='ms-2'>Learn more</Button></Col>
      </Row>
    </>
  );
}