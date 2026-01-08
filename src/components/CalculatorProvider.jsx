import { createContext, useState, useEffect } from "react";

export const CalculatorContext = createContext();

export function CalculatorProvider({ children }) {
    const [history, setHistory] = useState([]);
    const historyStorageKey = 'history';

    useEffect(() => {
        const savedHistory = localStorage.getItem(historyStorageKey);
        setHistory(JSON.parse(savedHistory || '[]')) // o "[]" é porque o parse espera uma string json como argumento. Poderia ser: JSON.parse(savedHistory) || [] ))
    }, [])

    function updateHistory(operation, parsedResult) {
        setHistory((prev) => {              //função callback que passa valor anterior do history e retorna updatedHistory
            const updatedHistory = [
                ...prev,
                `${operation} = ${parsedResult}`
            ];

            localStorage.setItem(
                historyStorageKey,
                JSON.stringify(updatedHistory)
            );

            return updatedHistory;
        })
    }

    return (
        <CalculatorContext.Provider value={{ history, updateHistory }} >
            {children}
        </CalculatorContext.Provider>
    )
}