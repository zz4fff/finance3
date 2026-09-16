import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
} from 'react-native';

import { MotiView } from 'moti';

import colors from '../../theme/colors';

export default function Balance({ entradas, gastos }: { entradas: number, gastos: number }) {
    return (
        <MotiView 
            style={styles.container}
            from={{
                rotateX: '-100deg',
                opacity: 0,
            }}
            animate={{
                rotateX: '0deg',
                opacity: 1,
            }}
            transition={{
                type: 'timing',
                duration: 800,
                delay: 300,
            }}
        >
            {/* Entradas */}
            <View style={styles.itemIncome}>
                <Text style={styles.itemTitle}>Entradas</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.income}>
                        {new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(entradas)}
                    </Text>
                </View>
            </View>

            {/* Gastos */}
            <View style={styles.itemExpenses}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.expenses}>
                        {new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(gastos)}
                    </Text>
                </View>
            </View>

        </MotiView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.opacity_white,
        borderWidth: 1,
        borderRadius: 16,
        borderColor: colors.gray_200,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingStart: 4,
        paddingEnd: 4,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        paddingTop: 8,
        paddingBottom: 8,
        zIndex: 99,
    },

    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    itemIncome: {
        backgroundColor: colors.opacity_green,
        borderWidth: 1,
        padding: 8,
        borderRadius: 8,
        borderColor: colors.gray_200,
        alignItems: 'center',
        width: '30%',
    },

    itemExpenses: {
        backgroundColor: colors.opacity_red,
        borderWidth: 1,
        padding: 8,
        borderRadius: 8,
        borderColor: colors.gray_200,
        alignItems: 'center',
        width: '30%',
    },

    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.gray_400,
        marginBottom: 6,
    },

    currencySymbol: {
        fontSize: 16,
        color: colors.gray_400,
        marginRight: 6,
    },

    income: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.green,
    },

    expenses: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.red,
    },
});