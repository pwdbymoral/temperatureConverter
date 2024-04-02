import { Text, TextInput, View, Pressable } from 'react-native';
import React, { useState } from 'react';

export default function Conversor() {
  const [temperaturaCelcius, setTemperaturaCelcius] = useState('0');
  const [temperaturaFahrenheit, setTemperaturaFahrenheit] = useState(32);

  function converter() {
    setTemperaturaFahrenheit(1.8 * temperaturaCelcius + 32);
  }

  return (
    <View className="mx-auto w-2/3 flex-1 items-center justify-center space-y-4 rounded-xl bg-gray-100 px-2">
      <Text className="w-full text-lg">Digite a temperatura em Celcius (ºC):</Text>
      <TextInput
        className="w-full bg-slate-100 px-2"
        keyboardType="numeric"
        placeholder="Digite a temperatura em celcius"
        defaultValue={temperaturaCelcius}
        onChangeText={(temperaturaModificada) => {
          setTemperaturaCelcius(temperaturaModificada);
        }}
      />
      <Pressable
        className="w-40 rounded-md bg-cyan-500"
        onPress={() => {
          converter();
        }}
      >
        <Text className="p-2 text-lg">Converter</Text>
      </Pressable>
      <View className="w-2/3 bg-cyan-800 p-2 shadow-xl">
        <Text className="text-lg text-gray-100">
          Temperatura em Fahrenheit: {temperaturaFahrenheit}ºF
        </Text>
      </View>
    </View>
  );
}
