// Minimal Claw Code inline diff view
export function activateClawDiffView(registry?: { registerContribution?: (name: string, details: any) => void }): void {
  if (registry && typeof registry.registerContribution === 'function') {
    registry.registerContribution('clawDiffView', { id: 'clawDiffView', version: '0.1.0', name: 'Claw Diff View' });
  }
  // Placeholder diff view for P0 scaffold
}
