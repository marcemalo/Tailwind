import { Layout, Menu, Input} from 'antd';
import { NavLink } from 'react-router-dom';

const { Header } = Layout;
const { Search } = Input;

const navLinks = [
    {
        key: "1",
        label: <NavLink end to="/"><img src="./src/img/Profil & Notification.svg" alt="" /></NavLink>
    },
   
    
]

const Nav = () => {
    const onSearch = () => {

    }
    return (
        <Header className='px-2 bg-slate-200  pt-2'>
           <div className='flex justify-around items-center'>
           <img src="./src/img/Logo.svg" alt="#" />
           <Search placeholder="input search text" className='max-w-[400px]' onSearch={onSearch} enterButton />
            <Menu
                theme="dangerous"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={navLinks}
                className='w-full flex justify-end max-w-[400px] bg-slate-200'
            />
           </div>
        </Header>
    )
}

export default Nav