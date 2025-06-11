import {
   Bell,
   ChevronRight,
   ExternalLink,
   Info,
   Moon,
   Shield
} from 'lucide-react-native';
import React, { useState } from 'react';
import {
   Alert,
   Linking,
   Platform,
   ScrollView,
   StyleSheet,
   Switch,
   Text,
   TouchableOpacity,
   View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
   const [darkMode, setDarkMode] = useState(false);
   const [notifications, setNotifications] = useState(true);

   const toggleDarkMode = () => {
      setDarkMode(prev => !prev);
      // In a real app, this would update a theme context
   };

   const toggleNotifications = () => {
      setNotifications(prev => !prev);
      // In a real app, this would update notification settings
   };

   const openPrivacyPolicy = () => {
      // Placeholder URL - would be replaced with actual privacy policy
      Linking.openURL('https://example.com/privacy-policy');
   };

   const openHelp = () => {
      // Placeholder URL - would be replaced with actual help page
      Linking.openURL('https://example.com/help');
   };

   const checkForUpdates = () => {
      Alert.alert(
         "App is up to date",
         "You are using the latest version of the app.",
         [{ text: "OK" }]
      );
   };

   const renderSettingsItem = (
      icon: React.ReactNode,
      title: string,
      description: string,
      action: React.ReactNode
   ) => (
      <View style={styles.settingsItem}>
         <View style={styles.settingsItemIcon}>
            {icon}
         </View>
         <View style={styles.settingsItemContent}>
            <Text style={styles.settingsItemTitle}>{title}</Text>
            <Text style={styles.settingsItemDescription}>{description}</Text>
         </View>
         <View style={styles.settingsItemAction}>
            {action}
         </View>
      </View>
   );

   return (
      <SafeAreaView style={styles.container}>
         <Text style={styles.title}>Settings</Text>

         <ScrollView style={styles.scrollView}>
            <View style={styles.section}>
               <Text style={styles.sectionTitle}>Appearance</Text>

               {renderSettingsItem(
                  <Moon size={22} color="#0047AB" />,
                  "Dark Mode",
                  "Enable dark mode for night viewing",
                  <Switch
                     value={darkMode}
                     onValueChange={toggleDarkMode}
                     trackColor={{ false: '#DDD', true: '#0047AB' }}
                     thumbColor="#FFF"
                  />
               )}
            </View>

            <View style={styles.section}>
               <Text style={styles.sectionTitle}>Notifications</Text>

               {renderSettingsItem(
                  <Bell size={22} color="#0047AB" />,
                  "Push Notifications",
                  "Receive alerts for important updates",
                  <Switch
                     value={notifications}
                     onValueChange={toggleNotifications}
                     trackColor={{ false: '#DDD', true: '#0047AB' }}
                     thumbColor="#FFF"
                  />
               )}
            </View>

            <View style={styles.section}>
               <Text style={styles.sectionTitle}>About</Text>

               {renderSettingsItem(
                  <Info size={22} color="#0047AB" />,
                  "App Version",
                  Platform.OS === 'web' ? "Web 1.0.0" : "Mobile 1.0.0",
                  <TouchableOpacity onPress={checkForUpdates}>
                     <Text style={styles.actionText}>Check for updates</Text>
                  </TouchableOpacity>
               )}

               {renderSettingsItem(
                  <Shield size={22} color="#0047AB" />,
                  "Privacy Policy",
                  "Read how we protect your data",
                  <TouchableOpacity onPress={openPrivacyPolicy}>
                     <ChevronRight size={22} color="#888" />
                  </TouchableOpacity>
               )}

               {renderSettingsItem(
                  <ExternalLink size={22} color="#0047AB" />,
                  "Help & Support",
                  "Get assistance with using the app",
                  <TouchableOpacity onPress={openHelp}>
                     <ChevronRight size={22} color="#888" />
                  </TouchableOpacity>
               )}
            </View>

            <View style={styles.footer}>
               <Text style={styles.footerText}>
                  USSD Dialer App © 2025
               </Text>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#F9F9F9',
   },
   title: {
      fontSize: 24,
      fontWeight: '700',
      color: '#0047AB',
      marginBottom: 16,
      paddingHorizontal: 16,
      paddingTop: 16,
   },
   scrollView: {
      flex: 1,
   },
   section: {
      marginBottom: 24,
      backgroundColor: '#FFF',
      borderRadius: 8,
      marginHorizontal: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
      overflow: 'hidden',
   },
   sectionTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: '#555',
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#EEE',
   },
   settingsItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#F5F5F5',
   },
   settingsItemIcon: {
      marginRight: 16,
   },
   settingsItemContent: {
      flex: 1,
   },
   settingsItemTitle: {
      fontSize: 16,
      fontWeight: '500',
      color: '#333',
      marginBottom: 4,
   },
   settingsItemDescription: {
      fontSize: 14,
      color: '#777',
   },
   settingsItemAction: {
      marginLeft: 8,
   },
   actionText: {
      fontSize: 14,
      color: '#0047AB',
   },
   footer: {
      padding: 16,
      alignItems: 'center',
   },
   footerText: {
      fontSize: 12,
      color: '#999',
   },
});