import './App.css';
import {ResponsiveLine,ResponsivePie} from 'nivo';

function App() {
  let lineData = [
    {
      "id":"testing",
      "color": "hsl(76, 70%, 50%)",
      "data": [
        {
          "x": 0,
          "y": 266
        },
        {
          "x": 1,
          "y": 61
        },
        {
          "x": 2,
          "y": 107
        },
        {
          "x": 3,
          "y": 137
        },
        {
          "x": 4,
          "y": 110
        },
        {
          "x": 5,
          "y": 291
        },
        {
          "x": 6,
          "y": 227
        },
        {
          "x": 7,
          "y": 152
        },
        {
          "x": 8,
          "y": 224
        },
        {
          "x": 9,
          "y": 38
        },
        {
          "x": 10,
          "y": 148
        },
        {
          "x": 11,
          "y": 290
        },
        {
          "x": 12,
          "y": 131
        },
        {
          "x": 13,
          "y": 130
        },
        {
          "x": 14,
          "y": 206
        },
        {
          "x": 15,
          "y": 116
        },
        {
          "x": 16,
          "y": 285
        },
        {
          "x": 17,
          "y": 95
        },
        {
          "x": 18,
          "y": 218
        },
        {
          "x": 19,
          "y": 200
        },
        {
          "x": 20,
          "y": 130
        },
        {
          "x": 21,
          "y": 286
        },
        {
          "x": 22,
          "y": 264
        },
        {
          "x": 23,
          "y": 171
        },
        {
          "x": 24,
          "y": 195
        },
        {
          "x": 25,
          "y": 122
        },
        {
          "x": 26,
          "y": 272
        },
        {
          "x": 27,
          "y": 213
        },
        {
          "x": 28,
          "y": 238
        },
        {
          "x": 29,
          "y": 148
        },
        {
          "x": 30,
          "y": 267
        },
        {
          "x": 31,
          "y": 191
        },
        {
          "x": 32,
          "y": 157
        },
        {
          "x": 33,
          "y": 40
        },
        {
          "x": 34,
          "y": 43
        },
        {
          "x": 35,
          "y": 22
        },
        {
          "x": 36,
          "y": 210
        },
        {
          "x": 37,
          "y": 148
        },
        {
          "x": 38,
          "y": 165
        },
        {
          "x": 39,
          "y": 297
        },
        {
          "x": 40,
          "y": 298
        },
        {
          "x": 41,
          "y": 272
        },
        {
          "x": 42,
          "y": 104
        },
        {
          "x": 43,
          "y": 243
        },
        {
          "x": 44,
          "y": 265
        },
        {
          "x": 45,
          "y": 282
        },
        {
          "x": 46,
          "y": 261
        },
        {
          "x": 47,
          "y": 126
        },
        {
          "x": 48,
          "y": 244
        },
        {
          "x": 49,
          "y": 51
        },
        {
          "x": 50,
          "y": 152
        },
        {
          "x": 51,
          "y": 81
        },
        {
          "x": 52,
          "y": 30
        },
        {
          "x": 53,
          "y": 233
        },
        {
          "x": 54,
          "y": 251
        },
        {
          "x": 55,
          "y": 18
        },
        {
          "x": 56,
          "y": 195
        },
        {
          "x": 57,
          "y": 168
        },
        {
          "x": 58,
          "y": 90
        },
        {
          "x": 59,
          "y": 141
        },
        {
          "x": 60,
          "y": 101
        },
        {
          "x": 61,
          "y": 268
        },
        {
          "x": 62,
          "y": 213
        },
        {
          "x": 63,
          "y": 35
        },
        {
          "x": 64,
          "y": 287
        },
        {
          "x": 65,
          "y": 165
        },
        {
          "x": 66,
          "y": 126
        },
        {
          "x": 67,
          "y": 19
        },
        {
          "x": 68,
          "y": 91
        },
        {
          "x": 69,
          "y": 106
        },
        {
          "x": 70,
          "y": 185
        },
        {
          "x": 71,
          "y": 217
        },
        {
          "x": 72,
          "y": 190
        },
        {
          "x": 73,
          "y": 17
        },
        {
          "x": 74,
          "y": 213
        },
        {
          "x": 75,
          "y": 61
        },
        {
          "x": 76,
          "y": 285
        },
        {
          "x": 77,
          "y": 53
        },
        {
          "x": 78,
          "y": 25
        },
        {
          "x": 79,
          "y": 1
        },
        {
          "x": 80,
          "y": 73
        },
        {
          "x": 81,
          "y": 205
        },
        {
          "x": 82,
          "y": 51
        },
        {
          "x": 83,
          "y": 252
        },
        {
          "x": 84,
          "y": 258
        },
        {
          "x": 85,
          "y": 128
        },
        {
          "x": 86,
          "y": 30
        },
        {
          "x": 87,
          "y": 75
        },
        {
          "x": 88,
          "y": 77
        },
        {
          "x": 89,
          "y": 108
        },
        {
          "x": 90,
          "y": 56
        },
        {
          "x": 91,
          "y": 64
        },
        {
          "x": 92,
          "y": 200
        },
        {
          "x": 93,
          "y": 117
        },
        {
          "x": 94,
          "y": 199
        },
        {
          "x": 95,
          "y": 257
        },
        {
          "x": 96,
          "y": 103
        },
        {
          "x": 97,
          "y": 171
        },
        {
          "x": 98,
          "y": 246
        },
        {
          "x": 99,
          "y": 232
        },
        {
          "x": 100,
          "y": 110
        },
        {
          "x": 101,
          "y": 36
        },
        {
          "x": 102,
          "y": 197
        },
        {
          "x": 103,
          "y": 14
        },
        {
          "x": 104,
          "y": 22
        },
        {
          "x": 105,
          "y": 81
        },
        {
          "x": 106,
          "y": 229
        },
        {
          "x": 107,
          "y": 133
        },
        {
          "x": 108,
          "y": 161
        },
        {
          "x": 109,
          "y": 141
        },
        {
          "x": 110,
          "y": 244
        },
        {
          "x": 111,
          "y": 209
        },
        {
          "x": 112,
          "y": 91
        },
        {
          "x": 113,
          "y": 0
        },
        {
          "x": 114,
          "y": 40
        },
        {
          "x": 115,
          "y": 53
        },
        {
          "x": 116,
          "y": 219
        },
        {
          "x": 117,
          "y": 169
        },
        {
          "x": 118,
          "y": 251
        },
        {
          "x": 119,
          "y": 263
        },
        {
          "x": 120,
          "y": 196
        }
      ]
    }
  ]

  let pieData = [
    {
      "id": "scala",
      "label": "scala",
      "value": 575,
      "color": "hsl(281, 70%, 50%)"
    },
    {
      "id": "stylus",
      "label": "stylus",
      "value": 316,
      "color": "hsl(62, 70%, 50%)"
    },
    {
      "id": "lisp",
      "label": "lisp",
      "value": 342,
      "color": "hsl(89, 70%, 50%)"
    },
    {
      "id": "haskell",
      "label": "haskell",
      "value": 181,
      "color": "hsl(318, 70%, 50%)"
    },
    {
      "id": "sass",
      "label": "sass",
      "value": 301,
      "color": "hsl(139, 70%, 50%)"
    }
  ]
  return (
    <div className="App">
      <div className="line">
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
        <div className="pie">

          <ResponsivePie
              data={pieData}
              margin={{ top: 100, right: 0, bottom: 100, left: 0 }}
              sortByValue={true}
              innerRadius={0.7}
              padAngle={3}
              cornerRadius={8}
              activeOuterRadiusOffset={8}
              colors={{ scheme: 'nivo' }}
              borderWidth={4}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: 'color' }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{
                  from: 'color',
                  modifiers: [
                      [
                          'darker',
                          2
                      ]
                  ]
              }}
              defs={[
                  {
                      id: 'dots',
                      type: 'patternDots',
                      background: 'inherit',
                      color: 'rgba(255, 255, 255, 0.3)',
                      size: 4,
                      padding: 1,
                      stagger: true
                  },
                  {
                      id: 'lines',
                      type: 'patternLines',
                      background: 'inherit',
                      color: 'rgba(255, 255, 255, 0.3)',
                      rotation: -45,
                      lineWidth: 6,
                      spacing: 10
                  }
              ]}
              fill={[
                {
                    match: {
                        id: 'ruby'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'c'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'go'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'python'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'scala'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'lisp'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'elixir'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'javascript'
                    },
                    id: 'lines'
                }
            ]}
              legends={[
                  {
                      anchor: 'bottom',
                      direction: 'row',
                      justify: false,
                      translateX: 0,
                      translateY: 56,
                      itemsSpacing: 0,
                      itemWidth: 100,
                      itemHeight: 18,
                      itemTextColor: '#999',
                      itemDirection: 'left-to-right',
                      itemOpacity: 1,
                      symbolSize: 18,
                      symbolShape: 'circle',
                      effects: [
                          {
                              on: 'hover',
                              style: {
                                  itemTextColor: '#000'
                              }
                          }
                      ]
                  }
              ]}
          />
          </div>


    </div>
  );
}

export default App;
