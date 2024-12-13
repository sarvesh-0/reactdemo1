import React, { Component } from "react";
import styles from "./CalculatorHistory.module.css";

export default class CalculatorHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: "",
            num2: "",
            result: "",
            isHighlighted: false,
            history: [] // Array to store calculation history
        };
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    calculate = (operation) => {
        const { num1, num2, history } = this.state;
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if (isNaN(n1) || isNaN(n2)) {
            this.setState({ result: "Invalid input", isHighlighted: true });
            return;
        }

        let result;
        switch (operation) {
            case "add":
                result = n1 + n2;
                break;
            case "subtract":
                result = n1 - n2;
                break;
            case "multiply":
                result = n1 * n2;
                break;
            case "divide":
                result = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
                break;
            default:
                result = "";
        }

        const operationSymbol = {
            add: "+",
            subtract: "-",
            multiply: "*",
            divide: "/"
        }[operation];

        // Update history
        const newHistory = [
            ...history,
            { num1: n1, num2: n2, operation: operationSymbol, result }
        ];

        this.setState({ 
            result, 
            isHighlighted: true, 
            history: newHistory 
        }, () => {
            setTimeout(() => this.setState({ isHighlighted: false }), 2000);
        });
    };

    render() {
        const { num1, num2, result, isHighlighted, history } = this.state;

        return (
            <>
                <div className={styles.calculatorContainer}>
                    <table className={styles.calculatorTable}>
                        <tbody>
                            <tr>
                                <th colSpan="2">
                                    <input
                                        className={styles.inputBox}
                                        name="num1"
                                        placeholder="Enter the first number"
                                        value={num1}
                                        onChange={this.handleInputChange}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th colSpan="2">
                                    <input
                                        className={styles.inputBox}
                                        name="num2"
                                        placeholder="Enter the second number"
                                        value={num2}
                                        onChange={this.handleInputChange}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <button
                                        className={styles.button}
                                        onClick={() => this.calculate("add")}
                                    >
                                        Addition
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className={styles.button}
                                        onClick={() => this.calculate("subtract")}
                                    >
                                        Subtract
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button
                                        className={styles.button}
                                        onClick={() => this.calculate("multiply")}
                                    >
                                        Multiplication
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className={styles.button}
                                        onClick={() => this.calculate("divide")}
                                    >
                                        Division
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th colSpan="2">
                                    <input
                                        className={`${styles.inputBox} ${styles.answer} ${isHighlighted ? styles.highlight : ""}`}
                                        placeholder="Answer"
                                        value={result}
                                        readOnly
                                    />
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table className={styles.historyTable}>
                        <thead>
                            <tr>
                                <th>Num 1</th>
                                <th>Num 2</th>
                                <th>Operation</th>
                                <th>Answer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.map((entry, index) => (
                                <tr key={index}>
                                    <td>{entry.num1}</td>
                                    <td>{entry.num2}</td>
                                    <td>{entry.operation}</td>
                                    <td>{entry.result}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}
