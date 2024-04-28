import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { Input } from './ui/input'

export const Form = ({ name }: { name: string }) => {
	const handleAdd = () => {
		return Alert.alert('Tem certeza?', `Quer mesmo remover ${name} dessa lista?`, [
			{
				text: 'Sim',
				onPress: () => Alert.alert(`Deletado participante ${name}.`),
			},
			{
				text: 'Não',
				style: 'cancel',
			},
		])
	}

	return (
		<View className='flex flex-row w-full gap-2 justify-center'>
			<Input
				placeholder={`Teste ${name}`}
				className='flex-1'
				onChange={() => {}}
			/>

			<TouchableOpacity onPress={handleAdd}>
				<Text className='bg-emerald-500 text-secondary rounded-md p-3'>Adicionar</Text>
			</TouchableOpacity>
		</View>
	)
}
