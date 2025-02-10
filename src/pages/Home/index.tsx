import { Play } from "phosphor-react";
import { CountDownContainer, FormContainer, HomeContainer, Separator, StartCountDownButton } from "./styles";

export default function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <input type="text" name="" id="task" />

                    <label htmlFor="minutesAmount">Durante</label>
                    <input type="number" id="minutesAmount" />

                    <span>minutos.</span>
                </FormContainer>

                <CountDownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountDownContainer>

                <StartCountDownButton disabled type="submit">
                    <Play size={24} />
                    Começar
                </StartCountDownButton>
            </form>
        </HomeContainer>
    )
}