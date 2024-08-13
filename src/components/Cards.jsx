import { Card, Col, Row, Switch } from 'antd';

const Cards = () => {
  return (
    <div className='max-w-[1410px] m-auto flex justify-between mt-5 items-center'>
      <div>
        <Row >
          <Col>
            <Card className='w-[200px] ml-3' title="Locations" bordered={false}>
              Select your city
            </Card>
          </Col>
          <Col>
            <Card className='w-[200px] ml-3' title="Date" bordered={false}>
              Select your date
            </Card>
          </Col>
          <Col span={8}>
            <Card className='w-[200px] ml-3' title="Time" bordered={false}>
              Select your time
            </Card>
          </Col>
        </Row>
      </div>

      <Switch  loading defaultChecked />

      <div>
        <Row >
          <Col>
            <Card className='w-[200px] ml-3' title="Locations" bordered={false}>
              Select your city
            </Card>
          </Col>
          <Col>
            <Card className='w-[200px] ml-3' title="Date" bordered={false}>
              Select your date
            </Card>
          </Col>
          <Col span={8}>
            <Card className='w-[200px] ml-3' title="Time" bordered={false}>
              Select your time
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Cards