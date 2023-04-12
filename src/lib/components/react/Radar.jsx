// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/radar
import React from 'react';
import { Radar } from '@nivo/radar'

const dataRadar = [
    {
      "taste": "fruity",
      "chardonay": 29,
      "carmenere": 61,
      "syrah": 57
    },
    {
      "taste": "bitter",
      "chardonay": 103,
      "carmenere": 60,
      "syrah": 66
    },
    {
      "taste": "heavy",
      "chardonay": 97,
      "carmenere": 103,
      "syrah": 78
    },
    {
      "taste": "strong",
      "chardonay": 71,
      "carmenere": 61,
      "syrah": 68
    },
    {
      "taste": "sunny",
      "chardonay": 57,
      "carmenere": 85,
      "syrah": 33
    }
  ];
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.


export default function Radard () {
  return (
    <Radar
        theme= {{
          background: '#00000022',
          textColor: '#99ffff', 
          fontSize: 20,
          tooltip: {container: {
            background:'#00000055',
            color: '#99ffff',
          }}
        }}
        height={500}
        width={500}
        data={dataRadar}
        keys={[ 'chardonay', 'carmenere', 'syrah' ]}
        indexBy="taste"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderWidth={4}
        borderColor={{ from: 'color', modifiers: [] }}
        gridShape="linear"
        gridLabelOffset={14}
        dotSize={19}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        dotBorderColor={{ from: 'color', modifiers: [] }}
        enableDotLabel={true}
        dotLabel="value"
        dotLabelYOffset={4}
        colors={{ scheme: 'accent' }}
        fillOpacity={0.35}
        blendMode="hard-light"
        animate={true}
        motionConfig="wobbly"
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999',
                symbolSize: 12,
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
);
}