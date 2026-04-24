// Minimal Clawd Bot panel
export function activateClawdBotPanel(registry?: { registerContribution?: (name: string, details: any) => void }): void {
  if (registry && typeof registry.registerContribution === 'function') {
    registry.registerContribution('clawdBotPanel', { id: 'clawdBotPanel', version: '0.1.0', name: 'Clawd Bot Panel' });
  }
}
