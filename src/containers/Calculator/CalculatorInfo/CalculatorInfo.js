import React from 'react';

import classes from './CalculatorInfo.module.css';

const CalculatorInfo = () => {
    return (
        <div className={classes.CalculatorInfoTitle}>
            <p>You can use the keyboard to type numbers and signs.</p>

            <table className={classes.CalculatorInfoTable}>
                <thead>
                    <tr>
                        <th>Keys</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0 - 9</td>
                        <td>- Set of numbers</td>
                    </tr>
                    <tr>
                        <td>"+" and "-"</td>
                        <td>- Addition and subtraction</td>
                    </tr>
                    <tr>
                        <td>"*"</td>
                        <td>- Change the sign</td>
                    </tr>
                    <tr>
                        <td>"/"</td>
                        <td>- Division</td>
                    </tr>
                    <tr>
                        <td>"%"</td>
                        <td>- Calculate percent</td>
                    </tr>
                    <tr>
                        <td>"."</td>
                        <td>- Dot</td>
                    </tr>
                    <tr>
                        <td>"`"</td>
                        <td>- Change the sign</td>
                    </tr>
                    <tr>
                        <td>"=" or "Enter"</td>
                        <td>- Get the result</td>
                    </tr>
                    <tr>
                        <td>"Backspace"</td>
                        <td>- Clear last char</td>
                    </tr>
                    <tr>
                        <td>"C"</td>
                        <td>- Keys "C" and "AC"</td>
                    </tr>
                    <tr>
                        <td>"Q"</td>
                        <td>- calculation х²</td>
                    </tr>
                    <tr>
                        <td>"W"</td>
                        <td>- calculation √</td>
                    </tr>
                    <tr>
                        <td>"E"</td>
                        <td>- The sine of the angle</td>
                    </tr>
                    <tr>
                        <td>"R"</td>
                        <td>- The cosine of the angle</td>
                    </tr>
                    <tr>
                        <td>"T"</td>
                        <td>- The tangent of an angle</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CalculatorInfo;
