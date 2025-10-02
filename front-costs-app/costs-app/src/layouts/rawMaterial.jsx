import { useState } from "react";
import { Radio, Input, Form, Space, Button, Select, InputNumber} from "antd"


const productStatus = [
  {
    label: 'Bueno',
    value: 'Muy Bueno'
  },
  {
    label: 'Pasable',
    value: 'Medio'
  },
  {
    label: 'Pésimo',
    value: 'Malo'
  }
];

/*const optionsUnities = [
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
];*/

const materialList = [
  {
    label: 'Directo',
    value: 'Directo'
  },
  {
    label: 'Indirecto',
    value: 'Indirecto'
  }
]

function RawMaterialInput() {

const [componentSize, setComponentSize] = useState('default');
const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
};

const dataToSend = async (values) => {
  console.log(values, " correct update")
  try{
    const response = fetch( "http://localhost:4000/api/usuarios",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });

    const {content} = await response.json();
    console.log("the response is data ", content)
    if (!response.ok) throw new Error("Error en la solicitud");

  } catch (err){
    console.error("Have ocurred an error: ", err);
  } finally{
    console.log("The function has ended");
  };
}
  
  return (
    <Form
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        onFinish={dataToSend}
        style={{maxWidth:'60%', padding:'1rem', margin:'auto'}}
    >
        <h3>Formulario para el ingreso de Materiales</h3>
        <Form.Item label='Tipo de Material' name="materialType"
          rules={[{required:true,message:'Debe seleccionar uno'}]}>
          <Radio.Group 
            style={{zIndex:'-10'}}
            block options={materialList} 
            optionType="button" 
            buttonStyle="solid"/>
        </Form.Item>
        <Form.Item label = 'Código del Item' name="itemCode" >
          <Select 
                  options={productStatus}
                  optionFilterProp="value"
                  optionLabelProp="value"
                  optionRender="value"
                  />
        </Form.Item>
        <Form.Item label = 'Nombre del Item' name="itemName">
            <Input placeholder="Ingresa un nombre"/>
        </Form.Item>
        {/*<Form.Item label = 'Unidad de Medida' name="unitySelect">
            <Space>
            <Select showSearch
              onSelect={optionsUnities.value}
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
        </Form.Item>*/}
        <Form.Item label ='Cantidad' name="quantity">
            <InputNumber addonAfter = 'Bs' step = {0.1} defaultValue={1}/>
        </Form.Item>
        <Form.Item label='Datos del Proveedor' name="supplierData">
            <Space direction="vertical" style={{display:"flex"}}>
              <Input placeholder="Ingresa el nombre"/>
              <InputNumber placeholder="Ingresa el NIT" maxLength ={10}/>
            </Space>
        </Form.Item>
        <Form.Item label='Condiciones del Producto' name="productStatus">
              <Radio.Group 
            style={{zIndex:'-10'}}
            block options={productStatus} 
            optionType="button" 
            buttonStyle="solid"/>
        </Form.Item>
        <Form.Item label='Observaciones' name="feedback">
              <Input placeholder="Anote las observaciones de los materiales"/>
        </Form.Item>
        <Form.Item label='Documentos y/o Comprobantes' name="documents">

        </Form.Item>
        <Form.Item>
            <Space wrap>
                <Space.Compact>
                  <Button style={{width: '50%', margin: '0 1rem'}} variant="solid" htmlType="submit" buttonStyle="solid">Añadir</Button>
                  <Button style={{width: '50%', margin: '0 1rem'}} variant="solid" buttonStyle="solid">Limpiar</Button>
                </Space.Compact>
            </Space>    
        </Form.Item>
    </Form>
  )
}

export default RawMaterialInput