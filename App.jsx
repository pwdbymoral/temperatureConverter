import { Text, View } from 'react-native';
import React from 'react';
import Conversor from './components/conversor';

export default function App() {
  return (
    <View className="h-screen bg-gray-200">
      <View className="flex flex-row items-center justify-between bg-cyan-800 p-4">
        <Text className="text-3xl font-bold text-slate-100">Conversor Bolado 3000</Text>
      </View>
      <View className="flex h-full items-center justify-center">
        <View className="h-96">
          <Conversor />
        </View>
      </View>
    </View>
  );
}
