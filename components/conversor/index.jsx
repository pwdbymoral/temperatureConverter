import { Text, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function Conversor() {
  const [temperatura, onChangeTemperatura] = useState(0);
  const [temperaturaConvertida, setTemperaturaConvertida] = useState(32);

  function converter() {
    setTemperaturaConvertida(1.8 * temperatura + 32);
  }

  return (
    <View className="mx-auto w-1/2 flex-1 items-center justify-center space-y-4">
      <Text className="w-full text-lg">Digite a temperatura em Celcius:</Text>
      <TextInput
        className="mb-4 w-full bg-slate-100 px-2"
        defaultValue="0"
        onChangeText={(temperatura) => onChangeTemperatura(temperatura)}
      />
      <Button title="Converter" className="w-full" onPress={converter} />
      <Text className="text-lg">Resultado: {temperaturaConvertida}</Text>
    </View>
  );
}
