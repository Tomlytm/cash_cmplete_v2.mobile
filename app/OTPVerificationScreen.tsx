import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { OtpInput } from "react-native-otp-entry";

export default function OtpVerification({ navigation }: any) {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        
        {/* Title */}
        <Text style={styles.title}>Verification</Text>

        {/* OTP Instruction */}
        <Text style={styles.subtitle}>
          We’ve send you the verification code on your mail

        </Text>

        {/* OTP Input */}
        <OtpInput
          numberOfDigits={6}
          focusColor="#055DAE"
          onFilled={(code) => setOtp(code)}
          onTextChange={setOtp}
          theme={{
            containerStyle: styles.otpContainer,
            pinCodeContainerStyle: styles.otpCell,
            pinCodeTextStyle: styles.otpText,
            focusedPinCodeContainerStyle: styles.focusedCell,
          }}
        />

        {/* Verify Button */}
        <TouchableOpacity style={[styles.signInButton,
            otp.length === 6 ? styles.activeButton : styles.disabledButton,
        ]} onPress={() => router.push('/ScheduleScreen')}>
          <Text style={styles.signInButtonText}>CONTINUE</Text>
          <Entypo name="arrow-right" size={15} color="#fff" style={{ marginLeft: 10, padding: 5, borderRadius: '50%', backgroundColor: '#0F3677' }} />
        </TouchableOpacity>

        {/* Resend Code */}
        <Text style={styles.resendText}>
        <Text style={styles.resendLink}>{`0:${String(timer).padStart(2, '0')}`}</Text>
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  icon: {
    marginBottom: 20,
    // alignSelf: "center", // Center horizontally
  },
  title: {
    fontSize: 32,
    color: "#0F172A",
    marginBottom: 10,
    fontFamily: "InstrumentSansSemiBold",
  },
  subtitle: {
    fontSize: 18,
    maxWidth: '70%',
    lineHeight: 29,
    color: "#64748B",
    marginBottom: 20,
    fontWeight: 300,
    marginTop: 10,
    fontFamily: "InstrumentSans",
  },
  highlight: {
    color: "#E5932B",
    fontWeight: "bold",
  },
  otpContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
  otpCell: {
    width: 50,
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#94BDFF",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  focusedCell: {
    borderColor: "#055DAE",
  },
  otpText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  verifyButton: {
    paddingVertical: 15,
    width: "100%",
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 20,
  },
  activeButton: {
    backgroundColor: '#055DAE',
  },
  disabledButton: {
    backgroundColor: "#A0AEC0",
  },
  signInButton: {
    flexDirection: 'row',
    borderRadius: 15,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  signInButtonText: {
    width: '25%',
    color: '#fff',
    // fontWeight: 'bold',
    fontSize: 16,
  },
  resendText: {
    fontSize: 18,
    color: "#120D26",
    textAlign: "center",
    fontFamily: "InstrumentSans",
    fontWeight: 300,
  },
  resendLink: {
    color: "#055DAE",
    fontWeight: "500",
    fontFamily: "InstrumentSansBold",
  },
});
