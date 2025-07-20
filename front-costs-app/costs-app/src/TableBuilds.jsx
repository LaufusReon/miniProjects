
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue} from "@heroui/table";

const rawData = [
  {
    key: "1",
    nombre: "Harina",
    unidad: 'kg',
    precioUnitario: 30,
    stockActual: 170,
    estado: 'Normal'
  },
  {
    key: "2",
    nombre: "Maicena",
    unidad: 'kg',
    precioUnitario: 20,
    stockActual: 100,
    estado: 'Normal'
  }
];

let tablesHeaders = {
    rawMaterial: [
      {
        key: 'nombre',
        label: 'Nombre'
      },
      {
        key: 'unidad',
        label: 'Unidad'
      },
      {
        key: 'precioUnitario',
        label: 'Precio Unitario'
      },
      {
        key: 'stockActual',
        label: 'Stock Actual'
      },
      {
        key: 'estado',
        label: 'Estado'
      }  
    ],
    orders: {
        list: []
    },
    employeesTab: {
        id: 0
    },
    indirectCosts: {
        id: 0
    }
};

console.log(tablesHeaders.rawMaterial)

function RawMaterialTable() {
  return (
    <Table aria-label="Example table with dynamic content"  color="primary">
      <TableHeader columns={tablesHeaders.rawMaterial}>
        {(colName)=> <TableColumn key={colName.key}>{colName.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rawData}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    
  )
};

function EmployeesTableInfo() {
  return (
    <div>EmployeesTableInfo</div>
  )
}

function IndirectCostsTable() {
  return (
    <div>IndirectCostsTable
    
    </div>
  )
}

function Tables() {
    return(
    <div>
        <RawMaterialTable/>
        <EmployeesTableInfo/>
        <IndirectCostsTable/>
    </div>
    )
}

export default Tables