import { Tabs } from 'expo-router';
import { House, Wallet, ChartPie, Settings } from 'lucide-react-native';
import { useCSSVariable } from 'uniwind';


const TabLayout = () => {
    const backgroundNavigation = useCSSVariable('--color-background')

    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: backgroundNavigation?.toString() }
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <House size={20} color={color} />,
                }}
            />
            <Tabs.Screen
                name="cards"
                options={{
                    title: 'My Cards',
                    tabBarIcon: ({ color }) => <Wallet size={20} color={color} />,
                }}
            />
            <Tabs.Screen
                name="stats"
                options={{
                    title: 'Statistics',
                    tabBarIcon: ({ color }) => <ChartPie size={20} color={color} />,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color }) => <Settings size={20} color={color} />,
                }}
            />
        </Tabs>
    )
}

export default TabLayout