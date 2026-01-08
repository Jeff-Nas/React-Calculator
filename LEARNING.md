` <div className="flex items-center justify-between h-9">
                <Typography variant="muted">=</Typography>
                <Typography variant="blast">{result || operation}</Typography>
            </div>
`

Aqui `result` só será exibido quando seu valor for truthy. Entaão seu estado mudará e o React montará novamente o
componente CalculatorDisplay. Neste caso, operation não será mais exibido, pos a lógica retorna o primeiro valor verdadeiro.

---

## UseContext

` <CalculatorContext.Provider value={{ history, updateHistory }} >`

O contexto fornece um objeto igual a:

```
 {
  history: history,
  updateHistory: updateHistory
}
```

 ---

### Calculator

Linha 65

A calculadora em questão exibe a `operação` no lugar do resultado, quando este não existe. O valor de `operation` permanece e a exibição é  controlada pela existência do `result`. 

Enquanto `result` existir, o código vai ficar condicionado à  lógica abaixo e não conseguiremos somar, pois `operation` sempre será  substituída pelo valor do input quando este for um número. Entãoé necessário limpar result para sair dessa lógica e seguir para o `setOperation`.

```jsx
  if (result) {
            setOperation(isNaN(input)
                ? `${result}${input}` //se input for uma operação, então interessa continuar com o resultado
                : input)             // se input for um número, então o resultado não será mais necessário (nova conta)
              setResult("");       //setar result para sair da lógica
            return;
        }

        //--------------------------------------------

         <Typography as="div" variant="muted" className="flex items-center justify-end h-7">
                {result && operation}
            </Typography>

            <div className="flex items-center justify-between h-9"> 
                <Typography variant="muted">=</Typography>
                <Typography variant="blast">{result || operation}</Typography>
            </div>
```
---

### CalculatorProvider

O uso de "[]" é porque o parse espera uma string JSON como argumento, então depoi ele converte para um valor JavaScript `[]`.
 Uma alternativa à esse código seria: `setHistory(JSON.parse(savedHistory) || [] ))`, o array vazio é declarado fora do parse.

```jsx
 useEffect(() => {
        const savedHistory = localStorage.getItem(historyStorageKey);
        setHistory(JSON.parse(savedHistory || '[]')) 
    }, [])
```