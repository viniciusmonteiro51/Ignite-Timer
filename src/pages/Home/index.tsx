import { Play } from "phosphor-react";
import { 
    CountDownContainer, 
    FormContainer, 
    HomeContainer,
    MinutesAmountInput, 
    Separator, 
    StartCountDownButton, 
    TaskInput 
} from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod';

const newCycleFormSchema = zod.object({
    task: zod.string().min(1, "Informe a tarefa"),
    minutesAmount: zod.number().min(5).max(60)
});

export default function Home() {

    const { register, handleSubmit, watch, formState } = useForm({
        resolver: zodResolver(newCycleFormSchema)
    });

    function handleCreateNewCycle(data: any) {
        console.log(data)
    }

    const task = watch('task');
    const isSbumitDisabled = !task;

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>

                    <TaskInput 
                        type="text"
                        id="task" 
                        placeholder="Dê um nome para o seu projeto"
                        list="task-suggestions"
                        {...register("task")}
                    />

                    <datalist id="task-suggestions">
                        <option value="Projeto 1"/>
                        <option value="Projeto 2"/>
                        <option value="Projeto 3"/>
                        <option value="Projeto 4"/>
                        <option value="Projeto 5"/>
                    </datalist>
                    <label htmlFor="minutesAmount">Durante</label>
            
                    <MinutesAmountInput 
                        type="number" 
                        id="minutesAmount" 
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                        {...register('minutesAmount', {valueAsNumber: true})}
                    />

                    <span>minutos.</span>
                </FormContainer>

                <CountDownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountDownContainer>

                <StartCountDownButton disabled={isSbumitDisabled} type="submit">
                    <Play size={24} />
                    Começar
                </StartCountDownButton>
            </form>
        </HomeContainer>
    )
}