
import { Button, FloatButton, Popover } from 'antd';
import { Avatar } from 'antd';

const AvatarLayout = () => (
  <Avatar
    size={{ xs: 24, sm: 32 }}
    style={{backgroundColor: '#202020', color:'#fff'}}
  >U</Avatar>
);

const AvatarUsers = () => {
  
  return (
    <Popover>
      <FloatButton icon = {<AvatarLayout/>}></FloatButton>
    </Popover>
  );
};
export default AvatarUsers;