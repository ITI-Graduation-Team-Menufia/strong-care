import BarChartBox from "../../../components/dashboard/home/barChartBox/BarChartBox";
import BigChartBox from "../../../components/dashboard/home/bigChartBox/BigChartBox";
import ChartBox from "../../../components/dashboard/home/chartBox/ChartBox";
import PieChartBox from "../../../components/dashboard/home/pieCartBox/PieChartBox";
import TopBox from "../../../components/dashboard/home/topBox/TopBox";

import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import "./Home.scss";


export default function Home() {
  return (
    <div className="home">
      {/* <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div> */}
      <h1>Home</h1>    </div>
  )
}
