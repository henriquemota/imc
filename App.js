import React, { useState } from 'react'
import img from './src/assets/health.jpg'
import { Banner, Button, Container, Input, Label, LabelButton, LabelResult } from './src/components'

export default function App() {
	const [peso, setPeso] = useState(0)
	const [altura, setAltura] = useState(0)
	const [imc, setImc] = useState(0)

	const handleButton = () => {
		const localImc = Number(peso) / Math.pow(Number(altura), 2)
		setImc(localImc)

		if (localImc < 18.5) setImc('MAGREZA')
		else if (localImc >= 18.5 && localImc <= 24.9) setImc('NORMAL')
		else if (localImc > 24.9 && localImc <= 29) setImc('SOBREPESO')
		else if (localImc > 29 && localImc <= 39.9) setImc('OBESIDADE')
		else if (localImc > 39.9) setImc('OBESIDADE GRAVE')
	}

	return (
		<Container>
			<Banner source={img} />
			<Label>Peso</Label>
			<Input onChangeText={(text) => setPeso(text)} />
			<Label>Altura</Label>
			<Input onChangeText={(text) => setAltura(text)} />
			<Button onPress={handleButton}>
				<LabelButton>Clique aqui</LabelButton>
			</Button>
			<LabelResult>{`Seu imc é ${imc}`}</LabelResult>
		</Container>
	)
}
