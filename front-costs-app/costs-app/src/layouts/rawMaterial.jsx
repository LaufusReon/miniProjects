import { useState } from "react";
import { Table, Input, Form, Space, Button, Select, Checkbox, InputNumber } from "antd"
import FormItem from "antd/es/form/FormItem"

const optionsUnities = [
  {
    title: 'Sistema Internacional',
    label: <span>SI</span>,
    options: [
      {value: 'kg', label:<span>kg</span>},
      {value: 'cg', label:<span>cg</span>},
      {value: 'mg', label:<span>mg</span>}
    ]
  },
  {
    value: 2,
    label: 'dede'
  },
  {
    value: 3,
    label: 'cle'
  }
];


function RawMaterialInput() {

const [componentSize, setComponentSize] = useState('default');
const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
};

  
  return (
    <Form
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        style={{maxWidth:'60%', padding:'1rem', margin:'auto'}}
    >
        <h3>Materia Prima</h3>
        <Form.Item label = 'Código del Item'>
          
        </Form.Item>
        <Form.Item label = 'Nombre del Item'>
            <Input placeholder="Ingresa un nombre"/>
        </Form.Item>
        <Form.Item label = 'Unidad de Medida'>
            <Space>
            <Select showSearch
              placeholder = 'Unidad de Medida'
              options={optionsUnities}
              filterOption={(input, option) => {
                let searched;
                return (
                  (searched = option === null || option === void 0 ? void 0 : option.label)
                   !== null && searched !== void 0 ? searched : ''
                )
                  .toLowerCase()
                  .includes(input.toLowerCase());
              }}
            />
          </Space>
        </Form.Item>
        <Form.Item label = 'Cantidad'>
            <InputNumber addonAfter = 'Bs' step = {0.1} defaultValue={1}/>
        </Form.Item>
        <Form.Item>
            <Space wrap>
                <Space.Compact>
                  <Button style={{width: '50%', margin: '0 1rem'}} variant="solid" htmlType="submit">Añadir</Button>
                  <Button style={{width: '50%', margin: '0 1rem'}} variant="solid">Limpiar</Button>
                </Space.Compact>
            </Space>    
        </Form.Item>
    </Form>
  )
}

export default RawMaterialInput