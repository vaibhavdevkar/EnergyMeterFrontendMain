import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";
import TopCards from "../components/dashboard/TopCards";

import axios from "axios";
import { useState, useEffect } from "react";

const Starter = () => {

  // const [data, setData] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("https://mqtt-backend-api.onrender.com/api/data");
  //       setData(response.data);  
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();

  //   const intervalId = setInterval(() => {
  //     fetchData();
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, []);


  const [energy , setEnergy] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      try{
        const getdata = await axios.get("http://localhost:4000/modbus-data")
        setEnergy(getdata.data)
      //  console.log(getdata.data)
      }catch(err){
        console.log(err)
      }
    }

    fetchData()

    const intervalId = setInterval(() => {
          fetchData();
        }, 10000);
    
        return () => clearInterval(intervalId);
  },[])

  // console.log(energy[1])


  return (
    <div>
      {/***Top Cards***/}
      <Row>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-success text-success"
            title="Profit"
            subtitle="Frequency"
            earning={energy.Frequency}
            icon="bi bi-wallet"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Refunds"
            subtitle="Phase Voltage 1 "
            earning={energy.PhaseVoltage1}
            // earning={data.DisTr + "°"}
            icon="bi bi-thermometer-high"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="New Project"
            subtitle="Phase Voltage 2 "
            earning={energy.PhaseVoltage2}
            // earning={parseInt(data.CumUnload / 60 + data.CumLoad / 60) + " Hr"}
            icon="bi bi-hourglass"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-info text-info"
            title="Sales"
            subtitle="Phase Voltage 3"
            earning={energy.PhaseVoltage3}
            // earning={parseInt(data.CumLoad / 60) + " Hr"}
            icon="bi bi-hourglass"

          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Sales"
            subtitle="Average phase Voltage "
            earning={energy.AveragePhaseVoltage}
            // earning={parseInt(data.CumUnload / 60) + " Hr"}
            icon="bi bi-lightning"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-primary text-primary"
            title="Sales"
            subtitle="Line Voltage V12"
            earning={energy.LineVoltageV12}
            // earning={data.RemAFCT + " Hr"}
            icon="bi bi-hourglass"
          
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-black"
            title="Sales"
            subtitle="Line Voltage V23"
            earning={energy.LineVoltageV23}
            // earning={data.RemOFCT + " Hr"}
            icon="bi bi-hourglass"
            // color={data.RemOFCT < 100 ? "text-danger" : "text-black"}
            
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-info text-info"
            title="Sales"
            subtitle="Line Voltage V31"
            earning={energy.LineVoltageV31}
            // earning={data.RemOSCT + " Hr"}
            icon="bi bi-hourglass"
            
          />
        </Col>
        {/* <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="Sales"
            subtitle="Oil Change Time"
            earning={energy[8]}
           earning={data.RemOCT + " Hr"}
            icon="bi bi-hourglass"
          />
        </Col> */}
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-info text-info"
            title="Sales"
            subtitle="Average Line Voltage "
            earning={energy.AverageLineVoltage}
            // earning={data.RemRGT + " Hr"}
            icon="bi bi-hourglass"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Sales"
            subtitle="Current A1"
            earning={energy.CurrentA1}
            // earning={data.PowerVFD / 100 + " KW"}
            icon="bi bi-power"
          />
        </Col>
        {/* <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-info text-info"
            title="Sales"
            subtitle="VoltageVFD"
             earning={data.VoltageVFD / 10}
            icon="bi bi-bag"
          />
        </Col> */}
        {/* <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Sales"
            subtitle="CurrentVFD"
             earning={(data.CurrentVFD / 100).toFixed(1) + " Amp"}
            icon="bi bi-lightning"
          />
        </Col> */}
        
      </Row>
      {/***Sales & Feed***/}
      {/* <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          <SalesChart />
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds />
        </Col>
      </Row> */}
      {/***Table ***/}
      <Row>
        <Col lg="12">
          {/* <ProjectTables /> */}
        </Col>
      </Row>
      {/***Blog Cards***/}
      {/* <Row>
        <CardTitle tag="h2" className="mb-4">Air Alert Features</CardTitle>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row> */}
    </div>
  );
};

export default Starter;
