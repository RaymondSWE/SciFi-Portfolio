import React from 'react';
import StatisticCard from '../ui/StatisticCard';
import { statisticsData } from '../../data/Statistic';


const Statistic = () => {

    return (
        <section className="text-gray-600 body-font p-6 sm:p-2">
        <div className="container mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
                {statisticsData.map(({ id, icon, number, description }) => (
                    <StatisticCard
                        key={id}
                        icon={icon}
                        number={number}
                        description={description}
                    />
                ))}

            </div>
        </div>
    </section>
    );
};

export default Statistic;