// ** Import Types
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormFieldsType } from "./Form/Form";

// ** Types
interface SelectInputProps {
    label: string;
    name: keyof FormFieldsType;
    options: Array<string>;
    register: UseFormRegister<FormFieldsType>;
    errors: FieldErrors<FormFieldsType>;
    setValue: (name: keyof FormFieldsType, value: string) => void;
}

/**
 * Renders a select input field with a label, specified options, and registration / error handling.
 *
 * @param label - The displayed label
 * @param name - The name attribute for the select input
 * @param options - The array of options
 * @param register - The function (from react-hook-form) to register the selected option
 * @param errors - The errors object (from react-hook-form) containing validation errors
 * @param setValue - The function (from react-hook-form) to set the active value
 * @return The select input component
 */
export default function SelectInput({
                                        label,
                                        name,
                                        options,
                                        register,
                                        errors,
                                        setValue,
                                    }: SelectInputProps) {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name} className="text-sm font-medium">
                {label}
            </label>
            <select
                {...register(name)}
                name={name}
                id={name}
                onChange={e => setValue(name, e.target.value)}
                className="rounded-md border-[1px] border-gray-300 bg-white p-2"
            >
                {options.map((option, index) => (
                    <option value={option} key={`${option}_${index}`}>
                        {option}
                    </option>
                ))}
            </select>
            {errors[name] && (
                <span className="text-red-400">{errors[name]?.message}</span>
            )}
        </div>
    );
}
