import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import React, { useEffect, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const DATES = ["Mon\n05", "Tue\n06", "Wed\n07", "Thur\n08"];
const STATUS = ["Pending", "Completed"];
const completedData = [
  {
    title: "Stanbic IBTC - Ikoyi",
    code: "BR. Code: 201-001",
    phone: "0807-890-1234",
    time: "10mins",
    icon: require("../assets/images/bank-building.png"),
  },
  {
    title: "Union Bank - Marina",
    code: "BR. Code: 202-002",
    phone: "0808-901-2345",
    time: "15mins",
    icon: require("../assets/images/bank-building.png"),
  },
];

const scheduleData = [
  {
    title: "Access Bank - Victoria Island",
    code: "BR. Code: 101-001",
    phone: "0801-234-5678",
    time: "15mins",
    icon: require("../assets/images/bank-building.png"),
  },
  {
    title: "GTBank - Lekki Phase 1",
    code: "BR. Code: 102-002",
    phone: "0802-345-6789",
    time: "25mins",
    icon: require("../assets/images/bank-building.png"),
  },
  {
    title: "Zenith Bank - Ikeja",
    code: "BR. Code: 103-003",
    phone: "0803-456-7890",
    time: "30mins",
    icon: require("../assets/images/bank-building.png"),
  },
  {
    title: "First Bank - Surulere",
    code: "BR. Code: 104-004",
    phone: "0804-567-8901",
    time: "20mins",
    icon: require("../assets/images/bank-building.png"),
  },
  {
    title: "UBA - Yaba",
    code: "BR. Code: 105-005",
    phone: "0805-678-9012",
    time: "18mins",
    icon: require("../assets/images/bank-building.png"),
  },
  {
    title: "Fidelity Bank - Apapa",
    code: "BR. Code: 106-006",
    phone: "0806-789-0123",
    time: "40mins",
    icon: require("../assets/images/bank-building.png"),
  },
];

export default function ScheduleScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"Pending" | "Completed">(
    "Pending"
  );
  const slideAnim = new Animated.Value(activeTab === "Pending" ? 0 : 1);

  const handleTabSwitch = (tab: "Pending" | "Completed") => {
    setActiveTab(tab);
    Animated.timing(slideAnim, {
      toValue: tab === "Pending" ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };
  useEffect(() => {
    const fetchIsDone = async () => {
      const isDone = await SecureStore.getItemAsync("isDone");
      if (isDone === "true") {
        completedData.unshift({
          title: "AccessBank - Ajah",
          code: "BR. Code: 107-007",
          phone: "0807-890-5678",
          time: "12mins",
          icon: require("../assets/images/bank-building.png"),
        });
      }
    };

    fetchIsDone();
  }, []);

  const renderItem = ({ item }: any) => (
    <View style={styles.listItem}>
      <Image
        source={require("../assets/images/bank-building.png")}
        style={{ marginRight: 10 }}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.code}</Text>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.phone}>{item.phone}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  const translateX = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Dimensions.get("window").width / 2 - 30], // Dynamically use half the screen width
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="arrow-left" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Schedule</Text>
        <MaterialCommunityIcons name="dots-vertical" size={24} />
      </View>

      {/* Date Tabs */}
      <View style={styles.dateContainer}>
        {DATES.map((day, i) => (
          <TouchableOpacity
            key={i}
            style={[styles.dateItem, i === 3 && styles.activeDate]}
          >
            <Text style={[styles.dateText, i === 3 && styles.activeDateText]}>
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Toggle Tabs */}
      <View style={styles.tabContainer}>
        {STATUS.map((status, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => handleTabSwitch(status as any)}
            style={styles.tab}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === status && styles.activeTabText,
              ]}
            >
              {status}
            </Text>
          </TouchableOpacity>
        ))}

        <Animated.View
          style={[
            styles.tabIndicator,
            {
              transform: [{ translateX }],
            },
          ]}
        />
      </View>

      {/* List */}
      <FlatList
        data={activeTab === "Pending" ? scheduleData : completedData}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={async () => {
              if (activeTab === "Pending") {
                await SecureStore.setItemAsync("isDone", "false");
                router.push("/StartNavigation");
              }
            }}
          >
            {renderItem({ item })}
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontWeight: "600",
    fontSize: 18,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  dateItem: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: "#0082cb",
    borderRadius: 10,
    width: 70,
    alignItems: "center",
  },
  dateText: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",
  },
  activeDate: {
    backgroundColor: "#5ee183",
  },
  activeDateText: {
    color: "#fff",
  },
  tabContainer: {
    flexDirection: "row",
    borderRadius: 10,
    marginBottom: 15,
    position: "relative",
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  tabText: {
    fontSize: 16,
    color: "#555555",
  },
  activeTabText: {
    color: "#002f5e",
    fontWeight: 500,
  },
  tabIndicator: {
    position: "absolute",
    bottom: 0,
    width: "50%",
    height: 5,
    backgroundColor: "#002f5e",
    borderRadius: 5,
  },
  listItem: {
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    alignItems: "center",
  },
  title: {
    fontWeight: "400",
    marginBottom: 5,
  },
  subtitle: {
    color: "gray",
    fontSize: 12,
  },
  phone: {
    fontSize: 13,
  },
  time: {
    color: "#34C759",
    fontSize: 13,
  },
});
