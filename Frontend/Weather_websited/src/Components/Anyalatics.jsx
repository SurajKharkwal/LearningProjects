import React, { useEffect, useState } from 'react'
import { Area, AreaChart, Tooltip, XAxis, BarChart, Bar , Legend,  } from 'recharts';





const Anyalatics = (props) => {
  
    const [data, setData] = useState({});
    const [isloading, setIsloading] = useState(true);
    const city = props.locate

    



  useEffect(() => {
    
    getData() 

  }, [city])
  
    

  async function getData () {

    if (city != '') {
          
          let apiKey ; // genrate your own                // naughty ho raha hai 
          const response = await fetch (`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}`);
          const query = await response.json();
          setData(query);
          setIsloading(false);


    }


  }
    if(isloading) {
       return(
        <div className='text-red text-center text-3xl'>Soryy Some error occured while fetching the data
        </div>
       )
    }
    else {
      const address    = data.resolvedAddress;
      const temprature = data.days[0].temp;
      const conditions = data.days[0].conditions;
      const precipitation = data.days[0].precipprob;
      const humidity   = data.days[0].humidity;
      const windspeed  = data.days[0].windspeed;
      const date = data.days[0].datetime;
      const Sunrise = data.days[0].sunrise;
      const Sunset = data.days[0].sunset;
      const newarr = [];
      const status = data.description;

      
      let minTemp;
      let maxTemp;
      let tabledate;
      
      const areaGraphData = [];
      const barGraphData = [];
      const tempData = ()=> {
        
        
        for (let index = 0; index < data.days[0].hours.length; index++) {

          areaGraphData.push({
            Time : data.days[0].hours[index].datetime.substr(0,5),
            
            Temp : data.days[0].hours[index].temp,

          });
        }        
        for (let index = 1; index < data.days.length; index++) {

          barGraphData.push({
            maxTemprature : data.days[index].tempmax,
            
            minTemprature : data.days[index].tempmin,

          });
        }
        
      }
      
      tempData()


      for (let index = 1; index < 6; index++) {
        maxTemp = data.days[index].tempmax;
        minTemp = data.days[index].tempmin;
        tabledate = data.days[index].datetime
        let arr = [];
        arr.push(maxTemp);
        arr.push(tabledate);
        arr.push(minTemp);

        newarr.push(arr)
      }


  return (
    <div id='anyalatics' className='overflow-hidden flex p-[4vw] justify-center items-center space-x-[1vw] ' >
      <section className="main border-2 rounded-lg p-[3vw] shadow-md shadow-white ">
        <p className='font-extralight' >Current Locations</p>
        <h3>{address}</h3>

        <div className='bg-[url("./images/rainy.jpg")] w-[25vw] h-[15vw] rounded-xl bg-cover bg-no-repeat bg-center ' >
          <div className='w-full h-full bg-gray-900/50 flex space-x-[5vw] p-[2vw] '>
            <h1>{temprature} C</h1>
            <div>
              <h2>{date}</h2>
              <p>{conditions}</p>
            </div>
          </div>
        </div>

        <div className="cards flex flex-col justify-start items-start ">
          <br />
          <h1>{status}</h1>
          <div className='flex justify-start items-center min-w-full ' >
              <div className='flex flex-col justify-center items-center border-2 p-[2vw] rounded-lg shadow-lg shadow-white m-[2vw] hover:scale-105 '>
              <h2>Precipitation</h2>
              <p>{precipitation}</p>
            </div>
            <div className='flex flex-col justify-center items-center border-2 p-[2vw] rounded-lg shadow-lg shadow-white m-[2vw] hover:scale-105 '>
              <h2>Humidity</h2>
              <p>{humidity}</p>
            </div>
            <div className='flex flex-col justify-center items-center border-2 p-[2vw] rounded-lg shadow-lg shadow-white m-[2vw] hover:scale-105 '>
              <h2>Wind</h2>
              <p>{windspeed}Km/h</p>
            </div>
            <div className='flex flex-col justify-center items-center border-2 p-[0.5vw] rounded-lg shadow-lg shadow-white m-[2vw] hover:scale-105 '>
              <h2>Sunrise & Sunset</h2>
              <p>{Sunrise}</p>
              <p>{Sunset}</p>
            </div> 
          </div>

          <div className="graphs flex text-black">
            <AreaChart width={730} height={200} data={areaGraphData}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="Time" />
              <Tooltip />
              <Area type="monotone" dataKey="Temp" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
          </div>
        </div>
      </section>

      <section className="side border-2 flex flex-col justify-center items-center rounded-lg h-[92vh] shadow-md shadow-white p-[4vw] ">
        <div className="graph overflow-hidden ">
        <BarChart width={350} height={300} data={barGraphData}>
          <XAxis dataKey=" " />
          <Tooltip />
          <Legend />
          <Bar dataKey="maxTemprature" fill="#8884d8" />
          <Bar dataKey="minTemprature" fill="#82ca9d" />
        </BarChart>
        </div><br /><br /><br />
        <table>
          <thead>
            <tr>
              <th>Min Temp</th>
              <th>Date</th>
              <th>Max temp</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className='text-centre pl-[1vw] pr-[2vw] bg-gray-500 pt-2'>{newarr[0][0]} C</td>
              <td className='text-centre pl-[1vw] pr-[2vw] bg-gray-500 pt-2'>{newarr[0][1]} C</td>
              <td className='text-centre pl-[1vw] pr-[2vw] bg-gray-500 pt-2'>{newarr[0][2]} C</td>
            </tr>
            
            <tr>
              <td className='text-centre pl-[1vw] pr-[2vw] pt-2'>{newarr[1][0]} C</td>
              <td className='text-centre pl-[1vw] pr-[2vw] pt-2'>{newarr[1][1]} C</td>
              <td className='text-centre pl-[1vw] pr-[2vw] pt-2'>{newarr[1][2]} C</td>
            </tr>
            <tr>
              <td className='text-centre pl-[1vw] pr-[2vw] bg-gray-500 pt-2'>{newarr[2][0]} C</td>
              <td className='text-centre pl-[1vw] pr-[2vw] bg-gray-500 pt-2'>{newarr[2][1]} C</td>
              <td className='text-centre pl-[1vw] pr-[2vw] bg-gray-500 pt-2'>{newarr[2][2]} C</td>
            </tr>
            <tr>
              <td className='text-centre pl-[1vw] pr-[2vw] pt-2'>{newarr[3][0]} C</td>
              <td className='text-centre pl-[1vw] pr-[2vw] pt-2'>{newarr[3][1]} C</td>
              <td className='text-centre pl-[1vw] pr-[2vw] pt-2'>{newarr[3][2]} C</td>
            </tr>
            <tr>
              <td className='text-centre pl-[1vw] pr-[2vw] bg-gray-500 pt-2'>{newarr[4][0]} C</td>
              <td className='text-centre pl-[1vw] pr-[2vw] bg-gray-500 pt-2'>{newarr[4][1]} C</td>
              <td className='text-centre pl-[1vw] pr-[2vw] bg-gray-500 pt-2'>{newarr[4][2]} C</td>
            </tr>
          </tbody>

        </table>
      </section>
    </div>
  )}

}


export default Anyalatics