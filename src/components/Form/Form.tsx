import { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import Modal from "../Modal/Modal.tsx";
import TextInput from "../TextInput.tsx";
import DatePicker from "../DatePicker/DatePicker.tsx";
import SelectInput from "../SelectInput.tsx";
import Button from "../Button/Button.tsx";

import department from "../../mock/department.ts";
import state from "../../mock/state.ts";
import { padZero} from "../../utils/datepicker.ts";

import { useDispatch } from "react-redux";
import { addRow } from "../../features/dataTable";

const validationSchema = z.object({
    firstName: z
        .string()
        .min(1, "First name is required")
        .min(3, "First name must be at least 3 characters")
        .regex(
            /^(?:[A-Za-z]+(?:[' -][A-Za-z]+)?){3,}$/,
            "First name can only contain letters and hyphens"
        ),
    lastName: z
        .string()
        .min(1, "Last name is required")
        .min(3, "Last name must be at least 3 characters")
        .regex(
            /^(?:[A-Za-z]+(?:[' -][A-Za-z]+)?){3,}$/,
            "Last name can only contain letters and hyphens"
        ),
    birthDate: z.coerce
        .date()
        .max(new Date(), "Date of birth must be in the past"),
    startDate: z.coerce
        .date()
        .max(new Date(), "Start date must be in the past"),
    streetAddress: z
        .string()
        .min(1, "Street is required")
        .min(2, "Street must be at least 3 characters"),
    cityName: z
        .string()
        .min(1, "City is required")
        .min(2, "City must be at least 3 characters")
        .regex(/^[A-Za-z\s-]+$/, "City can only contain letters"),
    stateName: z.string().min(1, "State is required"),
    postalCode: z.coerce
        .number({
            required_error: "Zip code is required",
            invalid_type_error: "Zip code must be a number",
        })
        .gte(1000, "Zip code must be at least 4 digits")
        .lte(99999, "Zip code must be at most 5 digits"),
    departmentName: z.string().min(1, "Department is required"),
});

export type FormFieldsType = z.infer<typeof validationSchema>;

export default function EmployeeForm() {
    const confirmationModalRef = useRef<HTMLDialogElement | null>(null);

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
        setValue,
        control,
    } = useForm<FormFieldsType>({
        resolver: zodResolver(validationSchema),
        defaultValues: {
            firstName: "John",
            lastName: "Doe",
            streetAddress: "123 Main St",
            cityName: "Anytown",
            postalCode: 12345,
        },
    });

    const dispatch = useDispatch();

    function onSubmit(data: FormFieldsType) {
        try {
            const newEmployee = {
                id: `${Date.now()}`,
                birthDate: `${data.birthDate.getFullYear()}-${padZero(data.birthDate.getMonth() + 1)}-${padZero(data.birthDate.getDate())}`,
                startDate: `${data.startDate.getFullYear()}-${padZero(data.startDate.getMonth() + 1)}-${padZero(data.startDate.getDate())}`,
                firstName: data.firstName,
                lastName: data.lastName,
                streetAddress: data.streetAddress,
                cityName: data.cityName,
                stateName: data.stateName,
                postalCode: data.postalCode,
                departmentName: data.departmentName,
            };

            dispatch(addRow(newEmployee));

            confirmationModalRef.current?.showModal();
        } catch (error) {
            setError("root", { message: "An error occurred on our server" });
        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-70 flex flex-col gap-4 rounded-lg border-[1px] border-gray-300 p-4 sm:w-80"
                data-testid="employeeForm"
            >
                <TextInput
                    label="First Name"
                    placeholder="John"
                    name="firstName"
                    register={register}
                    errors={errors}
                />
                <TextInput
                    label="Last Name"
                    placeholder="Doe"
                    name="lastName"
                    register={register}
                    errors={errors}
                />
                <Controller
                    control={control}
                    name="birthDate"
                    defaultValue={new Date("2000-01-01")}
                    render={({ field }) => (
                        <DatePicker
                            label="Date of Birth"
                            name={field.name}
                            value={field.value}
                            setValue={setValue}
                            errors={errors}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="startDate"
                    defaultValue={new Date("2000-01-01")}
                    render={({ field }) => (
                        <DatePicker
                            label="Start Date"
                            name={field.name}
                            value={field.value}
                            setValue={setValue}
                            errors={errors}
                        />
                    )}
                />
                <fieldset className="flex flex-col gap-2 rounded-md border-[1px] border-gray-200 p-4">
                    <legend className="px-2">Address</legend>
                    <TextInput
                        label="Street Address"
                        placeholder="123 Main St"
                        name="streetAddress"
                        register={register}
                        errors={errors}
                    />
                    <TextInput
                        label="City Name"
                        placeholder="Anytown"
                        name="cityName"
                        register={register}
                        errors={errors}
                    />
                    <SelectInput
                        label="State"
                        name="stateName"
                        options={state}
                        register={register}
                        errors={errors}
                        setValue={setValue}

                    />
                    <TextInput
                        label="Postal Code"
                        placeholder="12345"
                        name="postalCode"
                        register={register}
                        errors={errors}
                    />
                </fieldset>
                <SelectInput
                    label="Department"
                    name="departmentName"
                    options={department}
                    register={register}
                    errors={errors}
                    setValue={setValue}
                />
                <Button
                    type="submit"
                    label={isSubmitting ? "Creating..." : "Create"}
                    isDisabled={isSubmitting}
                />
                {errors.root && (
                    <p className="text-red-500">{errors.root.message}</p>
                )}
            </form>
            <Modal ref={confirmationModalRef}>
                <p>Employee created successfully</p>
            </Modal>
        </>
    );
}
