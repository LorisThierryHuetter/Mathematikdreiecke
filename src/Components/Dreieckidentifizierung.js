import React, {useEffect, useState} from "react";
import "./component.css"

function Dreieckidentifizierung() {

    const [result, setResult] = useState("None");
    const [data, setData] = useState([]);

    let sides = 0
    let angles = 0

    let sideA = 0   // combi value: 1
    let sideB = 0   // combi value: 2
    let sideC = 0   // combi value: 4
    let angleA = 0  // combi value: 1
    let angleB = 0  // combi value: 2
    let angleC = 0  // combi value: 4

    function Inputs() {
        return (
            <div id="input">
                <p id="#sideA">Side A<input type="number" onChange={(e) => {
                    sideA = parseFloat(e.target.value)
                }}/></p>
                <p id="#sideB">Side B<input type="number" onChange={(e) => {
                    sideB = parseFloat(e.target.value)
                }}/></p>
                <p id="#sideC">Side C<input type="number" onChange={(e) => {
                    sideC = parseFloat(e.target.value)
                }}/></p>
                <p id="#angleA">Angle A<input type="number" onChange={(e) => {
                    angleA = parseFloat(e.target.value)
                }}/></p>

            </div>
        );
    }

    const [valueSinus, setValueSinus] = useState(0);
    const [valueCosinus, setValueCosinus] = useState(0);
    const [valueTangenz, setValueTangenz] = useState(0);

    function sinus() {
        setValueSinus(Math.sin(angleA * Math.PI / 180) * sideC);
    }

    function cosinus() {
        setValueCosinus(sideA / Math.cos(angleA * Math.PI / 180));
    }

    function tangenz() {
        setValueTangenz(sideA * Math.tan(angleA * Math.PI / 180))
    }

    function triangleCalc() {
        sinus()
        cosinus()
        tangenz()

        if (angleA !== 0) {
            angleCalc()
        }

        if (sideA !== 0) {
            sides += 1
        }
        if (sideB !== 0) {
            sides += 2
        }
        if (sideC !== 0) {
            sides += 4
        }
        if (angleA !== 0) {
            angles = 1
        }

        if (sides === 3 || sides === 5 || sides === 6) {
            pythagoras()
        }

        console.log("Angles:", angles)
        if (angles === 3 || angles === 5 || angles === 6) {
            console.log("Poggie Woggies")
            angleCalc()
        }

        setData([sideA, sideB, sideC, angleA, angleB, angleC])
        if (angleA === 90 || angleB === 90 || angleC === 90) {
            setResult("Rechtwinklig");
        } else if (angleA + angleB + angleC > 180) {
            setResult("Error: Not correct angle input")
        } else {
            setResult("")
        }
    }

    function angleCalc() {

        if (sideB === 0) {
            sideB = Math.sqrt(sideC ** 2 - sideA ** 2)
            angleC = Math.round((angleA / sideA) * sideC)
            angleB = Math.round(180 - angleA - angleC)
        } else if (sideC === 0) {
            sideC = Math.sqrt(sideA ** 2 + sideB ** 2)
            angleB = Math.round((angleA / sideA) * sideB)
            angleC = Math.round(180 - angleA - angleB)
        } else if (sideA === 0) {
            sideA = Math.sqrt(sideC ** 2 - sideB ** 2)
            angleB = Math.round(angleA / sideA * sideB)
            angleC = Math.round(180 - angleA - angleB)
        }
    }

    function pythagoras() {
        if (sides === 3) {
            sideC = Math.sqrt(sideA ** 2 + sideB ** 2)
        } else if (sides === 5) {
            sideB = Math.sqrt(sideC ** 2 - sideA ** 2)
        } else if (sides === 6) {
            sideA = Math.sqrt(sideC ** 2 - sideB ** 2)
        }
    }

    return (
        <div>
            <p>Dreieckidentifizierung</p>
            <Inputs/>
            <button id="calculate" onClick={triangleCalc}>Calculate</button>
            <div>
                <h3>Results:</h3>
                <div>
                    <p>Side A = {data[0]}</p>
                    <p>Side B = {data[1]}</p>
                    <p>Side C = {data[2]}</p>
                    <p>Angle alpha = {data[3]} </p>
                    <p>Angle beta = {data[4]}</p>
                    <p>Angle gamma = {data[5]}</p>
                </div>
                <p>Identification: {result}</p>
                <br/>
                <div>
                    <p>Sinus = {valueSinus}</p>
                    <p>Cosinus = {valueCosinus}</p>
                    <p>Tangenz = {valueTangenz}</p>
                </div>
            </div>
        </div>
    );
}
export default Dreieckidentifizierung;