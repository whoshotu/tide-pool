// Minimal Clawd Bot status bar
export function activateClawdBotStatusBar(registry?: { registerContribution?: (name: string, details: any) => void }): void {
  if (registry && typeof registry.registerContribution === 'function') {
    registry.registerContribution('clawdBotStatusBar', { id: 'clawdBotStatusBar', version: '0.1.0', name: 'Clawd Bot Status Bar' });
  }
}
