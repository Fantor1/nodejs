import React from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

interface MyForm{
    name: string,
    age: number
}

function TestForm() {
    const { register, handleSubmit, clearErrors, reset, formState: {errors} } = useForm<MyForm>({
        defaultValues: {
            age: 18
        }
    });
    // const isName = (data) => {
    //     if(data==="123") return(false)
    //     return(true)
    // };
    const Submit: SubmitHandler<MyForm> = data => {console.log(data)};
    const Error: SubmitErrorHandler<MyForm> = data => {console.log(data)};
    return(
        <>
            <form onSubmit={handleSubmit(Submit, Error)}>
                <input type="text" {...register('name', {required: true})} aria-invalid={errors.name ? true : false}/>
                <input type="number" {...register('age')}/>
                <button>Send</button>
                <button type="button" onClick={() => reset({age: 0, name: ''})}>Clear form</button>
                <button type="button" onClick={() => clearErrors()}>Clear errors</button>            </form>
        </>
    );
}

export default TestForm;