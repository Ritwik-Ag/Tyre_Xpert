import React, { useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    PieChart,
    Pie,
    Cell,
} from "recharts";

export default function RaceDataEntry() {
    // State hooks
    const [laps, setLaps] = useState(""); // Number of laps
    const [temp, setTemp] = useState(""); // Track temperature
    const [trackCondition, setTrackCondition] = useState("dry"); // Track condition: wet or dry
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    // Tyre count states
    const [softTyreLaps, setSoftTyreLaps] = useState(0);
    const [mediumTyreLaps, setMediumTyreLaps] = useState(0);
    const [hardTyreLaps, setHardTyreLaps] = useState(0);
    const [softTyreCount, setSoftTyreCount] = useState(0);
    const [mediumTyreCount, setMediumTyreCount] = useState(0);
    const [hardTyreCount, setHardTyreCount] = useState(0);

    // Line graph data state
    const [temperatureEffects, setTemperatureEffects] = useState([]);

    const handleLapChange = (event) => {
        setLaps(event.target.value);
    };

    const handleTempChange = (event) => {
        setTemp(event.target.value);
    };

    const handleConditionChange = (event) => {
        setTrackCondition(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const lapCount = parseInt(laps, 10) || 0;

        const tempFactor = trackCondition === "wet" ? 0.8 : 1; // Wet track reduces lifespan by 20%
        const softLifespan = Math.max(Math.round(20 * tempFactor - temp * 0.1), 1);
        const mediumLifespan = Math.max(Math.round(30 * tempFactor - temp * 0.05), 1);
        const hardLifespan = Math.max(Math.round(40 * tempFactor - temp * 0.02), 1);

        setSoftTyreLaps(softLifespan);
        setMediumTyreLaps(mediumLifespan);
        setHardTyreLaps(hardLifespan);

        setSoftTyreCount(Math.ceil(lapCount / softLifespan));
        setMediumTyreCount(Math.ceil(lapCount / mediumLifespan));
        setHardTyreCount(Math.ceil(lapCount / hardLifespan));

        const tempData = [];
        for (let t = 10; t <= 50; t += 5) {
            const tempFactorGraph = trackCondition === "wet" ? 0.8 : 1;
            tempData.push({
                temperature: t,
                softLifespan: Math.max(Math.round(20 * tempFactorGraph - t * 0.1), 1),
                mediumLifespan: Math.max(Math.round(30 * tempFactorGraph - t * 0.05), 1),
                hardLifespan: Math.max(Math.round(40 * tempFactorGraph - t * 0.02), 1),
            });
        }
        setTemperatureEffects(tempData);

        setIsFormSubmitted(true);
    };

    const pieColors = ["#8884d8", "#82ca9d", "#ffc658"];

    const pieData = [
        { name: "Soft Tyre Lifespan", value: softTyreLaps },
        { name: "Medium Tyre Lifespan", value: mediumTyreLaps },
        { name: "Hard Tyre Lifespan", value: hardTyreLaps },
    ];

    return (
        <>
            <form method="post" onSubmit={handleFormSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td className="table-text">Number of race laps</td>
                            <td>
                                <input
                                    name="txtLaps"
                                    value={laps}
                                    onChange={handleLapChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-text">
                                Temperature at Race track venue (in Centigrade)
                            </td>
                            <td>
                                <input
                                    name="txtTemp"
                                    value={temp}
                                    onChange={handleTempChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-text">Track Condition</td>
                            <td>
                                <select
                                    name="trackCondition"
                                    value={trackCondition}
                                    onChange={handleConditionChange}
                                >
                                    <option value="dry">Dry</option>
                                    <option value="wet">Wet</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="submit" value="Calculate" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>

            {isFormSubmitted && (
                <div>
                    <h3>Tyre Strategy Results</h3>
                    <ul>
                        <li>
                            Soft Tyres: {softTyreLaps} laps per set, {softTyreCount} sets needed
                        </li>
                        <li>
                            Medium Tyres: {mediumTyreLaps} laps per set, {mediumTyreCount} sets
                            needed
                        </li>
                        <li>
                            Hard Tyres: {hardTyreLaps} laps per set, {hardTyreCount} sets needed
                        </li>
                    </ul>

                    <h3>Temperature Effects on Tyre Lifespan</h3>
                    <LineChart
                        width={600}
                        height={300}
                        data={temperatureEffects}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="temperature"
                            label={{
                                value: "Temperature (°C)",
                                position: "insideBottomRight",
                                offset: -10,
                            }}
                        />
                        <YAxis
                            label={{
                                value: "Lifespan (laps)",
                                angle: -90,
                                position: "insideLeft",
                            }}
                        />
                        <Tooltip />
                        <Legend verticalAlign="top" align="right" wrapperStyle={{ paddingBottom: 10 }} />

                        <Line
                            type="monotone"
                            dataKey="softLifespan"
                            stroke="#8884d8"
                            name="Soft Tyres"
                        />
                        <Line
                            type="monotone"
                            dataKey="mediumLifespan"
                            stroke="#82ca9d"
                            name="Medium Tyres"
                        />
                        <Line
                            type="monotone"
                            dataKey="hardLifespan"
                            stroke="#ffc658"
                            name="Hard Tyres"
                        />
                    </LineChart>

                    <h3>Tyre Lifespan Distribution</h3>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={120}
                            fill="#8884d8"
                            label
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={pieColors[index]} />

                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </div>
            )}
        </>
    );
}