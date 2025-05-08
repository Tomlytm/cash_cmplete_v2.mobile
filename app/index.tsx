import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    Keyboard,
    SafeAreaView,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

export default function LoginScreen() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.image}
                        source={require("../assets/images/cashdark.png")}
                    />
                </View>
                <View style={{ paddingHorizontal: 40 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={styles.signInText}>Sign in</Text>

                        <View style={styles.profileRow}>
                            <View style={styles.avatar}>
                                <Text style={styles.avatarText}>B</Text>
                            </View>
                            <View>
                                <Text style={styles.name}>Babalola Oluwatoyin</Text>
                                <Text style={styles.vendor}>CIT Vendor</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.inputContainer}>
                        <MaterialCommunityIcons name="email-outline" size={20} color="#ccc" style={styles.icon} />
                        <TextInput
                            placeholder="leosadiq@email.com"
                            placeholderTextColor="#999"
                            value={email}
                            onChangeText={setEmail}
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <MaterialCommunityIcons name="lock-outline" size={20} color="#ccc" style={styles.icon} />
                        <TextInput
                            placeholder="Your password"
                            placeholderTextColor="#999"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                            style={styles.input}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} >
                            <Entypo name={showPassword ? "eye" : "eye-with-line"} size={20} color="#ccc" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.rememberRow}>
                            <Switch
                                value={rememberMe}
                                onValueChange={setRememberMe}
                                thumbColor="#fff"
                                trackColor={{ false: "#ccc", true: "#5669FF" }}
                            />
                            <Text style={styles.rememberText}>Remember Me</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.forgotText}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.signInButton} onPress={()=> router.push('/OTPVerificationScreen')}>
                        <Text style={styles.signInButtonText}>SIGN IN</Text>
                        <Entypo name="arrow-right" size={15} color="#fff" style={{ marginLeft: 10, padding: 5, borderRadius: '50%', backgroundColor: '#0F3677' }} />
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Cash complete management</Text>
                    <Text style={styles.footerLink}>bluechip.biz</Text>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 60,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    image: {
        marginBottom: 80
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    logoText: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#002f5e',
    },
    greenTick: {
        color: '#4CAF50',
    },
    logoSub: {
        fontSize: 16,
        color: '#002f5e',
        letterSpacing: 3,
        marginTop: -4,
    },
    signInText: {
        fontSize: 22,
        fontWeight: '400',
        marginBottom: 10,
    },
    profileRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        
    },
    avatar: {
        backgroundColor: '#D7E7FF',
        width: 40,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    avatarText: {
        color: '#002f5e',
        fontWeight: 'bold',
    },
    name: {
        fontWeight: '500',
    },
    vendor: {
        color: 'gray',
        fontSize: 12,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 8,
        paddingHorizontal: 10,
        // paddingVertical: 10,
        marginBottom: 20,
        backgroundColor: 'white',
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        paddingVertical: 22,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
    },
    rememberRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rememberText: {
        marginLeft: 8,
        color: 'gray',
    },
    forgotText: {
        color: 'gray',
        fontSize: 12,
    },
    signInButton: {
        flexDirection: 'row',
        backgroundColor: '#055DAE',
        borderRadius: 15,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    signInButtonText: {
        width: '20%',
        color: '#fff',
        // fontWeight: 'bold',
        fontSize: 16,
    },
    footer: {
        alignItems: 'center',
        marginTop: 20,
    },
    footerText: {
        color: 'gray',
    },
    footerLink: {
        color: '#b0b0b0',
        fontWeight: 'bold',
        marginTop: 4,
    },
});
