import { useState } from 'react'
import {
  Button,
  Form,
  Input,
  Space
} from 'antd';
const LoginForm = () => {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <Form
      layout="vertical"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size='default'
      style={{ maxWidth: 400, backgroundColor: '#ede9e7ff' , margin:'auto' , padding:'2rem'}}
    >
      <Form.Item label="Nombre de Usuario" name='username' 
      rules={[{ required: true, message: 'Por favor complete su nombre de ususario' }]}>
        <Input placeholder='Ingrese un nombre'/>
      </Form.Item>
      <Form.Item label = 'Email' name = 'email' 
      rules = {[{required:true, message: 'Introudzca un correo valido'}, {type: 'email', warningOnly: true}]}>
        <Input placeholder='Un email'/>
      </Form.Item>
      <Form.Item label = 'Contraseña' name = 'password' 
      rules = {[{required:true, message: 'Introudzca una contraseña válida'}, {type: 'password', warningOnly: true}, {max:10, message:'Excede los 10 caracteres'}]}>
        <Input.Password placeholder='Maximo 10 caracteres' count={{
          show: true,
          max: 10,
        }}/>
      </Form.Item>
      <Form.Item label="Número de Teléfono">
        <Space>
            <Space.Compact>
                <Input style={{ width: '20%' }} defaultValue="+591" />
                <Input style={{ width: '80%' }} placeholder='Tu numero'/>
            </Space.Compact>
        </Space>
      </Form.Item>
      <Form.Item>
        <Button color='#1c2755' variant='solid' htmlType='submit' block>Subir</Button>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;