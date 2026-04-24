// Minimal Claw Code code lens provider
export function activateClawCodeLens(registry?: { registerContribution?: (name: string, details: any) => void }): void {
  if (registry && typeof registry.registerContribution === 'function') {
    registry.registerContribution('clawCodeLens', { id: 'clawCodeLens', version: '0.1.0', name: 'Claw Code Lens' });
  }
  // Placeholder code lens for P0 scaffold
}
