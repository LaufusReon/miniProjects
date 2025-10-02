import { Card } from "antd" 

const Home = () => {
    return (
      <div>
         <div className="scene1">


         </div>
         <div className="scene2">
            <Card title="El sistema de costos CQC" variant="borderless" style={{gap:'2rem', margin:'1rem 2rem', width:'100%', backgroundColor:'#2e2e2e'}}>
                <Card.Grid gridStyle = {{width:'50%', textAlign:'center'}}>
                    <p>El sistema de costos CQC es una herramienta de software de gestión de los Costos de Producción
                        diseñado para PyMEs.</p>
                </Card.Grid>
                <Card.Grid gridStyle = {{width:'50%'}} style={{backgroundColor:"#000", color:'#fff'}}>Img will be placed here</Card.Grid>
            </Card>
         </div>
         <div className="scene3">


         </div>
         <div className="scene4">


         </div>
         <div className="scene5">


         </div>
         <div className="scene6">


         </div>
      </div>
    )
}

export default Home


