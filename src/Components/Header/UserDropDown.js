import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const UserDropDown = ({ user, logOutBTN }) => {
    let buttonCss = "px-5 py-2 border-2 border-black rounded"
    const items = [
        {
            label: <a href="#">Cập nhật tài khoản</a>,
            key: '0',
        },
        {
            type: 'divider',
        },
        {
            label:  <button onClick={logOutBTN}>Đăng xuất</button>,
            key: '3',
        },
    ];
    return (

        <Dropdown
            menu={{
                items,
            }}
            trigger={['click']}
        >
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    {user.hoTen}
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    )
};
export default UserDropDown;