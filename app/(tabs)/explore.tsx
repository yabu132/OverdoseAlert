import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.container}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
        headerImage={
          <IconSymbol
            size={310}
            color="#E0262D" // Updated globe color
            name="globe"
            style={styles.headerImage}
          />
        }
      >
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Explore</ThemedText>
        </ThemedView>
        <ThemedText>
          Here are some FAQ. Please reach out to rishikaj005@gmail.com for any questions.
        </ThemedText>
        <Collapsible title="Can administering Narcan cause harm?">
          <ThemedText>
            NO! Narcan is a safe medication that has no potential for abuse. It is not a controlled
            substance.
            <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
            <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
          </ThemedText>

          <ExternalLink href="https://narcan.com/en/">
            <ThemedText type="link">Learn more</ThemedText>
          </ExternalLink>
        </Collapsible>
        <Collapsible title="How to administer Narcan?">
          <ThemedText>Lay: Put the patient in a sleeping position.</ThemedText>
          <ThemedText>Spray: Administer Narcan into nostrils.</ThemedText>
          <ThemedText>
            Stay: Immediately call 911 and stay with the patient until help arrives.
          </ThemedText>
          <ThemedText>
            IF ONE DOSE DOES NOT WORK, ADMINISTER A SECOND DOSE AFTER 2-3 MINUTES.
          </ThemedText>

          <ExternalLink href="https://www.youtube.com/watch?v=B9Sv64FJPhg">
            <ThemedText type="link">Video Tutorial</ThemedText>
          </ExternalLink>
        </Collapsible>
        <Collapsible title="Where to get Narcan?">
          <ThemedText>
            Contact local hospitals, pharmacies, or community organizations to get Narcan.
          </ThemedText>
          <ExternalLink href="https://www.dhcs.ca.gov/individuals/Pages/Naloxone_Distribution_Project.aspx">
            <ThemedText type="link">Learn more</ThemedText>
          </ExternalLink>
        </Collapsible>
      </ParallaxScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F39B6D', // Updated background color
  },
  headerImage: {
    color: '#E0262D', // Updated globe color
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});