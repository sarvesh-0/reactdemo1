import React, { Component } from "react";
import styles from "./Calculator.module.css";

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: "",
            num2: "",
            result: "",
            isHighlighted: false
        };
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    calculate = (operation) => {
        const { num1, num2 } = this.state;
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
        this.setState({ result, isHighlighted: true }, () => {
            setTimeout(() => this.setState({ isHighlighted: false }), 2000);
        });
    };

    render() {
        const { num1, num2, result, isHighlighted } = this.state;

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
            </>
        );
    }
}
