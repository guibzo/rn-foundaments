import { Text, TouchableOpacity, View } from 'react-native'
import { Input } from './ui/input'

export const Form = ({ name }: { name: string }) => {
	return (
		<View className='flex flex-row gap-2 w-full justify-center'>
			<Input
				placeholder={`Teste ${name}`}
				className='w-1/2'
			/>

			<TouchableOpacity>
				<Text className='bg-emerald-500 text-secondary rounded-md p-3'>Adicionar</Text>
			</TouchableOpacity>
		</View>
	)
}
