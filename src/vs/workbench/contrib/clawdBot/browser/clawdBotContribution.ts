// Minimal Clawd Bot browser contribution (OpenClaw)
export function activateClawdBotContribution(registry?: { registerContribution?: (name: string, details: any) => void }): void {
  if (registry && typeof registry.registerContribution === 'function') {
    registry.registerContribution('clawdBot', { id: 'clawdBot', version: '0.1.0', name: 'Clawd Bot' });
  }
}
