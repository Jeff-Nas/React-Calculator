import Card from "./Card";
import Typography from "./Typography";
import { CalculatorContext } from "./CalculatorProvider";
import { useContext } from "react";

export default function OperationHistory() {
    const { history } = useContext(CalculatorContext);
    return (
        <Card className="py-10 px-8">
            <Typography as="h1" variant="heading" className="mb-4 w-[18.5rem]">
                Histórico de Operações
            </Typography>
            {history.length > 0 ?
                (
                    <ul className="flex flex-col gap-3">
                        {history.map((value, index) =>
                            <Typography key={`${value}-${index}`} as="li">
                                {value}
                            </Typography>
                        )}
                    </ul>
                ) : (
                    <Typography as="p" variant="muted">Nenhuma operação recente</Typography>
                )
            }
        </Card>
    );
}
