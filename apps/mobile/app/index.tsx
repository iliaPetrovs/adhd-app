import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button3D, TactileCheckbox, EnergyBadge, ProgressBar } from '@adhd-app/ui';
import { useState } from 'react';

export default function HomeScreen() {
  const [checked, setChecked] = useState(false);
  const [progress, setProgress] = useState(0.3);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Tactile Sandbox</Text>

      <Text style={styles.label}>Button3D</Text>
      <Button3D onPress={() => setProgress((p) => Math.min(p + 0.2, 1))}>
        Advance Progress
      </Button3D>

      <Text style={styles.label}>ProgressBar</Text>
      <ProgressBar progress={progress} />

      <Text style={styles.label}>TactileCheckbox</Text>
      <View style={styles.row}>
        <TactileCheckbox checked={checked} onChange={setChecked} />
        <Text style={styles.checkLabel}>Mark complete</Text>
      </View>

      <Text style={styles.label}>EnergyBadge</Text>
      <View style={styles.row}>
        <EnergyBadge level="LOW" />
        <EnergyBadge level="MEDIUM" />
        <EnergyBadge level="HIGH" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  content: { padding: 24, gap: 12 },
  heading: { fontSize: 24, fontWeight: '700', color: '#f1f5f9', marginBottom: 16 },
  label: { fontSize: 13, color: '#64748b', marginTop: 20, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  checkLabel: { color: '#cbd5e1', fontSize: 16 },
});
