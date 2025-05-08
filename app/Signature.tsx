// TransactionSummary.tsx
import { Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Signature from 'react-native-signature-canvas';

export default function TransactionSummary() {
    const router = useRouter();
    const handleSignature = (signature: any) => {
        console.log(signature);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.statusSection}>
                {/* <Ionicons name="alert-circle-outline" size={250} color="#f4a11f" /> */}
                <Text style={styles.statusText}>You need to deliver cash to the allocated cash officer</Text>
            </View>


            <View style={styles.card}>
                {/* Bank Info */}
                <View style={styles.row}>
                    <Image source={require('../assets/images/bank-building.png')} style={styles.bankIcon} />
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.bankName, { marginBottom: 4 }]}>Access Bank</Text>
                        <Text style={[styles.branch, { marginBottom: 4 }]}>Anthony Br.</Text>
                        <Text style={styles.branchCode}>BR. Code: 223-9013</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={[styles.packageIdLabel, { marginBottom: 4 }]}>Package ID:</Text>
                        <Text style={[styles.packageId, { marginBottom: 4 }]}>5541-498-9001</Text>
                        <Text style={styles.arrived}>Arrived (27 km)</Text>
                    </View>
                </View>

                {/* Address */}
                <View style={styles.infoBlock}>
                    <Text style={styles.infoLabel}>Address:</Text>
                    <Text style={styles.infoText}>30 Anthony RD. Off New Park.</Text>
                </View>

                {/* Receiver */}
                <View style={styles.infoBlock}>
                    <Text style={styles.infoLabel}>Cash Receiver</Text>
                    <View style={styles.receiverRow}>
                        <View style={styles.avatar}><Text style={styles.avatarText}>B</Text></View>
                        <View>
                            <Text style={styles.receiverName}>Babalola Oluwatoyin</Text>
                            <Text style={styles.receiverEmail}>babalola.recelwang@gmail.com</Text>
                        </View>
                    </View>
                </View>

                {/* Amount */}
                <View style={styles.infoBlock}>
                    <Text style={styles.infoLabel}>Amount Received:</Text>
                    <Text style={styles.amount}>₦228,770,000,000</Text>
                </View>

                {/* Signature Box */}
                <Text style={{marginTop: 30}}>Signature:</Text>
                <View style={styles.signatureBox}>
                    <Signature
                        onOK={handleSignature}
                        descriptionText="Signature"
                        clearText="Clear"
                        confirmText="Save"
                        webStyle={signatureStyles}
                    />
                </View>
            <TouchableOpacity style={[{ margin: 20 }, styles.signInButton]} onPress={() => router.push('/Signature')}>
                <Text style={styles.signInButtonText}>CAPTURE</Text>
                <Entypo name="arrow-right" size={15} color="#fff" style={{ marginLeft: 10, padding: 5, borderRadius: '50%', backgroundColor: '#0F3677' }} />
            </TouchableOpacity>
            </View>

            {/* Capture Button */}
        </SafeAreaView>
    );
}

const signatureStyles = `
  .m-signature-pad--footer {display: none; margin: 0px;}
  body,html {
    width: 100%; height: 100%;
  }
`;

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
        paddingVertical: 30,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 4,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bankIcon: {
        width: 36,
        height: 36,
        marginRight: 10,
    },
    bankName: {
        fontWeight: '600',
        fontSize: 14,
    },
    branch: {
        fontSize: 13,
        color: '#444',
    },
    branchCode: {
        fontSize: 12,
        color: '#2196F3',
    },
    packageIdLabel: {
        fontSize: 12,
        color: '#999',
    },
    packageId: {
        fontSize: 13,
        fontWeight: '500',
    },
    arrived: {
        fontSize: 12,
        color: 'green',
    },
    infoBlock: {
        marginTop: 20,
    },
    infoLabel: {
        color: '#888',
        fontSize: 12,
        marginBottom: 4,
    },
    infoText: {
        fontSize: 14,
        fontWeight: '500',
    },
    receiverRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    avatar: {
        width: 36,
        height: 36,
        backgroundColor: '#D1E4FF',
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    avatarText: {
        color: '#0057D9',
        fontWeight: 'bold',
    },
    receiverName: {
        fontWeight: '600',
        fontSize: 14,
    },
    receiverEmail: {
        fontSize: 12,
        color: '#666',
    },
    amount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    signatureBox: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginTop: 20,
        height: 200,
        overflow: 'hidden',
    },
    captureButton: {
        backgroundColor: '#0057D9',
        marginTop: 24,
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
    },
    captureText: {
        color: '#fff',
        fontWeight: 'bold',
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
        width: '25%',
        color: '#fff',
        // fontWeight: 'bold',
        fontSize: 16,
    },
});
