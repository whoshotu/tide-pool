// Minimal Claw Code browser contribution (frontend)
export function activateClawCodeContribution(registry?: { registerContribution?: (name: string, details: any) => void }): void {
  if (registry && typeof registry.registerContribution === 'function') {
    registry.registerContribution('clawCode', { id: 'clawCode', version: '0.1.0', name: 'Claw Code Core' });
  }
  // Activated as part of IDE bootstrap in P0 scaffold
}
