// Minimal Claw Code chat panel (UI)
export function activateClawChatPanel(registry?: { registerContribution?: (name: string, details: any) => void }): void {
  if (registry && typeof registry.registerContribution === 'function') {
    registry.registerContribution('clawChatPanel', { id: 'clawChatPanel', version: '0.1.0', name: 'Claw Chat Panel' });
  }
  // Placeholder activation for P0 scaffold
}
