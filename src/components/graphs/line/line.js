import {ResponsiveLine} from 'nivo';
import lineData from './test-data';

function Line() {
    return (
      <div className="App">

          <ResponsiveLine
              data={lineData}
              margin={{ top: 50, right: 0, bottom: 70, left: 120 }}
  
              axisTop={null}
              axisRight={{
                  tickValues: [
                      0,
                      500,
                      1000,
                      1500,
                      2000,
                      2500
                  ],
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  format: '.2s',
                  legend: '',
                  legendOffset: 0
              }}
              axisBottom={{
                  tickValues: [
                      0,
                      20,
                      40,
                      60,
                      80,
                      100,
                      120
                  ],
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  format: '.0f',
                  legend: 'price',
                  legendOffset: 36,
                  legendPosition: 'middle'
              }}
              axisLeft={{
                  tickValues: [
                      0,
                      500,
                      1000,
                      1500,
                      2000,
                      2500
                  ],
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  format: '.2s',
                  legend: 'volume',
                  legendOffset: -40,
                  legendPosition: 'middle'
              }}
              enableGridX={false}
              />
    </div>
    )}

    export default {Line};
            