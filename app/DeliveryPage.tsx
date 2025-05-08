import { Entypo, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DeliveryScreen() {
    const router = useRouter();
    return (
        <SafeAreaView style={styles.container}>
            {/* Status Icon and Message */}
            <View style={styles.statusSection}>
                <Ionicons name="alert-circle-outline" size={250} color="#f4a11f" />
                <Text style={styles.statusText}>You need to deliver cash to the allocated cash officer</Text>
            </View>

            {/* Bank Info */}
            <View style={styles.card}>
                <View style={styles.row}>
                    <Image source={require('../assets/images/bank-building.png')} style={{ marginRight: 10 }} />
                    <View style={{ flex: 1 }}>
                        <Text style={styles.bankName}>Access Bank</Text>
                        <Text style={styles.branch}>Anthony Br.</Text>
                        <Text style={styles.branchCode}>BR. Code: <Text style={{ color: '#007AFF' }}>223-9013</Text></Text>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={styles.pkgLabel}>Package ID:</Text>
                        <Text style={styles.pkgValue}>5541-498-9001</Text>
                        <Text style={styles.arrived}>Arrived (27 km)</Text>
                    </View>
                </View>
                {/* Address */}
                <View style={styles.row}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="alert-circle-outline" size={16} color="#aaa" />
                        <View style={styles.line} />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.label}>Address:</Text>
                        <Text style={styles.value}>30 Anthony RD. Off New Park.</Text>
                    </View>
                </View>

                {/* Cash Receiver */}
                <View style={styles.row}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="alert-circle-outline" size={16} color="#aaa" />
                        <View style={styles.line} />
                    </View>
                    <View style={styles.content}>
                        <Text style={[styles.label, { color: '#007AFF' }]}>Cash Receiver</Text>
                        <View style={styles.receiverRow}>
                            <View style={styles.receiverIcon}>
                                <Text style={styles.receiverInitial}>B</Text>
                            </View>
                            <View>
                                <Text style={styles.receiverName}>Babalola Oluwatoyin</Text>
                                <Text style={styles.receiverEmail}>babalola.receiver@gmail.com</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Contact */}
                <View style={styles.row}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="alert-circle-outline" size={16} color="#aaa" />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.label}>Contact</Text>
                        <Text style={styles.value}>0901 121 3356</Text>
                    </View>
                </View>



                {/* Deliver Cash Button */}
                <TouchableOpacity style={[{ marginHorizontal: 10 }, styles.signInButton]} onPress={() => router.push('/DenominationBreakDown')}>
                    <Text style={styles.signInButtonText}>DELIVER CASH</Text>
                    <Entypo name="arrow-right" size={15} color="#fff" style={{ marginLeft: 10, padding: 5, borderRadius: '50%', backgroundColor: '#0F3677' }} />
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        padding: 20,
    },
    statusSection: {
        alignItems: 'center',
        marginVertical: 30,
    },
    statusText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#666',
        marginTop: 10,
        paddingHorizontal: 10,
    },
    card: {
        backgroundColor: '#f9f9f9',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderRadius: 16,
        paddingHorizontal: 20,
        paddingVertical: 50,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 4,
    },
    iconLeft: {
        marginRight: 10,
        marginTop: 4,
    },
    bankName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    branch: {
        fontSize: 14,
        color: '#555',
    },
    branchCode: {
        fontSize: 12,
        color: '#888',
    },
    pkgLabel: {
        fontSize: 12,
        color: '#888',
    },
    pkgValue: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    arrived: {
        fontSize: 12,
        color: 'green',
    },
    section: {
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        marginTop: 15,
        paddingTop: 10,
    },
    sectionTitle: {
        fontSize: 13,
        color: '#888',
        marginBottom: 5,
    },
    contactNumber: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#007AFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 14,
        borderRadius: 25,
        marginTop: 30,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 15,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 25,
    },
    iconContainer: {
        alignItems: 'center',
        width: 30,
        position: 'relative',
    },
    line: {
        position: 'absolute',
        top: 18,
        left: 14,
        width: 1,
        height: 60,
        backgroundColor: '#ccc',
    },
    content: {
        flex: 1,
    },
    label: {
        fontSize: 13,
        color: '#888',
        marginBottom: 2,
    },
    value: {
        fontSize: 14,
        color: '#222',
    },
    receiverRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    receiverIcon: {
        backgroundColor: '#e6e8ff',
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    receiverInitial: {
        color: '#5b61f4',
        fontWeight: 'bold',
        fontSize: 16,
    },
    receiverName: {
        fontSize: 14,
        fontWeight: '600',
    },
    receiverEmail: {
        fontSize: 12,
        color: '#666',
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
        width: '35%',
        color: '#fff',
        // fontWeight: 'bold',
        fontSize: 16,
    },
});
