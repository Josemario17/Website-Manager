// 'use client';

import { useEffect, useState } from 'react';
import { RiCloseLine } from '@remixicon/react';
import { AreaChart, Card, List, ListItem } from '@tremor/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const data = [
  {
    date: 'Jan 23',
    novos: 232,
    antigos: 0,
  },
  {
    date: 'Feb 23',
    novos: 241,
    antigos: 0,
  },
  {
    date: 'Mar 23',
    novos: 291,
    antigos: 0,
  },
  {
    date: 'Apr 23',
    novos: 101,
    antigos: 0,
  },
  {
    date: 'May 23',
    novos: 318,
    antigos: 0,
  },
  {
    date: 'Jun 23',
    novos: 205,
    antigos: 0,
  },
  {
    date: 'Jul 23',
    novos: 372,
    antigos: 0,
  },
  {
    date: 'Aug 23',
    novos: 341,
    antigos: 0,
  },
  {
    date: 'Sep 23',
    novos: 387,
    antigos: 120,
  },
  {
    date: 'Oct 23',
    novos: 220,
    antigos: 0,
  },
  {
    date: 'Nov 23',
    novos: 372,
    antigos: 0,
  },
  {
    date: 'Dec 23',
    novos: 321,
    antigos: 0,
  },
];

const summary = [
  {
    name: 'novos',
    value: 3273,
  },
  {
    name: 'antigos',
    value: 120,
  },
];

const valueFormatter = (number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

const statusColor = {
  novos: 'bg-blue-500',
  antigos: 'bg-violet-500',
};

export default function VisitCharts() {
  return (
    <>
      <Card className="sm:max-w-lg rounded-xl">
        <h3 className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Visitas
        </h3>
        <AreaChart
          data={data}
          index="date"
          categories={['novos', 'antigos']}
          colors={['blue', 'violet']}
          showLegend={false}
          showYAxis={false}
          showGridLines={true}
          showGradient={false}
          startEndOnly={true}
          className="mt-6 h-48"
        />
        <List className="mt-2">
          {summary.map((item) => (
            <ListItem key={item.name}>
              <div className="flex items-center space-x-2">
                <span
                  className={classNames(statusColor[item.name], 'h-0.5 w-3')}
                  aria-hidden={true}
                />
                <span>{item.name}</span>
              </div>
              <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {valueFormatter(item.value)}
              </span>
            </ListItem>
          ))}
        </List>
      </Card>
    </>
  );
}
