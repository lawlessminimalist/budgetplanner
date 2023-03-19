import {ResponsivePie} from 'nivo';
import pieData from './test-data';


function Pie() {
    return (
      <div className="pie">
            <ResponsivePie
                data={pieData}
                margin={{ top: 100, right: 0, bottom: 100, left: 0 }}
                sortByValue={true}
                innerRadius={0.7}
                padAngle={3}
                cornerRadius={8}
                activeOuterRadiusOffset={8}
                color={{ scheme: 'nivo' }}
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
    )}

export default Pie;
  