import { Form } from '@/components/form'
import { FlatList, Text, View } from 'react-native'

const participants = [
	{ name: 'João' },
	{ name: 'Maria' },
	{ name: 'Pedro' },
	{ name: 'Ana' },
	{ name: 'Lucas' },
	{ name: 'Juliana' },
	{ name: 'Mariana' },
	{ name: 'Rafael' },
	{ name: 'Camila' },
	{ name: 'Gustavo' },
	{ name: 'Carolina' },
	{ name: 'Fernando' },
	{ name: 'Larissa' },
	{ name: 'Diego' },
	{ name: 'Patrícia' },
]

export const Home = () => {
	return (
		<View className='w-full border border-zinc-800 bg-black text-zinc-100  px-4 py-12 min-h-screen h-full gap-y-3 flex items-center justify-between'>
			<Text className='text-zinc-100'>
				<Text className='text-3xl text-red-500'>Home</Text>
			</Text>

			<FlatList
				className='w-full'
				contentContainerStyle={{
					gap: 12,
					paddingTop: 20,
					paddingBottom: 20,
					width: '100%',
				}}
				data={participants}
				keyExtractor={(participant) => (participant.name + Math.random()).toString()}
				renderItem={({ item: participant, index: i }) => (
					<Form
						key={i}
						name={participant.name}
					/>
				)}
			/>

			<Text className='text-zinc-100'>
				<Text className='text-3xl text-red-300'>Home123123213</Text>
			</Text>
		</View>
	)
}
