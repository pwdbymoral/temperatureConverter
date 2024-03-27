import { Text, View } from 'react-native';
import React from 'react';
import Conversor from './components/conversor';

export default function App() {
  return (
    <View className="h-screen bg-gray-200">
      <View className="flex flex-row items-center justify-between bg-blue-400 p-4">
        <Text className="text-2xl font-bold">Conversor Bolado 3000</Text>
      </View>
      <Conversor />
    </View>
  );
}
