import { Avatar, Card, Button } from 'antd';
const { Meta } = Card;
import joki from '../img/car.svg'
import jokii from '../img/car.png'


const BigCard = () => {
  return (
   <div className='max-w-[1400px] m-auto flex flex-wrap justify-between mt-6'>
    <div className='mt-6'>
    <Card className='border-[4px]'
    style={{
      width: 300,
    }}
    cover={
      <img className='p-10'
        alt="example"
        src={joki}
      />
    }
    actions={[
        <Button type="primary">Rent Now</Button>
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title="Koenigsegg"
      description="$99.00/ day"
    />
  </Card>
    </div>

    <div className='mt-6'>
    <Card className='border-[4px]'
    style={{
      width: 300,
    }}
    cover={
      <img className='p-10'
        alt="example"
        src={joki}
      />
    }
    actions={[
        <Button type="primary">Rent Now</Button>
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title="Nissan GT - R"
      description="$99.00/ day"
    />
  </Card>
    </div>

    <div className='mt-6'>
    <Card className='border-[4px]'
    style={{
      width: 300,
    }}
    cover={
      <img className='p-10'
        alt="example"
        src={jokii}
      />
    }
    actions={[
        <Button type="primary">Rent Now</Button>
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title="Rolls - Royce"
      description="$99.00/ day"
    />
  </Card>
    </div>

    <div className='mt-6'>
    <Card className='border-[4px]'
    style={{
      width: 300,
    }}
    cover={
      <img className='p-10'
        alt="example"
        src={jokii}
      />
    }
    actions={[
        <Button type="primary">Rent Now</Button>
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title="Nissan GT - R"
      description="$99.00/ day"
    />
  </Card>
    </div>




    <div className='mt-6'>
    <Card className='border-[4px]'
    style={{
      width: 300,
    }}
    cover={
      <img className='p-10'
        alt="example"
        src={joki}
      />
    }
    actions={[
        <Button type="primary">Rent Now</Button>
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title="All New Rush"
      description="$99.00/ day"
    />
  </Card>
    </div>

    <div className='mt-6'>
    <Card className='border-[4px]'
    style={{
      width: 300,
    }}
    cover={
      <img className='p-10'
        alt="example"
        src={jokii}
      />
    }
    actions={[
        <Button type="primary">Rent Now</Button>
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title="CR  - V"
      description="$99.00/ day"
    />
  </Card>
    </div>

    <div className='mt-6'>
    <Card className='border-[4px]'
    style={{
      width: 300,
    }}
    cover={
      <img className='p-10'
        alt="example"
        src={joki}
      />
    }
    actions={[
        <Button type="primary">Rent Now</Button>
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title="All New Terios"
      description="$99.00/ day"
    />
  </Card>
    </div>

    <div className='mt-6'>
    <Card className='border-[4px]'
    style={{
      width: 300,
    }}
    cover={
      <img className='p-10'
        alt="example"
        src={jokii}
      />
    }
    actions={[
        <Button type="primary">Rent Now</Button>
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title="CR  - V"
      description="$99.00/ day"
    />
  </Card>
    </div>
   </div>
  )
}

export default BigCard