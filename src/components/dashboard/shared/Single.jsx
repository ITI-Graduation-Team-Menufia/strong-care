// import {
//     Legend,
//     Line,
//     LineChart,
//     ResponsiveContainer,
//     Tooltip,
//     XAxis,
//     YAxis,
// } from "recharts";
import img from '../../../assets/images/logo.png'

import React from 'react';
import './Single.scss';

export default function Single(props) {


    // let { id, img, title, info, activities } = props;


    return (
        // <div className='single'>
        //     <div className="view">
        //         <div className="info">
        //             <div className="topInfo">
        //                 {img && <img src={img} alt="" />}
        //                 <h1>{title}</h1>
        //                 <button>Update</button>
        //             </div>
        //             <div className="details">
        //                 {Object.entries(info).map((item) => (
        //                     <div className="item" key={item[0]}>
        //                         <span className="itemTitle">{item[0]}</span>
        //                         <span className="itemValue">{item[1]}</span>
        //                     </div>
        //                 ))}
        //             </div>
        //         </div>
        //         <hr />
        //         {/* {props.chart && (
        //             <div className="chart">
        //                 <ResponsiveContainer width="100%" height="100%">
        //                     <LineChart
        //                         width={500}
        //                         height={300}
        //                         data={props.chart.data}
        //                         margin={{
        //                             top: 5,
        //                             right: 30,
        //                             left: 20,
        //                             bottom: 5,
        //                         }}
        //                     >
        //                         <XAxis dataKey="name" />
        //                         <YAxis />
        //                         <Tooltip />
        //                         <Legend />
        //                         {props.chart.dataKeys.map((dataKey) => (
        //                             <Line
        //                                 type="monotone"
        //                                 dataKey={dataKey.name}
        //                                 stroke={dataKey.color}
        //                             />
        //                         ))}
        //                     </LineChart>
        //                 </ResponsiveContainer>
        //             </div>
        //         )} */}
        //     </div>
        //     <div className="activities">
        //         <h2>Latest Activities</h2>
        //         {activities && (
        //             <ul>
        //                 {props.activities.map((activity) => (
        //                     <li key={activity.text}>
        //                         <div>
        //                             <p>{activity.text}</p>
        //                             <time>{activity.time}</time>
        //                         </div>
        //                     </li>
        //                 ))}
        //             </ul>
        //         )}
        //     </div>
        // </div>


        <div className='single'>
            <div className="view">
                <div className="info">
                    <div className="topInfo">
                        <img src={img} alt="" />
                        <h1>Main</h1>
                        <button>Update</button>
                    </div>
                    <div className="details">
                            <div className="item" key='1'>
                                <span className="itemTitle">Id</span>
                                <span className="itemValue">22</span>
                            </div>
                            <div className="item" key='1'>
                                <span className="itemTitle">First Name</span>
                                <span className="itemValue">Mahmoud</span>
                            </div>
                            <div className="item" key='1'>
                                <span className="itemTitle">Last Name</span>
                                <span className="itemValue">Refaat</span>
                            </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}
