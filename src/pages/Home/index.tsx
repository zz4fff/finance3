import React, 
  { 
    useCallback, 
    useState, 
    useEffect, 
    useRef 
  } from "react";
import { Text, View, ScrollView } from "react-native";

import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { FlashList } from "@shopify/flash-list";
import type { FlashListRef, ListRenderItem } from "@shopify/flash-list";

import styles from "./styles";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Header from "@/src/components/Header";
import Movements from "@/src/components/Movements";
import { Account } from "@/src/types";
import Balance from "@/src/components/Balance";

const list = [
  {
    id: 1,
    label: "Boleto conta luz",
    value: 150.00,
    date: "17/01/2024",
    type: 0 // despesa
  },
  {
    id: 2,
    label: "Boleto conta água",
    value: 170.00,
    date: "20/01/2024",
    type: 0 // despesa
  },
  {
    id: 3,
    label: "Pix Cliente X",
    value: 2500.00,
    date: "22/01/2024",
    type: 1 // receita / entrada
  },
  {
    id: 4,
    label: "Pix Cliente Y",
    value: 1270.00,
    date: "13/03/2024",
    type: 1 // receita / entrada
  },
  {
    id: 5,
    label: "Boleto iFood",
    value: 440.67,
    date: "20/01/2025",
    type: 0 // despesa
  },
  {
    id: 6,
    label: "Pix Cliente Z",
    value: 1111.11,
    date: "22/01/2026",
    type: 1 // receita / entrada
  },
];

export default function Home() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [sumOfDebits, setSumOfDebits] = useState(0);
  const [sumOfCredits, setSumOfCredits] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchAccountData = async () => {
    try {
      const {list: Accounts, error} = await {list, error: null};
      return {list: Accounts, error};
    } catch (error) {
      return {list: [], error};
    }
  };

  const calculateSums = (accounts: Account[], recordType: number) => {
    if (accounts.length > 0) {
      const sum = accounts.reduce(
        (total, currentValue) => total + (
          recordType === currentValue.type ? currentValue.value : 0
        ), 0);
      return parseFloat(sum.toFixed(2));
    }
    return 0;
  };

  const EmptyListMessage = () => {
    if (loading) {
      return <Text>Carregando...</Text>;
    } else {
      return <Text>Nenhuma movimentação encontrada.</Text>;
    }
  };

  useEffect(() => {
    const updateData = async () => {
      const {list: Accounts, error} = await fetchAccountData();
      if (error) {
        setAccounts([]);
      } else {
        {Accounts && setAccounts(Accounts)};
      }
    }
    setLoading(true);
    updateData();
    setLoading(false);
  }, []);

  const updateSums = () => {
    setSumOfDebits(calculateSums(accounts, 0));
    setSumOfCredits(calculateSums(accounts, 1));
  };

  useFocusEffect(
    useCallback(() => {
      {!loading && updateSums()};
    }, [accounts])
  );



  return (
    <View style={styles.container}>
      <Header name="John Doe" />

      <Balance entradas={sumOfCredits} gastos={sumOfDebits} />

      {/* <Actions /> */}

      <ScrollView
        style={styles.scrollArea}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Últimas movimentações</Text>

        <View style={styles.list}>
          <FlashList
            data={list}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <Movements item={item} />}
          />
        </View>
      </ScrollView>
    </View> 
  );
}
