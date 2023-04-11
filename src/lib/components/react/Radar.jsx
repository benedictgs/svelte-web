// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/radar
import React from 'react';
import { ResponsiveRadar } from '@nivo/radar'

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
const MyResponsiveRadar = () => (
    <ResponsiveRadar
        data={dataRadar}
        keys={[ 'chardonay', 'carmenere', 'syrah' ]}
        indexBy="taste"
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: 'color' }}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        colors={{ scheme: 'nivo' }}
        blendMode="multiply"
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
)

export default function Radar () {
  return (
  <div class="w-full h-60">
    <ResponsiveRadar
        data={dataRadar}
        keys={[ 'chardonay', 'carmenere', 'syrah' ]}
        indexBy="taste"
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: 'color' }}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        colors={{ scheme: 'nivo' }}
        blendMode="multiply"
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
  </div>
);
}