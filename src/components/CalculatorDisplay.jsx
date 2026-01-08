import Typography from "./Typography";

export default function CalculatorDisplay({ operation, result }) {
    return (
        <div className="flex flex-col gap-2 px--[1.375rem] cursor-default select-none" >
            <Typography as="div" variant="muted" className="flex items-center justify-end h-7">
                {result && operation}
            </Typography>

            <div className="flex items-center justify-between h-9">
                <Typography variant="muted">=</Typography>
                <Typography variant="blast">{result || operation}</Typography>
            </div>
        </div>
    );
}
