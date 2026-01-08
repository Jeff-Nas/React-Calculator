import Card from "./Card";
import Button from "./Button";
import CalculatorDisplay from "./CalculatorDisplay";
import { BackspaceIcon } from "@phosphor-icons/react";
import { useState, useContext } from "react";
import { CalculatorContext } from "./CalculatorProvider";

const buttons = [
    [
        { input: 'backspace', icon: <BackspaceIcon /> },
        { input: "C", className: "flex-1 h-16" },
        { input: "/", variant: "primary" },
    ],
    [
        { input: "7" },
        { input: "8" },
        { input: "9" },
        { input: "*", variant: "primary" },
    ],
    [
        { input: "4" },
        { input: "5" },
        { input: "6" },
        { input: "-", variant: "primary" },
    ],
    [
        { input: "1" },
        { input: "2" },
        { input: "3" },
        { input: "+", variant: "primary" },
    ],
    [
        { input: "0", className: "flex-1 h-16" },
        { input: "," },
        { input: "=", className: "w-16 h-16 bg-[#7F45E2]" }
    ]
];

export default function Calculator() {
    const [operation, setOperation] = useState("");
    const [result, setResult] = useState("");
    const { updateHistory } = useContext(CalculatorContext);

    function buttonHandleClick(input) {
        if (input === 'C') {
            setOperation("");
            setResult("");
            return;
        }

        if (input === 'backspace') {
            setResult("");
            setOperation(operation.slice(0, -1));
            return;
        }

        if (input === "=") {
            const operationResult = eval(operation.replace(/,/g, '.')); // converte a vírgula em ponto
            const parsedResult = operationResult?.toString()?.replace(/\./g, ','); //cálculo formatado
            setResult(parsedResult);
            updateHistory(operation, parsedResult); //usando contexto - aula useContext
            return;
        }

        if (result) {
            setOperation(isNaN(input)
                ? `${result}${input}` //se input for uma operação, então interessa continuar com o resultado
                : input)             // se input for um número, então o resultado não será mais necessário (nova conta)
            setResult("");       //setar result para sair da lógica
            return;
        }

        if (input === ",") {
            const partes = operation.split(/[\+\-\*\/]/); // divide a expressão nos operadores
            const ultimoNumero = partes[partes.length - 1];

            if (!ultimoNumero.includes(",")) {
                setOperation(`${operation}, `);
            }

            return;
        }


        if (input === "," && !operation.endsWith(",")) {
            setOperation(`${operation}, `);
            console.log("ok")
            return;
        }

        setOperation(
            `${operation}${input}`
        )
    }


    return (
        <Card
            className="
        flex flex-col gap-[1.625rem] w-[22.25rem]
        pt-14 px-8 pb-8"
        >
            <CalculatorDisplay
                operation={operation}
                result={result}
            />

            <div className="flex flex-col gap-3">
                {buttons.map((row, index) => (
                    <div key={`row - ${index}`} className="flex gap-3">
                        {row.map(button => (
                            <Button
                                key={button.input}
                                variant={button.variant}
                                className={button.className || "w-16 h-16"}
                                onClick={() => buttonHandleClick(button.input)}
                            >
                                {button.icon || button.input}
                            </Button>
                        ))}
                    </div>
                ))}

            </div>
        </Card>
    );
}
