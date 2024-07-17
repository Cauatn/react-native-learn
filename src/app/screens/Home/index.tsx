import styles from "./styles";

import { StatusBar } from "expo-status-bar";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../../../components/Participant";
import { createRef, useState } from "react";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [newParticipant, setNewParticipant] = useState("");
  const inputRef = createRef<TextInput>();

  function handleParticipantAdd(name: string) {
    if (participants.includes(name)) {
      return Alert.alert(
        "Participante já adicionado",
        "Esse participante já foi adicionado a lista de presença."
      );
    }

    setParticipants((prevState) => {
      return [...prevState, name];
    });

    inputRef.current?.clear();
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover participante", "Deseja remover o participante ?", [
      {
        text: "Não",
        onPress: () => {
          Alert.alert("Operação cancelada");
        },
      },
      {
        text: "Sim",
        style: "cancel",
        onPress: () => {
          setParticipants(() => {
            const filteredParticipants = participants.filter(
              (participant) => participant !== name
            );

            return filteredParticipants;
          });
        },
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Nome do evento</Text>

        <Text style={styles.description}>Sexta 6, 4 de novembro de 2024.</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={(text) => setNewParticipant(text)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleParticipantAdd(newParticipant)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                textAlign: "center",
                marginTop: 16,
              }}
            >
              Ninguém chegou no evento ainda ? Adicione participantes a sua
              lista de presença.
            </Text>
          );
        }}
      />
    </View>
  );
}
